//test
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <html>
          <head>
/*
          ...
          <style type="text/css">
          #login {
            display: none;
          }

          #loggedin {
            display: none;
          }
          ...
        </style>
        */
        <body>
         <div>
            <div id="login">
             <h1>First, log in to spotify</h1>
             <a href="/login">Log in</a>
            </div>
            <div id="loggedin">
            </div>
         </div>

         <script id="loggedin-template" type="text/x-handlebars-template">
            <h1>Logged in as </h1>
            <img id="avatar" width="200" src="" />
            <dl>
             <dt>Display name</dt><dd></dd>
             <dt>Username</dt><dd></dd>
             <dt>Email</dt><dd></dd>
             <dt>Spotify URI</dt><dd><a href=""></a></dd>
             <dt>Link</dt><dd><a href=""></a></dd>
             <dt>Profile Image</dt><dd></dd>
            </dl>
            <p><a href="/">Log in again</a></p>
         </script>
        </body>
        </html>
      </div>
    );
  }
}

export default App;
