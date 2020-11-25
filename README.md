# relay-auto

The project is built using typescript/nodejs and reactjs in order to generate contentjs and popupjs for the [chrome plugin](https://developer.chrome.com/extensions)

## Local Setup
  - Before you start make sure you have nodejs installed locally
  - Switch to corresponding folder
    - Content for content js with nodejs/typescript
    - Popup for pupupjs with reactjs

### Content
 The sub project is used to generate a js file with the code, the codebase is written in typescript and the weback is used to compile the bundle into single file in a needed folder already.
 
Commands to run under the `Content` folder:

    npx webpack // commpiles the project in one file and puts into ./plugin/content/content.js
    gulp watch // Watchs over the files, if any of them changes then `npx webpack` command is triggered


### Popup
 The subproject represents a react instance with slighlty updated build process. On build command react generated all necessary contents and then moves the files into ./plugin/popup folder
 
 Commands to run under the `Popup` folder:
 
    npm run start // Starts the react in development mode
    npm run build // Builds the application and moves into ./plugin/popup folder
    npm run build-w // Intended to perform the build command under windows environment (Might not be needed to run)
    
### Chrome Extension
 To check the application, you will have to install your app as an extension to the chrome extension.
 
 - Open chrome://extensions/
 - Enable the dev mode (Usually on top right corner)
 - Click on `load unpacked extension`
 - On a file browser choose ./plugin/ folder
 - Go to relay amazon -> loadboard
 - On your chrome extensions panel click on icon with squared R "[R]" icon // It may change in future 
 
