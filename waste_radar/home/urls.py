from django.contrib import admin
from django.urls import path,include
from home import views
urlpatterns = [
      path('boy', views.home, name='home'),
      path('homepage', views.homepage, name='homepage'), 
      path('homepage/info', views.info, name='info'),
      path('homepage/maps', views.maps, name='fmaps'),
      
      path('homepage/showform', views.showform,name='showform'),
      path('homepage/news', views.news),
         
]