FROM python

RUN apt-get update

COPY . /circle_detector
WORKDIR /circle_detector

RUN pip install -r requirements.txt

CMD python manage.py runserver 0.0.0.0:8000
