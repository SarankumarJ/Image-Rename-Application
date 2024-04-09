from django.db import models

# Create your models here.

class Image(models.Model):
    original_name = models.CharField(max_length=100)
    new_name = models.CharField(max_length=100)
