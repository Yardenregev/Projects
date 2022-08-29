from django.shortcuts import render
from django.http import JsonResponse

import sys
import os
 
# getting the name of the directory
# where the this file is present.
current = os.path.dirname(os.path.realpath(__file__))
 
# Getting the parent directory name
# where the current directory is present.
parent = os.path.dirname(current)
 
# adding the parent directory to
# the sys.path.
sys.path.append(parent)
 
# now we can import the module in the parent
# directory.
from include import responses_api as rs

def StockPageAction(request):
    req_arr = request.path.split('/')
    symbol = req_arr[2]

    return  JsonResponse(rs.StockPageJSON(symbol))

