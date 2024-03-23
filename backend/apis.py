from http import HTTPStatus
import boto3
from application import db
from database_models import User, Survey
from passlib.hash import sha256_crypt
from flask import (
    request,
    Blueprint,
    jsonify,
    make_response,
    Response,
    send_file,
    render_template,
)
import logging

from flask_restful import Resource
import os
import json

aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
aws_secret_access_key = os.getenv("AWS_SECRET_ACCESS_KEY")
region_name = os.getenv("REGION_NAME")


class Register(Resource):
    def get(self) -> Response:
        username = request.headers.get("username")
        password = request.headers.get("password")

        if not username or not password:
            return make_response(
                "username and password are required",
                HTTPStatus.BAD_REQUEST,
            )

        if User.query.filter_by(username=username).first():
            return make_response(
                "user already exists",
                HTTPStatus.BAD_REQUEST,
            )

        hashed_password = sha256_crypt.hash(password)  # salting the password (Hashing)
        new_user = User(username=username, password=hashed_password)

        try:
            if not db.session.is_active:
                db.session.begin()
            db.session.add(new_user)
            db.session.commit()
            return make_response(
                jsonify(
                    {"message": "user registered successfully", "user_id": new_user.id}
                ),
                HTTPStatus.CREATED,
            )

        except Exception as e:
            db.session.rollback()
            return make_response(
                jsonify({"error": "something went wrong. please try again later..."}),
                HTTPStatus.BAD_REQUEST,
            )

    def post(self) -> Response:
        username = request.headers.get("username")
        password = request.headers.get("password")

        if not username or not password:
            return make_response(
                "username and password are required",
                HTTPStatus.BAD_REQUEST,
            )

        if User.query.filter_by(username=username).first():
            return make_response(
                "user already exists",
                HTTPStatus.BAD_REQUEST,
            )

        hashed_password = sha256_crypt.hash(password)  # salting the password (Hashing)
        new_user = User(username=username, password=hashed_password)

        try:
            if not db.session.is_active:
                db.session.begin()
            db.session.add(new_user)
            db.session.commit()
            return make_response(
                jsonify(
                    {"message": "user registered successfully", "user_id": new_user.id}
                ),
                HTTPStatus.CREATED,
            )

        except Exception as e:
            db.session.rollback()
            return make_response(
                jsonify({"error": "something went wrong. please try again later..."}),
                HTTPStatus.BAD_REQUEST,
            )


class Login(Resource):
    def get(self) -> Response:
        username = request.headers.get("username")
        password = request.headers.get("password")

        if not username or not password:
            return make_response(
                "Username and password are required",
                HTTPStatus.BAD_REQUEST,
            )

        user = User.query.filter_by(username=username).first()

        if user and sha256_crypt.verify(password, user.password):
            return make_response(jsonify({"message": "login successful"}), 200)
        else:
            return make_response(
                jsonify({"error": "invalid username or password"}), 401
            )

    def post(self) -> Response:
        username = request.headers.get("username")
        password = request.headers.get("password")

        if not username or not password:
            return make_response(
                "Username and password are required",
                HTTPStatus.BAD_REQUEST,
            )

        user = User.query.filter_by(username=username).first()

        if user and sha256_crypt.verify(password, user.password):
            return make_response(jsonify({"message": "login successful"}), 200)
        else:
            return make_response(
                jsonify({"error": "invalid username or password"}), 401
            )


class CreateSurvey(Resource):
    def get(self) -> Response:
        return jsonify({"dummy": "This is a successful request"})

    def post(self) -> Response:
        username = request.headers.get("username")
        password = request.headers.get("password")

        if not username or not password:
            return make_response(
                "username and password are required",
                HTTPStatus.BAD_REQUEST,
            )

        survey_object = request.json
        survey_name = survey_object["survey_name"]
        survey_data = survey_object["survey_data"]
        user_id = User.query.filter_by(username=username).first().id

        if Survey.query.filter_by(user_id=user_id, survey_name=survey_name).first():
            return make_response(
                jsonify(
                    {
                        "error": "a survey with the same name previously exists for this user"
                    }
                ),
                HTTPStatus.BAD_REQUEST,
            )

        # Connecting to AWS S3 Bucket
        bucket_name = "sustainability-surveys"

        try:
            create_public_json_file(bucket_name, survey_name, survey_data)
        except Exception as e:
            return make_response(
                jsonify({"error": "something went wrong. please try again later..."}),
                HTTPStatus.BAD_REQUEST,
            )

        new_survey = Survey(user_id=user_id, survey_name=survey_name)

        try:
            if not db.session.is_active:
                db.session.begin()
            db.session.add(new_survey)
            db.session.commit()
            return make_response(
                jsonify({"message": "survey created successfully"}),
                HTTPStatus.CREATED,
            )
        except Exception as e:
            db.session.rollback()
            return make_response(
                jsonify({"error": "something went wrong. please try again later..."}),
                HTTPStatus.BAD_REQUEST,
            )


class GetSurvey(Resource):
    def get(self) -> Response:
        username = request.headers.get("username")
        password = request.headers.get("password")
        survey_name = request.args.get("survey_name")

        if not username or not password:
            return make_response(
                "username and password are required",
                HTTPStatus.BAD_REQUEST,
            )

        if not survey_name:
            return make_response(
                "please provide the name of the survey",
                HTTPStatus.BAD_REQUEST,
            )
        user_id = User.query.filter_by(username=username).first().id

        if Survey.query.filter_by(user_id=user_id, survey_name=survey_name).first():
            # Connecting to AWS S3 Bucket
            bucket_name = "sustainability-surveys"
            json_data = retrieve_json_file(
                bucket_name=bucket_name, file_key=survey_name
            )
            if not json_data:
                return make_response(
                    jsonify(
                        {
                            "error": "the provided survey name doesnot exist for this user"
                        }
                    ),
                    HTTPStatus.BAD_REQUEST,
                )

            return jsonify(json_data)
        else:
            return make_response(
                jsonify(
                    {"error": "the provided survey name doesnot exist for this user"}
                ),
                HTTPStatus.BAD_REQUEST,
            )

    def post(self) -> Response:
        return jsonify({"dummy": "This is a successful request"})

class GetAllSurveys(Resource):
    def get(self) -> Response:
        logging.info("Inside get all surveys")
        username = request.headers.get("username")
        password = request.headers.get("password")

        logging.info(username, password)
        if not username or not password:
            return make_response(
                jsonify(
                    "username and password are required",
                ),
                HTTPStatus.BAD_REQUEST,
            )
        
        user_id = User.query.filter_by(username=username).first().id
        logging.info(user_id)
        surveys = Survey.query.filter_by(user_id=user_id).all()
        survey_names = [survey.survey_name for survey in surveys]
        logging.info(surveys)
        logging.info(survey_names)
        return jsonify({'survey_names': survey_names})
        
    def post(self) -> Response:
        return jsonify({"dummy": "This is a successful request"})


class UpdateSurvey(Resource):
    def post(self) -> Response:
        username = request.headers.get("username")
        password = request.headers.get("password")
        logging.info("auth ok")

        if not username or not password:
            return make_response(
                jsonify(
                    "username and password are required",
                ),
                HTTPStatus.BAD_REQUEST,
            )

        survey_object = request.json
        survey_name = survey_object["survey_name"]
        survey_data = survey_object["survey_data"]
        logging.info("survey object read")
        logging.info(survey_object)


        user_id = User.query.filter_by(username=username).first().id
        logging.info(user_id)

        if Survey.query.filter_by(user_id=user_id, survey_name=survey_name).first():
            return make_response(
                jsonify(
                    {
                        "error": "Cannot find survey"
                    }
                ),
                HTTPStatus.BAD_REQUEST,
            )

        # Connecting to AWS S3 Bucket
        bucket_name = "sustainability-surveys"
        logging.info("REACHING BUCKET INIT");
        try:
            update_public_json_file(bucket_name, survey_name, survey_data)
        except Exception as e:
            return make_response(
                jsonify({"error": "something went wrong. please try again later..."}),
                HTTPStatus.BAD_REQUEST,
            )

class DeleteSurvey(Resource):
    def post(self) -> Response:
        username = request.headers.get("username")
        password = request.headers.get("password")
        logging.info("auth ok")
        if not username or not password:
            return make_response(
                jsonify(
                    "username and password are required",
                ),
                HTTPStatus.BAD_REQUEST,
            )
        
        survey_name = request.json["survey_name"]
        user_id = User.query.filter_by(username=username).first().id

        survey = Survey.query.filter_by(user_id=user_id, survey_name=survey_name).first()
        logging.info(survey_name,user_id,survey)
        if not survey:
            return make_response(
                jsonify(
                    {
                        "error": "no survey with the given name exists for this user"
                    }
                ),
                HTTPStatus.BAD_REQUEST,
            )

        logging.info("S3bucket connection")
        # Connecting to AWS S3 Bucket
        bucket_name = "sustainability-surveys"
        try:
            if not db.session.is_active:
                db.session.begin()
            db.session.delete(survey)
            db.session.commit()
            logging.info("Db deletion")
            delete_json_file(bucket_name, survey_name)  
            logging.info("json deletion")
            return make_response(
                jsonify({"message": "survey deleted successfully"}),
                HTTPStatus.OK,
            )
        except Exception as e:
            db.session.rollback()
            return make_response(
                jsonify({"error": "something went wrong. please try again later..."}),
                HTTPStatus.BAD_REQUEST,
            )

def create_public_json_file(bucket_name, file_key, data):
    session = boto3.Session(
        aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
        aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
        region_name=os.getenv("REGION_NAME"),
    )
    s3 = session.client("s3")

    json_data = json.dumps(data)

    s3.put_object(
        Bucket=bucket_name,
        Key=file_key,
        Body=json_data,
        ContentType="application/json",
    )


def retrieve_json_file(bucket_name, file_key):
    session = boto3.Session(
        aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
        aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
        region_name=os.getenv("REGION_NAME"),
    )
    s3 = session.client("s3")

    try:
        response = s3.get_object(Bucket=bucket_name, Key=file_key)
        # Load the JSON data from the response
        json_data = json.loads(response["Body"].read().decode("utf-8"))
        return json_data
    except Exception as e:
        print(f"Error retrieving JSON file: {e}")
        return None

def update_public_json_file(bucket_name, file_key, data):
    session = boto3.Session(
        aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
        aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
        region_name=os.getenv("REGION_NAME"),
    )
    s3 = session.client("s3")

    json_data = json.dumps(data)

    try:
        s3.put_object(
        Bucket=bucket_name,
        Key=file_key,
        Body=json_data,
        ContentType="application/json",
    )
    except Exception as e:
        print(f"Error saving JSON file: {e}")
        return None
    

def delete_json_file(bucket_name, file_key):
    session = boto3.Session(
        aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
        aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
        region_name=os.getenv("REGION_NAME"),
    )
    logging.info(session)
    s3 = session.client("s3")
    logging.info(s3)
    
    try:
        response = s3.delete_object(
            Bucket=bucket_name,
            Key=file_key
        )
        # Load the JSON data from the response
        json_data = json.loads(response["Body"].read().decode("utf-8"))
        return json_data
    except Exception as e:
        print(f"Error retrieving JSON file: {e}")
        return None