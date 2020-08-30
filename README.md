# Circle Detection using opencv.js

> Upload an image and detect all the circles in it using opencv.js.

**Screenshot**

<img src="https://raw.githubusercontent.com/AbhayVAshokan/Circle-Detector/master/.github/circle_detection.png" width=75%>

The circles are detected in yellow.

### Setup
**Normal Installation**
1. Install the required dependencies
```
pip install -r requirements.txt
```

2. Run the Django server using the command 
```
python manage.py runserver 0.0.0.0:8000
```

The website is available at `localhost:8000`.
<br><br>

**Docker**

Build the circle_detector image and run the container by exposing port 8000.
```
docker build --tag circle_detector circle_detector
docker run --name circle_detector -p 8000:8000 -it circle_detector
```
The website is available at `localhost:8000`.
<br>
