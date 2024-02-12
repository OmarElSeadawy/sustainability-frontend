from http import HTTPStatus
import secrets
import requests
import urllib
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
from flask_api import status
from flask_restful import Resource
import os, sys


class Register(Resource):
    def get(self) -> Response:
        username = request.headers.get("username")
        password = request.headers.get("password")

        if not username or not password:
            return make_response(
                "Username and password are required",
                HTTPStatus.BAD_REQUEST,
            )

        if User.query.filter_by(username=username).first():
            return make_response(
                "User Already Exists",
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
                    {"message": "User registered successfully", "user_id": new_user.id}
                ),
                HTTPStatus.CREATED,
            )

        except Exception as e:
            db.session.rollback()
            return make_response(
                "Something Went Wrong. Please try again later...",
                HTTPStatus.BAD_REQUEST,
            )

    def post(self) -> Response:
        username = request.headers.get("username")
        password = request.headers.get("password")

        if not username or not password:
            return make_response(
                "Username and password are required",
                HTTPStatus.BAD_REQUEST,
            )

        if User.query.filter_by(username=username).first():
            return make_response(
                "User Already Exists",
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
                    {"message": "User registered successfully", "user_id": new_user.id}
                ),
                HTTPStatus.CREATED,
            )

        except Exception as e:
            db.session.rollback()
            return make_response(
                "Something Went Wrong. Please try again later...",
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
            return make_response(jsonify({"message": "Login successful"}), 200)
        else:
            return make_response(
                jsonify({"error": "Invalid username or password"}), 401
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
            return make_response(jsonify({"message": "Login successful"}), 200)
        else:
            return make_response(
                jsonify({"error": "Invalid username or password"}), 401
            )


class CreateSurvey(Resource):
    def get(self) -> Response:
        return jsonify({"dummy": "This is a successful request"})

    def post(self) -> Response:
        return jsonify({"dummy": "This is a successful request"})
