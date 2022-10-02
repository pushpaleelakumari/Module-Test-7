import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='Banner'>
            <div className="banners">
                <h5 className='Summer'>SUMMER 2020</h5>
                <h1 className='new-collection'>NEW COLLECTION</h1>
                <h4 className='banner-cont'>We know how large objects will add, <br />
                    but things on small scale
                </h4>
                <button className='buttons'>Shop Now</button>
            </div>
            <div className="Banner-image">
                <img src={"./Banner.png"} alt="Banner" className='Banners-Img' />
            </div>
        </div>
    )
}

export default Banner