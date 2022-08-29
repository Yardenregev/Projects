from django.urls import path
from . import views

urlpatterns = [
    path("AAPL/",views.StockPageAction)
]