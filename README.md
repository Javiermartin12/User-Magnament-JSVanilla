# User-Magnament-JSVanilla

## Description

This web application allows you to manage users, training and calls for training.
The interface is divided into several sections, each with its own functionality:

User Page: To manage users.

<img src="./assets/readme/User page.png" width=900rem height=600rem alt="User manage" />

Training Page: To manage training technical sheets.

<img src="./assets/readme/Training page.png" width=900rem height=600rem alt="User manage" />

Course Page: To manage course calls.

<img src="./assets/readme/Course page.png" width=900rem height=600rem alt="User manage" />

A brief description of the project's purpose and functionality.

## Project Structure

-Main Files-

index.html: Main HTML file that contains the structure and content of the application.
main.css: Style sheet file for the application design.
app.js: JavaScript file that contains the logic to handle interactions and data.
db.json: file that save all data from this app.

## Installation

Instructions for installing the project:

This project uses JSON Server to simulate a RESTful API and Live Server to serve static files in a development environment.

-Clone the Repository-
You can clone the repo or upload the file.
-Install Dependencies-
Make sure you have Node.js installed. Then install JSON Server and Live Server globally using npm.

In order to use json-server you must have this code in your script:
 'json-server --watch db.json'
The code to turn on json-server will be: 'npm run json-server'
The code to turn on liver-server will be: 'npx liver-server --port=9000'
You can really start at any door you want, it doesn't have to be 9000.

## Contributions
Contributions are welcome. If you have suggestions, fixes or improvements, please fork the project and submit a pull request.

## License
This project is not licensed.