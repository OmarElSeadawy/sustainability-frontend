from flask import Flask, request, jsonify, session, Blueprint
from flask_babel import Babel
from flask_bcrypt import Bcrypt
from flask_restful import Api
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import os

load_dotenv(".envs/dev.env")

app = Flask(__name__)
app.secret_key = "9c1690c9-d42f-42f3-b270-6a14c72a10df"


user = os.getenv("POSTGRES_USER")
password = os.getenv("POSTGRES_PASSWORD")
database = os.getenv("POSTGRES_DB")
host = os.getenv("POSTGRES_HOST")


app.config[
    "SQLALCHEMY_DATABASE_URI"
] = f"postgresql://{user}:{password}@{host}:5432/{database}"
app.config["DEBUG"] = False
app.config["TESTING"] = False
app.config["CSRF_ENABLED"] = True
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["CORS_FOLLOW_REDIRECTS"] = True

db = SQLAlchemy(
    app,
    engine_options={"pool_size": 30, "max_overflow": 10, "pool_timeout": 100},
    session_options={"autoflush": False, "expire_on_commit": True},
)
migrate = Migrate(app, db, compare_type=True)


from apis import (
    Login,
    Register,
    CreateSurvey,
    GetSurvey,
    GetAllSurveys,
    DeleteSurvey,
    UpdateSurvey,
)

bcrypt = Bcrypt(app)
babel = Babel(app)
bp_api = Blueprint("api", __name__)
api = Api(bp_api)
CORS(
    app,
    resources={
        r"/api/*": {
            "origins": "http://3.68.224.176:3000",
            "supports_credentials": True,
            "headers": "Content-Type, X-Auth-Token, Username, Password",
        }
    },
)
# CORS(bp_api)

# CORS(app, resources={r"/api/*": {"origins": "*", "supports_credentials": True, "allow_headers": ["Content-Type", "X-Auth-Token", "Username", "Password"]}})
# CORS(app, resources={r"/api/*": {"origins": "http://3.126.123.215:3000", "supports_credentials": True}})
api.add_resource(Login, "/login")
api.add_resource(Register, "/register")
api.add_resource(CreateSurvey, "/create_survey")
api.add_resource(GetSurvey, "/get_survey")
api.add_resource(GetAllSurveys, "/get_all_surveys")
api.add_resource(DeleteSurvey, "/delete_survey")
api.add_resource(UpdateSurvey, "/update_survey")

app.register_blueprint(bp_api, url_prefix="/api")


@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add(
        "Access-Control-Allow-Headers", "Content-Type, X-Auth-Token, Username, Password"
    )
    response.headers.add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    return response
