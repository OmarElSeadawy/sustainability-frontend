from django.contrib import admin
from .models import CustomUser

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'is_superuser']  # adjust this to your needs

admin.site.register(CustomUser, CustomUserAdmin)