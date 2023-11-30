from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.core.validators import RegexValidator, EmailValidator


class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("The email is not given.")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user
        
class CustomUser(AbstractBaseUser):
    full_name = models.CharField(max_length=255, null=False, blank=False,
                                 help_text='Full name should contain only letters.',
                                 validators=[
                                     RegexValidator(
                                         regex='^[A-Za-z ]+$',
                                         message='Full name should contain only letters.',
                                         code='invalid_full_name'
                                     )
                                 ])

    mobile_number = models.CharField(
        max_length=10,
        unique=False,
        help_text='The mobile number should start with 5 and be 9 digits long.',
        default='',
        blank=True,
        null=True,
        validators=[
            RegexValidator(
                regex='^0\d{10}$',
                message='The mobile number should start with 5 and be 9 digits long.',
            ),
        ],
    )
    email = models.EmailField(
        unique=True,
        help_text='The email address should be unique and valid.',
        default='',
        blank=False,
        null=False,
        validators=[
            EmailValidator
        ],
    )
    password = models.CharField(max_length=128, null=True)

   
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
        'full_name',
        'password']

    objects = UserManager()

    def __str__(self):
        return self.email