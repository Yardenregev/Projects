import email
from statistics import quantiles
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Stock(models.Model):
    owner = models.ForeignKey(User,on_delete=models.CASCADE) # if user is deleted, then stock will be aswell
    symbol = models.CharField(max_length=15)
    price_bought = models.DecimalField(max_digits=6, decimal_places=2, default=0.0)
    date_bought = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.symbol