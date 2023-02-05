# API_pais_estado_ciudad
A small API that allows you to consult all the countries, states and cities of the world. Both in English and Spanish. Perfect for incorporating into projects, this api is supported by a public and free database... dependencies of the proyect 
* express
* ejs
* mysql2
* knex
* nodemon <- oops, this must have been a development dependency XD

# Get Started
Once the repository has been cloned, you must do an 
`npm install`
Now you must download the database. from the following link. as the sql file is a bit heavy. I hosted it in google driver
<a href="https://drive.google.com/file/d/1m4TIBFPlIZPmynR9JjDTtHootvQwVGH6/view?usp=share_link"> the magic File sql xD </a>

before of start the application. Import in your client mysql a new databases called "world". or 
if you are using Lampp or Xampp Go to <a>/opt/lampp/bin/mariadb</a> this for linux. on windows  you executed xampp and in the CLI type this...

`source > world.sql`
note: you must specify the path of the sql file.
await. this sql insert all tables and data nesesary...

to download the project dependencies, then execute the 
`npm run dev` command. 
This will start the server and you will be able to make requests to the following routes...

....

# help

For more information about <b>use, and more</b> see you http://localhost:6969/
<b> Note:If you do not provide a custom host in the .env file, the api will run at http://localhost:8000/ by default</b>
