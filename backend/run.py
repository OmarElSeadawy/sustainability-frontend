#!flask/bin/python
from application import app

import os

port = int(os.environ.get("PORT", 5000))
host = os.environ.get("HOST", "0.0.0.0")

if __name__ == "__main__":
    app.run(host=host, port=port, debug=os.getenv("DEBUG"))
