import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/header";

import "../src/CSS/style.css"
import Footer from "./Layout/footer";
import MainBody from "./MainBody";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header/>
      <div className="px-4">
      <MainBody />
      </div>
      
      <Footer/>
    </div>
  </React.StrictMode>
);
