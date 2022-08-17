This is a small and simple node server with one post endpoint
to run make sure that you have both node.js installed and npm on your computer.
after installing the frameworks run the following commands from a terminal

- run "npm install" from terminal while inside of the github project folder
- run "node index.js" to start server

do a post request to http://localhost:5000/test with a string of random words

curl example: "curl -H "Content-type: text/plain" -X "POST" -d "The quick brown fox jumps over the lazy dog, The quick brown fox jumps over the lazy dog, The quick brown fox jumps over the lazy dog" http://localhost:5000/test"