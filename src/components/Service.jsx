import React from "react";

function Service ()
{
    return (
        <section id="service">
            <div className="serv">
                <div className="false"><p>&emsp;</p></div>
                <div className="serv-heading">
                    <h1>Our <span>Services</span></h1>
                </div>
                <div className="grid-container">
                    <div className="grid-items">
                        <div className="icon"><i class="fa-solid fa-user-check"></i></div>
                        <h4>Profile Verification</h4>
                        <div className="text">Trust matters. Our thorough profile verification process guarantees that you're connecting with genuine individuals who share your intentions.</div>
                    </div>
                    <div className="grid-items">
                        <div className="icon"><i class="fa-solid fa-user-shield"></i></div>
                        <h4>Safety Guaranty</h4>
                        <div className="text">Your safety is paramount. We employ state-of-the-art security measures to keep your personal information secure and provide a safe environment for meaningful interactions.</div>
                    </div>
                    <div className="grid-items">
                        <div className="icon"><i class="fa-solid fa-certificate"></i></div>
                        <h4>Premium Features</h4>
                        <div className="text">Stay connected effortlessly. Our user-friendly messaging tools make it simple to initiate conversations and build connections that truly matter.</div>
                    </div>
                    <div className="grid-items">
                        <div className="icon"><i class="fa-solid fa-message"></i></div>
                        <h4>Communication</h4>
                        <div className="text">Stay connected effortlessly. Our user-friendly messaging tools make it simple to initiate conversations and build connections that truly matter.</div>
                    </div>
                    <div className="grid-items">
                        <div className="icon"><i class="fa-solid fa-user-plus"></i></div>
                        <h4>Connect with People</h4>
                        <div className="text">Expand your horizons and connect with a diverse community of like-minded individuals. Whether you're looking for friendship or romance, you'll find your tribe here.</div>
                    </div>
                    <div className="grid-items">
                        <div className="icon"><i class="fa-solid fa-headset"></i></div>
                        <h4>Customer Support</h4>
                        <div className="text">Need assistance? Our dedicated customer support team is here to help you navigate the platform, answer your questions, and ensure you have a seamless experience.</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Service;