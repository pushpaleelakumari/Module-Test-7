import React from 'react'
import './FooterContent.css'


// FOOTER COMPONENT TO MAKE THE LIST OF DATA SIDE BY SIDE USING FLEX ABOUT CONTACT...

function FooterContent() {

    const [userName, setUserName] = React.useState('');

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault(); //preventing the default nature of form

        // Creating the data using CURD which is about data bases
        

         {/* validation for the e-mail when ever we give valid e-mail then itself it will go further process */}

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userName)) 
        {
            fetch("https://module-7-test-2b180-default-rtdb.asia-southeast1.firebasedatabase.app/message.json",
                {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userName: userName
                    })
                }
            ).then(res => {
                console.log(res.ok)
            })
            setUserName('');
            alert("*Thank you for filling the form we'll get in touch with you soon*")
        }
        else {
            alert("Please Enter A Valid E-Mail ID");
        }
    }

    return (
        <div className='Footer-Headings-And-Names'>
            <div className="footer-content">        {/* Footer's list of data by side by side */}
                <ul>
                    <li className='first-heading'>Company Info</li>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li className='first-heading'>Legal</li>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li className='first-heading'>Features</li>
                    <li>Business Marketing</li>
                    <li>User Analytic</li>
                    <li>Live Chat</li>
                    <li>Unlimited Support</li>
                </ul>
                <ul>
                    <li className='first-heading'>Resources</li>
                    <li>IOS & Android</li>
                    <li>Watch a Demo</li>
                    <li>Customers</li>
                    <li>API</li>
                </ul>
                <ul className='last-footer'>
                    <li ><li className='first-heading'>Get In Touch</li>
                        <li className='last-footers'>
                            <form action="" onSubmit={handleSubmit}>
                                <input type="text" className='inputs'
                                    placeholder='Your Email'
                                    value={userName}
                                    onChange={handleUserNameChange} />
                                <span class="input-group-text">
                                    <button type='submit' className='footer-button' >Subscribe</button>
                                </span>
                            </form>
                        </li>
                    </li>
                    <br />
                    <li>Lorem impsum dolor amit</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterContent