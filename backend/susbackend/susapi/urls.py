from django.urls import path, include
from . import views
from knox.views import LogoutView, LogoutAllView


urlpatterns = [
    path('users/', views.UserViewSet.as_view()),

    path('register/', views.CreateUserAPI.as_view()),

    path('login/', views.LoginAPIView.as_view()),
    # path('logout/', LogoutView.as_view()),
    # path('logout-all/', LogoutAllView.as_view()),
]