from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.core.validators import RegexValidator, EmailValidator
from django.db.models import JSONField


class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("The email is not given.")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user
        
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        
        extra_fields.setdefault('is_staff', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')

        return self.create_user(email, password, **extra_fields)
    
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

    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

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
    
    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser
    
class Survey(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    survey_name = models.CharField(max_length=255)
    is_editable = models.BooleanField(default=True)
    survey_output = JSONField()

    class Meta:
        db_table = 'survey'