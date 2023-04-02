import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';


const MovieForm = ({ showData }) => {
    const { id } = useParams();
    console.log(id);
    let data = showData.find(show => show.show.id == id)
    const navigate = useNavigate();
    const [user, setUser] = useState({
        title: '', name: '', phone: '', email: '', date: '', time: '', seats: ''
    });
    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = (e) => {
        e.preventDefault();

        localStorage.setItem('user', JSON.stringify(user));

        window.alert("Ticket Booked Successfully");
        console.log("Ticket Booked Successfully");

        navigate('/');
    }
    return (
        <div className="container-fluid m-3">
            <h2 className="text-center mb-5" style={{ fontFamily: "cursive" }}><u>Book Ticket</u></h2>

            <div className="row d-flex justify-content-center ">
                <div className="col-lg-6 col-xl-4">
                    <form method="post" className='register-form'>
                        <div className="form-outline mb-4">
                            <label htmlFor="title" className="mt-3 mb-2 form-label">Movie Name</label>
                            <input type="text" id="title" name="title" placeholder="Enter your Title" className="form-control" autocomplete='off' value={data?.show.name} onChange={handleInputs} required />
                        </div>
                        <div className="form-outline mb-4">
                            <label htmlFor="name" className="mt-3 mb-2 form-label">Your Name</label>
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
                            <label htmlFor="date">Select a date:</label>
                            <input type="date" id="date" name="date" className="form-control" value={user.date} onChange={handleInputs} required />
                        </div>

                        <div className="form-outline mb-4">
                            <label htmlFor="time">Select a time:</label>
                            <input type="time" id="time" name="time" className="form-control" value={user.time} onChange={handleInputs} required />
                        </div>

                        <div className="form-outline mb-4">
                            <label htmlFor="seats">Number of seats:</label>
                            <input type="number" id="seats" name="seats" min="1" max="10" className="form-control" value={user.seats} onChange={handleInputs} required />
                        </div>

                        <div>
                            <input type="submit" className="mt-5 bg-info border-0" name="registration" value="Book" onClick={PostData} style={{ borderRadius: "5px", padding: "12px 30px", fontFamily: "cursive" }} />
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default MovieForm;