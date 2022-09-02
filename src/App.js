import React from "react";


// class Item extends React.Component {
//   render(){
//     return <li>Zin</li>
//   }
// }

// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>Hello React</h1>
//         <ul>
//             <Item />
//         </ul>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>Hello React</h1>
//         <ul>
//           <Item name="apple" price="500 ks"/>
//           <Item name="orange" price="600 ks"/>
//         </ul>
//       </div>
//     )
//   }
// }

class Item extends React.Component {
  render(){
    return (
      <div>
        <li>
        {this.props.id}, {this.props.name}, {this.props.price},
        </li>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    items : [
      {id:1,name:'apple',price:1050},
      {id:2,name:'orange',price:20},
    ]
  }
  nameRef = React.createRef();
  priceRef = React.createRef();
  
  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.setState({
      items : [
        ...this.state.items,
        {id, name, price}
      ]
    })
  }
  render(){
    return(
      <div>
        <h1>Hello React</h1>
        <input type="text" ref={this.nameRef} /><br/>
        <input type="text" ref={this.priceRef} />
        <button onClick={this.add}>Add</button>
        <ul>
          {this.state.items.map(i => {
            return (
              <Item 
              key={i.id}
              id={i.id}
              name={i.name} 
              price={i.price}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App;
    