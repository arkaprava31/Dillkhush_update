import React from 'react';
import { Link } from 'react-router-dom';

const Pol = () => {
    return (
        <section className="policy">
            <div className="policy-container">
                <h1 style={{ fontSize: '4rem' }} className='h1'>Acceptable Use Policy</h1>
                <h4 style={{ fontSize: '1.6rem', fontStyle: 'italic' }} className='h4'>Last updated September 06, 2023</h4>
                <p>
                    This Acceptable Use Policy ( <b>"Policy"</b> ) is part of our Terms and Conditions ( <b>"Legal Terms"</b> ) and should therefore be read alongside our main Legal Terms: https://dillkhush.com/terms. If you do not agree with these Legal Terms, please refrain from using our Services. Your continued use of our Services implies acceptance of these Legal Terms.
                    <br /><br />
                    Please carefully review this Policy which applies to any and all:
                    <br /><br />
                    (a) uses of our Services (as defined in <b>"Legal Terms"</b>)
                    <br />
                    (b) forms, materials, consent tools, comments, post, and all other content available on the Services ( <b>"Content"</b> ) and
                    <br />
                    (c) material which you contribute to the Services including any upload, post, review, disclosure, ratings, comments, chat etc. in any forum, chatrooms, reviews, and to any interactive services associated with it ( <b>"Contribution"</b> ).
                </p>
                <h2 style={{ fontSize: '2.5rem' }} className='h2'>Who We Are</h2>
                <p>
                    We are The Bengal Studio ("Company," "we," "us," or "our") a company registered in India at Kolkata, West Bengal, India, 700002. We operate the website https://dillkhush.com (the "Site"), the mobile application dillkhush (the "App"), as well as any other related products and services that refer or link to this Policy (collectively, the "Services").
                </p>
                <Link to={"/"}><button class="ab-but">Read More</button></Link>
            </div>
        </section>
    );
};

export default Pol;
