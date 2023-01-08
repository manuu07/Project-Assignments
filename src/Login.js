import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './admin_login2.jpg'

function LoginForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    
    const loginUser = async (e) => {
        e.preventDefault();
        
         //fetch will return promise
        const res = await fetch('/login' , {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            // server doesn't understand json so we'll use json.stringify to convert it into string
            body: JSON.stringify({
                email , password
            })                           
        })     
        
        const data = await res.json();
        console.log(data)
        if(res.status === 400 || !data){
            window.alert('Invalid Credentials');
        }
        else {
             window.alert('Login Successful');
            navigate('/books')
        }
        
    }



    return (
        <div className="container-fluid m-3">
            <h2 className="text-center mb-5" style={{fontFamily:"cursive"}}><u>User Login</u></h2>
            <div className="row d-flex justify-content-center ">
                <div className="col-lg-6 col-xl-4">  
                    <img src={Image} alt="Admin Login" className="img-fluid " style={{height:"400px"}}/>  
                </div>
                <div className="col-lg-6 col-xl-4">
                <form method="post">
                        <div className="form-outline mb-4">
                            <label htmlFor="email" className="mt-5 mb-2 form-label">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your Email" className="form-control" autocomplete='off' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                         
                        <div className="form-outline mb-4">
                            <label for="password" className="mt-5 form-label">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" className="form-control" autocomplete='off' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        
                        <div>
                            <input type="submit" className="mt-5 bg-info  border-0" name="admin_login" value="Login" onClick={loginUser} style={{borderRadius:"5px", padding:"12px 30px", fontFamily:"cursive"}}/>
                            <p className="small fw-bold pt-1 mt-3">Don't have an Account?<a href="/register" className="link-danger">Register</a></p>
                        </div>
                            
                            
                        
                    </form>
                </div>
</div>
        </div>
            
    )
}

export default LoginForm