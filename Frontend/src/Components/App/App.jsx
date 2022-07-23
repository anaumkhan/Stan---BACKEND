import "./App.css";
import Home from "../Home/Home.jsx";
import React, { useState, useEffect } from "react";

function App() {
  /*
  <button
        className="twitter-button"
        onClick={() => {
          const twitterLoginURL = `https://www.facebook.com/v14.0/dialog/oauth?client_id=1080859592543020&redirect_uri=http://localhost:3001/facebook_auth/auth/facebook/callback`;
          window.location = twitterLoginURL;
        }}
      >
        Twitter
      </button>
  */
  return (
    <div className="App">
      <button
        className="facebook-button"
        onClick={() => {
          const facebookLoginURL = `https://www.facebook.com/v14.0/dialog/oauth?client_id=1080859592543020&redirect_uri=http://localhost:3001/facebook_auth/auth/facebook/callback`;
          window.location = facebookLoginURL;
        }}
      >
        Facebook
      </button>
      <button
        className="instagram-button"
        onClick={() => {
          const instagramLoginURL = `http://localhost:3001/instagram_auth/auth/instagram`;
          window.location = instagramLoginURL;
        }}
      >
        Instagram
      </button>
      <button
        className="twitter-button"
        onClick={() => {
          const twitterLoginURL = `http://localhost:3001/twitter_auth/auth/twitter`;
          window.location = twitterLoginURL;
        }}
      >
        Twitter
      </button>
      <button
        className="twitch-button"
        onClick={() => {
          const twitchLoginURL = `http://localhost:3001/twitch_auth/auth/twitch`;
          window.location = twitchLoginURL;
        }}
      >
        Twitch
      </button>
    </div>
  );
}

export default App;
