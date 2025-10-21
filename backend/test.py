import sys
import subprocess
import os
from rapidocr import RapidOCR

stringCheck = ("newbalance", "closingbalance")

if("never" in stringCheck):
    print("matches string check")