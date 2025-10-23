from rapidocr import RapidOCR
from pdf2image import convert_from_path
import config
import os
import re

engine = RapidOCR()
subdir = "./statements/"
###img_url = "./assets/statement.webp"
totalBalance = 0.0
curBalance = 0.0
stringCheck = ("newbalance", "closingbalance")
poppler_path_bin = config.path

def read_pdf(filepath):
    images = convert_from_path(filepath, dpi=300, poppler_path=poppler_path_bin)
    for i, img in enumerate(images):
        img.save(f"assets/{file.strip('pdf')}png", "PNG")
    return engine("assets/"+file.replace(".pdf", ".png"))

files = os.listdir(subdir)
for file in files:
    ###convert pdf to image if pdf
    if(".pdf" in file):
        result = read_pdf(subdir+file)
    else:
        result = engine(subdir+file)
    ###Reads text in file
    for i in range(len(result.txts)):
        temp = result.txts[i].replace(" ", "").lower()
        if any(sub in temp for sub in stringCheck):
            ###Balance is in same string
            if any(charac.isdigit() for charac in temp):
                curBalance = float(re.search(r"\d*\.\d*", temp.replace(",", "")).group())
                print(curBalance)
            else:
            ###Balance is on different string
                curBalance = float(re.search(r"\d*\.\d*", result.txts[i+1].replace(",", "")).group())
                print(curBalance)
            totalBalance = totalBalance + curBalance

###result.vis("./assets/result.jpg")    Saves output to given file path
print("Total Balance:", totalBalance)