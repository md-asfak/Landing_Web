import React from 'react'

import img1 from "./Image/lp1.jpg"
import img2 from "./Image/lp2.jpg"
import img3 from "./Image/lp3.png"


export default function Landing() {
    return (
        <>
            <section className="hero_section">

                <div className="text_container">
                    <h2>Hi,<span className='lg_text'> I'm Md Ashfakur</span></h2>
                    <h1>Frontend Developer</h1>
                </div>
            </section>


            <section className="black_t">
                <h2>WORK, I CAN DO FOR <span> <span className='lg_text'> YOU </span></span></h2>
            </section>

            <section className="work">

                <div className="grid_item">
                    <div className="card">
                        <div className="img_section">
                            <img src={img1} alt="#" />
                        </div>
                        <div className="text_section">
                            <h2>Web Development</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui molestias, voluptatem voluptatum beatae saepe iure, facere provident</p>
                        </div>
                    </div>
                </div>

                <div className="grid_item">
                    <div className="card">
                        <div className="img_section">
                            <img src={img2} alt="#" />
                        </div>
                        <div className="text_section">
                            <h2>App Development</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui molestias, voluptatem voluptatum beatae saepe iure, facere provident !</p>
                        </div>
                    </div>
                </div>

                <div className="grid_item">
                    <div className="card">
                        <div className="img_section">
                            <img src={img3} alt="#" />
                        </div>
                        <div className="text_section">
                            <h2>Ui & Ux Desiger</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui molestias, voluptatem voluptatum beatae saepe iure, facere provident !</p>
                        </div>
                    </div>
                </div>


            </section>

            <section className='bottom_section'>

                <div className="contact_section">
                    <h2>Contact Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus animi atque et quod deleniti consequuntur eius veritatis exercitationem quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque, non alias excepturi omnis voluptatibus et eum tempora aspernatur repudiandae?</p>
                </div>

                <div className="about_section">
                    <h2>About Me</h2>
                    <p>itationem quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique accusamus, reiciendis quaerat culpa nulla excepturi dolor alias, vel repellendus blanditiis commodi. Laboriosam voluptate aliquid numquam, facere harum tenetur nisi incidunt!</p>
                </div>


            </section>

            <footer>
                PROJECT BY SK MD ASHFAKUR RAHMAN
            </footer>
        </>
    )
}

