import "./App.css";
import Home from "../Home/Home.jsx";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <button
        className="sign-up-button"
        onClick={() => {
          const facebookLoginURL = `https://www.facebook.com/v14.0/dialog/oauth?client_id=1080859592543020&redirect_uri=http://localhost:3001/facebook_auth/auth/facebook/callback`;
          window.location = facebookLoginURL;
        }}
      >
        Start Stanning!
      </button>
    </div>
  );
}

export default App;
