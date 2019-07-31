
import React from "react"

import "./App.css"

// Page Imports

import Home from "./pages/Home"

import Rooms from "./pages/Rooms"

import SingleRoom from "./pages/SingleRoom"

import Error from "./pages/Error"

//Components Import

import Navbar from "./components/Navbar"



import { Route, Switch } from "react-router-dom"



function App() {

  return (

    <>

      <Navbar />

      <Switch>

        <Route exact path="/BeachResort" component={Home} />

        <Route exact path="/rooms/" component={Rooms} />

        <Route exact path="/rooms/:id" component={SingleRoom} />

        <Route component={Error} />

      </Switch>

    </>

  )

}



export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
