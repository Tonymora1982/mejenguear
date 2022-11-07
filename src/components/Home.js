import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home (){
    const navigate = useNavigate();
    return (
      <div>
        <h1>I am the home</h1>
        <ul>
          <li>
            <h2>Go to product 2</h2>
          </li>
          <li>
          </li>
        </ul>
      </div>
    );
  };