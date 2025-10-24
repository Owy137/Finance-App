from rapidocr import RapidOCR
from pdf2image import convert_from_path
from flask import Flask, request, jsonify
from flask_cors import CORS
import config
import os
import re

app = Flask(__name__)
CORS(app, resources={r"/process": {"origins": ["http://localhost:5173"]}})


@app.after_request
def add_cors_headers(response):
    """Ensure CORS headers are present for browsers (helps with preflight/edge cases).

    We explicitly allow the frontend dev origin used by Vite. Adjust or restrict in
    production as needed.
    """
    response.headers.setdefault("Access-Control-Allow-Origin", "http://localhost:5173")
    response.headers.setdefault("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
    response.headers.setdefault("Access-Control-Allow-Headers", "Content-Type,Authorization")
    return response

@app.route("/process", methods=["POST"])
def process_file(): 

    engine = RapidOCR()
    subdir = "./statements/"
    stringCheck = ("newbalance", "closingbalance")
    poppler_path_bin = config.path

    #converts a pdf into a jpg and reads
    def read_pdf(filepath):
        images = convert_from_path(filepath, dpi=300, poppler_path=poppler_path_bin)
        img = images[0]
        img.save(f"{filepath.strip('pdf')}png", "PNG")
        return engine(filepath.replace(".pdf", ".png"))
    
    #Reads all file
    def read_balance(filepath):
        #convert pdf to image if pdf and reads
        if(".pdf" in filepath):
             result = read_pdf(filepath)
             print("Succesful conversion")
        #if already readable format
        elif(".png" in filepath or ".jpg" in filepath):
            result = engine(filepath)
        #unsupported formart
        else:
            return {"filename":filepath, "balance":-1}
        #Reads text in file
        for i in range(len(result.txts)):
            temp = result.txts[i].replace(" ", "").lower()
            if any(sub in temp for sub in stringCheck):
                #Balance is in same string
                if any(charac.isdigit() for charac in temp):
                    balance = float(re.search(r"\d*\.\d*", temp.replace(",", "")).group())
                    print(balance)
                    return {"filename":filepath, "balance":balance}
                #Balance is on different string
                else:
                    balance = float(re.search(r"\d*\.\d*", result.txts[i+1].replace(",", "")).group())
                    print(balance)
                    return {"filename":filepath, "balance":balance}

    balances = []

    #Gets uploaded file and saves them into statements
    #Files are sent individually due to mapping in Button.jsx
    #STRING MUST MATCH APPENED STRING FOR FORMDATA IN BUTTONS.JSX

    files = request.files.getlist("files")
    for file in files:
        print("Received",file.filename)
        filepath = f"./statements/{file.filename}"
        file.save(filepath)
        #reads balance from each file and adds a dictionary to balances
        balances.append(read_balance(filepath))

    #upload back to frontend
    print("File successfully returned")
    return jsonify({"balances": balances})


if __name__ == "__main__":
    app.run(debug=True)
