import React from 'react'
import {data} from '../restApi.json';

function Menu() {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className='heading_section'>
                <h1 className='heading'> POPULAR DISHES</h1>
                <p>From spicy street-style pani puri to creamy and comforting butter chicken, 
                    our most-loved dishes are a hit with foodies everywhere! Craving something 
                    cheesy? Try our loaded paneer tikka pizza or the classic cheese burst burger.
                     For those with a sweet tooth, don’t miss our rich gulab jamun and chilled chocolate 
                     brownie with ice cream. These crowd favorites are always trending — one bite and you’ll know why!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => {
                        return(
                            <div className='card' key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                    <button>{element.category}</button>
                                </div>
                        )

                        
                    })
                }
            </div>
        </div>
      
    </section>
  )
}

export default Menu
