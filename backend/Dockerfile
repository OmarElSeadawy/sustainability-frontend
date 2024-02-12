FROM python:3.11
LABEL maintainer "Mohamed Ashraf Taha <github.com/mohamedashraftaha>"
RUN apt-get update && apt-get install -y apt-transport-https
RUN apt-get install -y xvfb wget unzip
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN python -m pip install --upgrade pip
RUN pip3 install --upgrade -r requirements.txt
RUN chmod a+x run.sh
CMD ["./run.sh"]