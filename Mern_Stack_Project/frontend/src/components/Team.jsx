import React from 'react'
import {data} from '../restApi.json';


function Team() {
  return (
    <section className='team' id='team'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>OUR TEAM</h1>
                <p>
                    At the heart of Yummy is a passionate team of food lovers,
                     tech experts, and customer service champions. From our chefs
                      and delivery partners to our developers and support staff, everyone works 
                      together to ensure a seamless and delicious experience for you. We believe in
                       innovation, quality, and putting our customers first — always. Our team is united
                        by one goal: to bring great food to your doorstep, quickly and with care.
                </p>
            </div>
            <div className="team_container">

               {data[0].team.map((element) =>{
                return(
                    <div className="card" key={element.id}>
                        <img src={element.image} alt={element.name} />
                        <h3>{element.name}</h3>
                        <p>{element.designation}</p>
                    </div>
                )
               })}
            </div>
        </div>
    </section>

  )
}

export default Team
