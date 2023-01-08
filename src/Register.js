import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Image from './admin_reg.jpeg';

function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        title: '', name: '', phone: '', email: '', password: '', address: ''
    });
    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        
        let {title, name, phone, email, password, address} = user
        //address= address.city
        const res = await fetch('/register', {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
           
            body : JSON.stringify({
                title, name, phone, email, password, address
            })
        });
        const data = await res.json();
        console.log(data)
        if(res.status === 400 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else {
            console.log(data.status)
            window.alert("Registration Successful");
           console.log("Registration Successful");

           navigate('/login');
        }
    }


    return (
        <div className="container-fluid m-3">
            <h2 className="text-center mb-5" style={{ fontFamily: "cursive" }}><u>Registration Form</u></h2>

            <div className="row d-flex justify-content-center ">
                <div className="col-lg-6 col-xl-4">
                    <img src={Image} alt="Admin Registration" className="img-fluid" />
                </div>

                <div className="col-lg-6 col-xl-4">
                    <form method="post" className='register-form'>
                        <div className="form-outline mb-4">
                            <label htmlFor="title" className="mt-3 mb-2 form-label">Title</label>
                            <input type="text" id="title" name="title" placeholder="Enter your Title" className="form-control" autocomplete='off' value={user.title} onChange={handleInputs} required />
                        </div>
                        <div className="form-outline mb-4">
                            <label htmlFor="name" className="mt-3 mb-2 form-label">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" className="form-control" autocomplete='off' value={user.name} onChange={handleInputs} required />
                        </div>
                        <div className="form-outline mb-4">
                            <label htmlFor="name" className="mt-3 mb-2 form-label">Phone</label>
                            <input type="tel" id="phone" name="phone" placeholder="Enter your Phone" className="form-control" autocomplete='off' value={user.phone} onChange={handleInputs} required />
                        </div>

                        <div className="form-outline mb-4">
                            <label htmlFor="email" className="mt-3 mb-2 form-label">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" className="form-control" autocomplete='off' value={user.email} onChange={handleInputs} required />
                        </div>

                        <div className="form-outline mb-4">
                            <label htmlFor="password" className="mt-3 mb-2 form-label">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" className="form-control" value={user.password} onChange={handleInputs} required />
                        </div>
                        <div className="form-outline mb-4">
                            <label htmlFor="address" className="mt-3 mb-2 form-label">Address</label>
                            <input type="text" id="address" name="address" placeholder="Enter your Address" className="form-control" autocomplete='off' value={user.address.city} onChange={handleInputs} required />
                        </div>

                        <div>
                            <input type="submit" className="mt-5 bg-info border-0" name="registration" value="Register" onClick={PostData} style={{ borderRadius: "5px", padding: "12px 30px", fontFamily: "cursive" }} />
                            <p className="small fw-bold pt-1 mt-3">Already have an Account?<a href="/login" className="link-danger">Login</a></p>
                        </div>



                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register;