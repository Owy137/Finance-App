import sys
import subprocess
import os
from rapidocr import RapidOCR

"""subdir = "./assets"
float = 12314.32
print(float)"""

engine = RapidOCR()
result = engine("./assets/manga/4.png")

"""for name in os.listdir(subdir):
    print(name)"""

"""
results = subprocess.run(["dir"], capture_output=True, shell=True, text=True, cwd=subdir)
print(results.stdout)
"""
result.vis("./assets/resultManga.jpg")
###print(sys.executable)