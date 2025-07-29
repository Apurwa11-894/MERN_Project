import React from 'react'
import { Link } from 'react-scroll'
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className='heading'> ABOUT US </h1>
                        <p> The only thing we're  serious about is food.</p>
                    </div>
                    <p className='mid'>
                        Welcome to Yummy, your one-stop solution for delicious
                        food delivered straight to your door! Whether you're craving street-style
                        snacks, gourmet meals, or healthy bites, we bring your favorite restaurants and cloud kitchens
                        right to your fingertips.With an easy-to-use interface, real-time order tracking,
                        secure payment options, and fast delivery, we’re here to make every meal special. From breakfast to
                        late-night cravings, we've got you covered.
                    </p>
                    <Link to={"/"}>Explore Menu <span>
                        <HiOutlineArrowCircleRight />
                    </span></Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>

    )
}

export default About
