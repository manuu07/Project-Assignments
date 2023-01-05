import React from "react";
import './form.css'

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            showPreview: false,
        };
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log("form submit happened")
        alert('Form Submitted successfully')
        this.setState({
            showPreview: true
        })
    }

    // handleFormReset(event) {
    //     event.preventDefault();
    //     console.log("Form Resetted")
    //     this.setState({
    //         showPreview:false
    //     })
    // }

    fNameHandler(value) {
        this.setState({
            fname: value,
        })
    }

    lNameHandler(value) {
        this.setState({
            lname: value
        })
    }
    render() {
        return (
                <div className="parent">
                    <form
                        onSubmit={(event) => this.handleFormSubmit(event)}
                    //  onReset= { (event) => this.handleFormReset(event)}
                    >
                        <div className="container">
                            <h1>Registration Form</h1>
                            <p>Please fill in this form to create an account.</p>
                            <hr />

                            <label ><b>First Name</b></label>
                            <input type="text" placeholder="Enter First Name" id="fname" value={this.state.fname}
                                onChange={(event) => this.fNameHandler(event.target.value)}
                                required />

                            <label><b>Last Name</b></label>
                            <input type="text" placeholder="Enter Last Name" name="lname" id="lname" value={this.state.lname}
                                onChange={(event) => this.lNameHandler(event.target.value)} required />

                            <label><b>Gender</b></label><br /><br />
                            <label>
                                <input type="radio" name="gender" value="male" required />Male
                            </label>
                            <label>
                                <input type="radio" name="gender" value="female" />Female
                            </label>
                            <label>
                                <input type="radio" name="gender" value="other" />Other
                            </label>
                            <br /><br /><br />

                            <label><b>Country</b></label>
                            <select required>
                                <option value="">COUNTRY</option>
                                <option value="INDIA">INDIA</option>
                                <option value="USA"> United States of America</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Korea">Korea</option>
                                <option value="China">China</option>
                                <option value="JAPAN">JAPAN</option>
                            </select><br /><br /><br />

                            <label for="profile"><b>Profile Picture</b></label>
                            <input type="file" required/><br /><br /><br />

                            <input type="checkbox" />
                            <label><b>Do you want to receive marketing emails?</b></label><br />
                            <hr />
                            <button type="submit" className="btn">Register</button>
                        </div>
                    </form>
                    {this.state.showPreview && console.log('First Name:', this.state.fname, 'Last Name:', this.state.lname)}
                </div>
            
        )
    }
}

export default Form;