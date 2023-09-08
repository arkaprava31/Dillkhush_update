import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <section className='terms'>
            <div className="terms-container">
                <h1 style={{ fontSize: '4rem' }} className='h1'>Terms & Conditions</h1>
                <h4 style={{ fontSize: '1.6rem', fontStyle: 'italic' }} className='h4'>Last updated September 06, 2023</h4>
                <h2 style={{ fontSize: '2.5rem' }} className='h2'>Agreement to our legal terms</h2>
                <p>We are The Bengal Studio <b>("Company," "we," "us," "our")</b>, a company registered in India at Kolkata, West Bengal, India, Kolkata, West Bengal 700002. Our VAT number is 000000000000000000000.
                    <br /><br />
                    We operate the website https://dillkhush.com (the <b>"Site"</b>), the mobile application dillkhush (the <b>"App"</b>), as well as any other related products and services that refer or link to these legal terms (the <b>"Legal Terms"</b>) (collectively, the <b>"Services"</b>).
                </p>
                <span style={{ fontStyle: 'italic', fontSize: '1.6rem' }}>Simple Way To Find Your Love</span>
                <p>
                    You can contact us by phone at (+91)8597406694, email at dillkhush.com@gmail.com, or by mail to Kolkata, West Bengal, India, Kolkata, West Bengal 700002, India.
                    <br /><br />
                    These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and The Bengal Studio, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    <br /><br />
                    We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by update@dillkhush.com, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
                    <br /><br />
                    The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                    <br /><br />
                    We recommend that you print a copy of these Legal Terms for your records.
                </p>
                <Link to={"/"}><button class="ab-but">Read More</button></Link>
            </div>
        </section>
    );
};

export default Terms;
