from django.urls import path

from . import views as detector_views

urlpatterns = [
    path('', detector_views.home, name='detector-home')
]
