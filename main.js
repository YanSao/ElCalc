'use strict'

const { app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


app.on('ready', () => {
  // Create the browser window.
  const appWindow = new BrowserWindow({
      width: 300,
      height: 440,
      maxWidth: 300,
      maxHeight: 440,
      minWidth: 300,
      minHeight: 440,
      resizable: false,
      icon: __dirname + "/img/icon.png"
    })
    
  // and load the index.html of the app.
  appWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  )
})
app.on('window-all-closed', function() {
    app.quit();
 });
