import React from 'react'
import './Cards.css'

function Cards(props) {
    return (
        <div className='cards'>
            <div className="mainCard">
                <img src={props.img} alt="Card_Image" /> {/* here we getting the PRODUCT IMAGE from one component to here with the help of props */}
                <p className='Apple'>{props.Pname}</p>   {/* here we getting the PRODUCT NAME from one component to here with the help of props */}
                <div className="rating">
                    <div className="Ratings">  {/* using this rating div to make the stars and prices in flex */}
                        <div className="star">  {/* using star div to make the stars in single line by using flex */}
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                            </svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                            </svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                            </svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                            </svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                            </svg>
                        </div>
                        <div className="price"> {/* using price div to make the price in single line by using flex */}
                            <div className="old-price">
                                <span className='oldPrice'>{props.oldPrice
                                }</span>/-
                            </div> {/* here we getting the OLD PRICE from one component to here with the help of props */}
                            <div className="new-price">
                                <span className='newPrice'>{props.newPrice}/-</span> {/* here we getting the NEW PRICE from one component to here with the help of props */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-buttons" >
                    <button className='card-button' onClick={() => {
                        props.setCart(props.cart + 1)
                     }}>ADD TO CHART</button>  {/* increasing the value of cart when ever we click on this button */}
                </div>
            </div>
        </div>
    )
}

export default Cards