To Start:
run the following commands in terminal
1)npm install
2)npm start


file structure
  -GapJumpers
    -node_modules
    -src
    --components
    ---dropdown.js
    ---header.js
    ---NamesList
    ---search.js
    --data
    ---data.js
    --index.js
    --App.js
    -style
    --style.css
    -node_modules
    -bundle.js
    -index.html
    -package.json
    -README.md
    -webpack.config.js


  -----INDEX.HTML ------
  -contains links to css and bootstrap
  -along with <div class="app"></div> which will hold the rendered react content
  -<script src="bundle.js"></script> concatenates the .js files


  ---App.js---
  Our main component that is used to pass state and props to children components

  ---Index.js---
  App.js passes its render function to Index.JS which then points the values to index.html to displays

  ---Dropdown.js---
  Contains our dropdown sorting search bar with props passed from App.js

  ---header.js---  
  Contains Applications Header text

  ---NamesList.js---
  This is where the json data is parsed and formatted to fit the demo specs formatting.
  filtering for the search bar is stored here.

  ---Search.js---
  The value of the search bar input is determined in this file
