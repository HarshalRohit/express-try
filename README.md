# express-try

A node-js app using Express and Multer to upload .wav files


## Description

This project is part of my attempt to learn Nodejs.
<br />
The app accepts a file and stores it locally.


## Features

Receive a file. <br />
Save the file with original name (name on the machine from where file was uploaded). <br />
Send error if upload file's size exceed the limit


## Usage

In the project directory, you can run:
 `PORT=3020 DEBUG=express-try:* npm start`

Runs the app in the development mode. <br />
Open [http://localhost:3020](http://localhost:3020) to view it in the browser. <br />
Change the `PORT` accordingly or remove if not required.


### Upload URL

Endpoint: '/upload'. <br />
Make sure to upload file as form data.


## Next Steps/ ISSUES

Remove unwanted files/code. <br />
Use filter to accept only certain types of files.


## Suggestions

Please raise an issue if you find any errors or have any suggestions.


## License
[MIT](LICENSE)
