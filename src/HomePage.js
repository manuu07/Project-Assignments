import React from "react";
import './style.css'
import Image from './admin_reg2.jpg'

const styles1={fontFamily:"cursive",textDecoration:"underline"}
const styles2={borderRadius:"5px", padding:"10px 32px", fontFamily:"cursive", }





function HomePage() {
    return (
        <div className="container-fluid p-0">
            <div className="bg-light">
                <h2 className="text-center p-2 mt-3 mb-5" style={styles1}>Book Management</h2>
            </div>

            <div className="row">
                <div className="col-md-12 mx-auto bg-secondary p-1 d-flex align-item-center ">

                    <div className=" button my-5 p-2 text-center"></div>
                    <button className='mx-auto my-5' style={styles2}><a href='/login' className='nav-link'>Login</a></button>
                    <button className='mx-auto my-5' style={styles2}><a href='/register' className='nav-link' >Create Account</a></button>

                </div>
            </div>
            <img src={Image} className='m-auto' style={{height:"500px"}} alt=''  />
        </div>
    )
}

export default HomePage;