import { useState } from "react";
import "./App.css";
import { generate } from "./utils/text_generator";
import avatar from './assets/avatar.jpg'


function App() {
  return (
    <main>
      {/* <div className="sm:bg-amber-500 md:bg-purple-500 lg:bg-indigo-500 xl:bg-green-500 2xl:bg-blue-500 h-10 w-full"></div> */}
      <header className="header relative w-full primary">
        <nav className="w-full absolute h-14 flex flex-row mx-auto max-w-screen-lg items-center justify-between top-0 left-0 right-0">
          <p className="text-3xl font-bold text-gray-900">.Portfolio</p>
          <div>
            <a href="#" className="text-button">
              About Me
            </a>
            <a href="#" className="text-button">
              Skill
            </a>
            <a href="#" className="text-button">
              Contact
            </a>
            <a href="#" className="elevated-button">
              My Work!
            </a>
          </div>
        </nav>
        <div className="flex flex-row justify-start  w-full h-72 max-w-screen-lg mx-auto flex-wrap">
          <div className="w-72 h-72 bg-black">
            {/* <img src={avatar} alt="avatar"/> */}
          </div>
          <div className="flex-1 pl-14 flex flex-col justify-center">
            <p className="text-xl text-gray-500">
              Hi 🤓 i'm Tokiniaina Toavina
            </p>
            <p className="text-3xl text-gray-800 font-medium max-w-sm">
              Machine learning and Mobile developer
            </p>
            <p className="text-base text-gray-600 pt-3 max-w-md">
              I'm a machine learning intern with a deep passion for the field
              of AI. My research focuses on designing and building novel
              algorithms that can be applied to diverse domains.
            </p>
          </div>
        </div>
      </header>
    </main>
  );
}

export default App;
