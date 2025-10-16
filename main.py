from rapidocr import RapidOCR
from pdf2image import convert_from_path
import os

engine = RapidOCR()
subdir = "./assets/"
###img_url = "./assets/statement.webp"
totalBalance = 0.0
poppler_path_bin = r"C:/Users/owyya/OneDrive/Documents/poppler-25.07.0/Library/bin"

files = os.listdir(subdir)
for file in files:
    ###convert pdf to image if pdf
    if(".pdf" in file):
        images = convert_from_path(subdir+file, dpi=300, poppler_path=poppler_path_bin)
        for i, img in enumerate(images):
            img.save(f"assets/test{i+1}.png", "PNG")
        result = engine(subdir+file.replace(".pdf", ".png"))
    else:
        result = engine(subdir+file)
    for i in range(len(result.txts)):
        if(result.txts[i].lower().strip(":") in ["newbalance", "closingbalance"]):
            print(result.txts[i], result.txts[i+1], "from:", subdir+file)
            totalBalance = totalBalance + float(result.txts[i+1].replace(",", "").replace("$", ""))


###result.vis("./assets/result.jpg")    Saves output to given file path
print("Total Balance:", totalBalance)