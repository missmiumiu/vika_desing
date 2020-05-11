import React from 'react';
import logo from './logo.svg';
import './App.css';

const colors = ["красный","зеленый","синий"]
const shoes = [
  {
    name: "Вансы",
color: colors[1],
price: 100
},
{
  name: "Адики",
color: colors[0],
price: 200
},
{
  name: "Найки",
color: colors[2],
price: 300
},
]




function App() {
  return (
    <div className="App">
    <main role="main">
      <div class="jumbotron">
        <input class="form-control search-input" placeholder="Input search" myClass></input>
        <h1 class="card-title" >miu miu</h1>
        <div class="row">
          <div id="testStr"></div>
          <div class="col-md-3 btn-light">Shop</div>
          <div class="col-md-3 btn-light">Contacts</div>
          <div class="col-md-3 btn-light">About</div>
        </div>
      </div>
      <div class="container">
        <div class="row">
        {
          shoes.map( (item) => {
            return( 
            <div class="col-md-4">
            <h2 class="shue-title">{item.name}</h2>
            <img
              class="img-thumbnail"
              src="https://www.thespot.me/image.aspx?imageId=154838"
            />
            <p>{item.color}</p>
            <p>{item.price}</p>
          </div>)
          })
        }
        </div>
      </div>
    </main>
    <footer class="container">Copyright ©2020 Cool Developer</footer>
    </div>
  );
}

export default App;
