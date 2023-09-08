import React from "react";

function Contact ()
{
    return (
        <section id="contact">
            <div className="cont">
                <div className="left">
                    <div className="cont-logo"><img src="images/dillkhush.png" alt="Logo" /></div>
                    <div className="cont-txt">Curious to learn more? Explore our resources section to gain insights into dating tips, success stories, and advice from experts in the field.</div>
                    <button class="ab-but">Know More</button>
                </div>
                <div className="right">
                    <div className="cols">
                        <h3>Other Pages</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="cols">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/tnc">Terms & Conditions</a></li>
                            <li><a href="/disclaimer">Disclaimer</a></li>
                            <li><a href="/policy">Use Policy</a></li>
                        </ul>
                    </div>
                    <div className="cols">
                        <h3>Social Media</h3>
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                        {/* <a href=""><i class="fa-brands fa-twitter"></i></a> */ }
                        <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://instagram.com/dillkhush_app?igshid=MmU2YjMzNjRlOQ=="><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;