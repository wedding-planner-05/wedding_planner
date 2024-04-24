import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './DashBord.css';
import { RiLockPasswordLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { CgList } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
// import Avatar from 'react-avatar';
import { TbHandClick } from "react-icons/tb";
import { AiOutlineCamera } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function DashCatergory() {

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-3 col-lg-2  asidebar">

                        <div>
                            <ul className="list-unstyled">
                                <li><RxDashboard /><Link to="/Dashboard1"><span>Dashboard</span></Link></li>
                                <li><RiLockPasswordLine /><Link to="/Dashboard"><span>Password</span></Link></li>
                                <li><RiContactsLine /><Link to="/Dashboard2"><span>Contact-Us</span></Link></li>
                                <li><CgList /><span>Catergory-List</span></li>
                                <li><AiOutlineSetting /><span>Setting</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>

        </>
    );
}

export default DashCatergory;
