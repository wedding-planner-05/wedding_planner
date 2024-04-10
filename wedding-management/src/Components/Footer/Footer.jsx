import React from 'react';
import Navbar from '../Navbar/Navbar';

function Footer() {

    const images = "././public/images/wedding-planner-high-resolution-logo-white-transparent.png";
    const footerData = [
        { label: "Search By Vendor", lable2: "Wedding Blog", label3: "About us", labelHeading: "Start Planning" },
        { label: "Search by City", lable2: "Wedding Gallery", label3: "Carrer", labelHeading: "Wedding Idea" },
        { label: " Download Our App", lable2: "Real Wedding", label3: "Contact Us", labelHeading: "Home" },
        { label: "Top Rated Vendors", lable2: "submit edding", label3: "Terms & condition", labelHeading: "Services" },
        { label: "Destination", label3: "Cancellation Policy", labelHeading: "A" }
    ];

    // make a api and store this data is in server
    const newlist = [...footerData];
    let addFooterData = JSON.stringify(newlist);


    return (
        
        <>
            <div className='footerBox'>

                <div className='contentBox'>
                    <div style={{height:"5rem",padding:"0.5rem"}}>
                        <div>
                            <img src={images} alt="images section" className='imagessize' />
                        </div>
                    </div>
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates soluta, amet, veniam natus, voluptatem ullam temporibus dolorum suscipit quod ex id! Neque repellat itaque voluptate eligendi fugiat laborum? Mollitia vero repellendus ullam deleniti perferendis?
                    </div>
                    <div>
                        <ul>
                            <li><i class='bx bxl-facebook'></i></li>
                            <li><i class='bx bxl-instagram' ></i></li>
                            <li><i class='bx bxl-youtube' ></i></li>
                            <li><i class='bx bxl-github' ></i></li>
                        </ul>
                    </div>
                </div>

                <div style={{ width: "65vw", marginTop: "1rem" }} className='d-flex flex-wrap justify-content-around flex-start fontsize'>

                    <div>
                        <div className='ml'><h3>{footerData[0].labelHeading}</h3></div>
                        <ul>
                            {footerData.map((item, index) => (
                                <li key={index}>{item.label}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className='ml'><h3>{footerData[1].labelHeading}</h3></div>
                        <ul>
                            {footerData.map((item, index) => (
                                <li key={index}>{item.lable2}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className='ml'>
                            <h3>{footerData[2].labelHeading}</h3>
                        </div>
                        <ul>
                            {footerData.map((item, index) => (
                                <li key={index}>{item.label3}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className='ml'>
                            <h3>{footerData[3].labelHeading}</h3>
                        </div>
                        <ul>
                            {footerData.map((item, index) => (
                                <li key={index}>{item.label}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border border-danger'>
                <div className='footerMail'>
                    Wedding.planner.techWizard@gmail.com
                </div>
            </div>
        </>


    );
}

export default Footer;
