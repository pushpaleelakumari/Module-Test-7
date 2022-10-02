import React, { useState, useEffect } from 'react';
import './App.css';
import "@fontsource/montserrat";
import Navigation from './Components/Navigation';
import Banner from './Components/Banner';
import Cards from './Components/Cards';
import Hedding from './Components/Hedding';
import Footer from './Components/Footer';
import FooterContent from './Components/FooterContent';
import MadeBy from './Components/MadeBy';

function App() {
  const [cart, setCart] = useState(0)  //useState to increase the value of cart
  const [data, setData] = useState({}); //useState to store the data of the card images,id,image,old-price,new-price
  let apiData = []  //array to store the fetched data from api

  useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((res) => res.json())
      .then((res) => {
        for (const item in res) {
          apiData.push(res[item])  //pushing the data to the array
        }
        setData(apiData);
      });
  }, [])

  // console.log(data)
  let allCards = "";
  if (data.length > 0) {
    allCards = data.map((item) => (  //mapping the data into all cards
      <Cards
        id={item.id}
        Pname={item.productName}
        img={item.productImage}
        oldPrice={item.oldPrice}
        newPrice={item.newPrice}
        setCart={setCart}   //setCart to increase the cart and we used this in cart button in onclick event
        cart={cart}         //cart using to send to another component and can change the value of the cart
      />
    ))

  }

  return (
    <div >
      <div className="container">
        <div className="navigation" >
          <Navigation
            cart={cart} />  {/* sending the value of the cart int o navigation */}
        </div><br />
        <div className="banner">
          <Banner />
        </div>
        <div className="hedding">
          <Hedding />
        </div>
        <div className="card">
          {allCards}  {/* sending all stored values of the API in to the card component */}
        </div>
      </div>
      <div className="FOOTER">
        <Footer />
      </div>
      <div className="footerCont">
        <FooterContent />
      </div>
      <div className="made">
        <MadeBy />
      </div>
    </div>
  );
}

export default App;
