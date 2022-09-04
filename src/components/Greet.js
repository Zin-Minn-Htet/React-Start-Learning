import React from "react";

// function Greet(){
//     return <h1>Hello Zin Min</h1>
// }
// const Greet = ()=> <h1>ES6 function</h1>

// export default Greet

class Nav extends React.Component {
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
class Second extends React.Component {
    render(){
        return (
            <div>
                {this.props.children }
            </div>
        )
    }
}
class Final extends React.Component {
    render(){
        return (
            <div>
                <Nav>
                    <h1 style={{background : "black",color : "white", padding : 20 }} >Navication</h1>
                </Nav>
                <Second>
                    <h1>Hello Testing</h1>
                    <p>Component Composition</p>
                </Second>
            </div>
        )
    }
}
export default Final