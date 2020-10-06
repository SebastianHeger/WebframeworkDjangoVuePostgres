FROM python:3.8.1-slim-buster

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY backend/ .

RUN pip install --no-cache-dir -r requirements.txt
