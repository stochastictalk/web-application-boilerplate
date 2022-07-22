FROM python:3.10

WORKDIR /api

COPY requirements.txt ./requirements.txt
RUN pip3 install -r requirements.txt

# API endpoint.
EXPOSE 3000
# API documentation.
EXPOSE 2748
