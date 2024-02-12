from flask import Flask, request, jsonify, session, Blueprint
from flask_babel import Babel
from flask_bcrypt import Bcrypt
from flask_restful import Api
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
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

db = SQLAlchemy(
    app,
    engine_options={"pool_size": 30, "max_overflow": 10, "pool_timeout": 100},
    session_options={"autoflush": False, "expire_on_commit": True},
)
migrate = Migrate(app, db, compare_type=True)


from apis import Login, Register, CreateSurvey

bcrypt = Bcrypt(app)
babel = Babel(app)
bp_api = Blueprint("api", __name__)
api = Api(bp_api)


api.add_resource(Login, "/login/")
api.add_resource(Register, "/register/")
api.add_resource(CreateSurvey, "/create_survey/")

app.register_blueprint(bp_api, url_prefix="/api")
