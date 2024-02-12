#!/bin/bash
pip3 install debugpy

export FLASK_APP=run
python -m debugpy --listen 0.0.0.0:5678 --wait-for-client -m flask run -h 0.0.0.0 -p 5000


# gunicorn -w 1 --bind 0.0.0.0:5000 run:app --graceful-timeout 60 --keep-alive 150 --backlog 2048 --timeout 60
