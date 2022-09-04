import React from "react";
import Navbar from "./Navbar";
import "./cus/css/cus.css"

class App extends React.Component {
  render (){
    let styles = {
      bg : {
        backgroundColor: 'red',
        color: 'white',
        padding : 20,
      }
    }
    return (
      <div>
        
        <Navbar>
          Navication
        </Navbar>

        {/* CSS Modules End */}

        <h1 style={styles.bg} >CSS in JS</h1>

        {/* Css inline End */}

        <div className="background" >
          <h1>Logo & GG</h1>
          <p>This is paragraph...</p>
          <button className="btn" >Click</button>
        </div>

      </div>
    )
  }
}


export default App;
        