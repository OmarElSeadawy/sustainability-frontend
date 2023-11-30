from django.shortcuts import render
from rest_framework.generics import CreateAPIView, UpdateAPIView, ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser
from .serializers import CreateUserSerializer, UserSerializer, LoginSerializer
from knox import views as knox_views
from django.contrib.auth import login


class CreateUserAPI(CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = (AllowAny,)

class UserViewSet(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

    def get_all_users(self, request):
        users = self.queryset.all()
        serializer = self.serializer_class(users, many=True)
        return Response(serializer.data)

class LoginAPIView(knox_views.LoginView):
    permission_classes = (AllowAny, )
    serializer_class = LoginSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.validated_data['user']
            login(request, user)
            response = super().post(request, format=None)
        else:
            return Response({'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        return Response(response.data, status=status.HTTP_200_OK)