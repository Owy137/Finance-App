# Finance-App
### Owen Yang
App that can scrape bank statements and suggest an appropriate budget for user
Uses Python to scrape and React-Native for user interface

# Setup
This setup assumes user has python and node package manager(npm) installed

### Installation
Install the source code into local machine
The OCR library requires a pdf coversion which can be installed from https://github.com/oschwartz10612/poppler-windows/releases/
After installing poppler using above link and unzipping, copy the directory path to the bin folder
Create a file called "config.py" under the backend folder from the source code
Enter "path = " and then paste the path to the variable
Ensure that the path is wrapped in quotation marks

### Running Server
Open a terminal in the main project folder
Change directory to backend using "cd backend" command
Create a python virtual environment using the command "python -m venv .venv"
Start the python virtual environment using the command "./.venv/Scripts/activate"
Install all dependencies using "pip install -r requirements.txt"
If activated correctly, the terminal directory should start with a ".venv"
Run the python program with "python main.py"

### Running Webpage
Open a new terminal in main project folder and run "cd frontend"
Run command "npm i" to install all needed dependencies
After installing dependencies, run "npm run dev" to start webpage
Terminal will return a port (typically "localhost:5137") to access webpage
Enter port into a web browser to access webpage
