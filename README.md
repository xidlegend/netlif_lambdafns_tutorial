WHAT IS HAPPENING?
    Static sites, don't return html, css, etc from databases on servers on requests from user.
    They simply return a static HTML, CSS, JS site.
    The site's JS may have functions that sends a request to netlify server
LAMBDA FUNCTIONS:
    These Functions are not deployed with your site as HTML CSS and JS, 
    These remain on the Netlify server, and handle incoming requests, by performing
    the desired operation, and returning a response, which is handled by the
    existing Javasscript in the website deployed
    functions vs lambda folder

netlify.toml
    Tells netlify, where should it build the functions.

localhost...
    Is the local server, and the netlify-serve runs on port 9000
axios..
    Is a package that makes http requests, and recieves em.
netlify-lambda, lamda-serve, lambda-build scripts
    These are scripts that are useful in dev-testing, and building the fns for netlify
    using the JS functions we write
    
To Make this Run on Local Host: 
    Run on the lambda-serve script 'npm run netlify-serve'

To Deploy:
    GET API_URL, API_CLIENT_ID, API_CLIENT_SECRET from process.env
     - const { API_URL, API_CLIENT_ID, API_CLIENT_SECRET} = process.env;
    Define these in Netlify Environmental Variables.
    Set the URL to /.netlify/functions/name_of_functions -> await (await fetch('/.netlify/functions/getusers')).json();
    ADD node_modules & functions folder to a .gitignore file in root


