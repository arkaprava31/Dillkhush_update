import React from "react";
import { Link } from "react-router-dom";

function Priv() {
    return (
        <section id="about">
            <div class="ab">
                <div class="about-body">
                    <h1 style={{ fontSize: '4rem' }} className='h1'>Privacy Policy</h1>
                    <h4 style={{ fontSize: '1.6rem', fontStyle: 'italic' }} className='h4'>Last updated September 06, 2023</h4>
                    <p>This privacy notice for The Bengal Studio ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:</p>
                    <p>
                        - Visit our website at https://dillkhush.com, or any website of ours that links to this privacy notice
                        <br /><br />
                        - Download and use our mobile application (dillkhush), our Facebook application (dillkhush), or any other application of ours that links to this privacy notice
                        <br /><br />
                        - Engage with us in other related ways, including any sales, marketing, or events
                    </p>
                    <p>
                    <span style={{fontStyle:'italic',fontSize:'1.6rem'}}>Questions or concerns? </span>Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at https://thebengalstudio.com/payment-policy.
                    </p>
                    <Link to={"/"}><button class="ab-but">Read More</button></Link>
                </div>
            </div>
        </section>
    )
};

export default Priv;