from django.urls import path
from . import views

urlpatterns = [
    path("<str:stockname>/",views.StockPageAction)
]