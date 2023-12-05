import React from 'react';
import "../wallpaper/Wallpaper.css";
// import bg from "../images/bg.png"
import Logo from "../images/Logo.png";
import Profile from "../images/Profile.png";
import Icon from "../images/Icon.png";
import Cale from "../images/Cale.png";
import ImgA from "../images/ImgA.png"
import ImgB from "../images/ImgB.png"
import ImgC from "../images/ImgC.png"
import ImgD from "../images/ImgD.png"

const Wallpaper = () => {
    return (
        <div className="backgroundImage">
            <div className='bg'>
                <div className='logo'>
                    <img src={Logo} className="logo-t" alt='logo' />
                </div>

                <div className='text-01'>
                    <p className='Lass-text'>LAAS</p>
                    <p className='description'>Leave Attendance Automation System</p>
                </div>

                <div className='container-x'>

                    <div className='form-profile'>
                        <div><img className="profile" src={Profile} alt='profile'></img></div>

                        <div className='form'>

                            <form>

                                <div className='form-inputbox'>
                                    <img src={Icon} className='icon-1' alt="icon1"></img>
                                    <input className='employeeID'
                                        type="number"
                                        id="employeeID"
                                        name="employeeID"
                                        placeholder='EmployeeID'
                                    />
                                </div>

                                <div className='form-inputbox'>
                                    <img src={Icon} className='icon-1' alt="icon1"></img>
                                    <input className='employeeName'
                                        type="text"
                                        id="employeeName"
                                        name="employeeName"
                                        placeholder='Employee Name'
                                    />
                                </div>

                                <div className='form-inputbox'>
                                    <img src={Cale} className='icon-2' alt="icon1"></img>
                                    <input
                                        className='Date'
                                        type="date"
                                        id="date"
                                        name="date"
                                        placeholder='Date'
                                        min="2023-12-2023" // An earlier date to hide default placeholder
                                    />
                                </div>

                                <div className='form-inputbox'>
                                    <img src={Cale} className='icon-2' alt="icon1"></img>
                                    <input className='Day'
                                        type="text"
                                        id="day"
                                        name="day"
                                        placeholder='Day'
                                    />
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className='form-text'>
                        <div className='image-1'> <img src={ImgA} alt='ImgA' ></img> </div>
                        <div className='image-2'><img src={ImgB} alt='ImgA'></img> </div>
                        <div className='image-3'><img src={ImgC} alt='ImgA' ></img> </div>
                        <div className='image-4'><img src={ImgD} alt='ImgA'></img> </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Wallpaper;
