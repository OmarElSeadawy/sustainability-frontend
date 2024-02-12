#!/bin/bash
gunicorn -w 1 --bind 0.0.0.0:5000 run:app --graceful-timeout 60 --keep-alive 150 --backlog 2048 --timeout 60
