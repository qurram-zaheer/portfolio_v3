import React from "react";
import Home from "./pages/home";

const App = () => {
  return (
    <div id="app" className="flex h-screen md:w-screen">
      <Home />
      {/* <Home path="/" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" /> */}
    </div>
  );
};

export default App;
