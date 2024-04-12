import React from 'react'
import { useState } from 'react';

export default function ResetPassword() {
    const url = "https://popular-parrot-100.telebit.io/users/";

    const [user, setUser] = useState({});

    const checkPassword = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    "ngrok-skip-browser-warning": "1",
                },
            });
            const data = await response.json();

            // filter the user with the id and check if the password is correct
            const filteredUser = data.filter((item) => item.id === parseInt(localStorage.getItem("sessionId")))[0];

            if (filteredUser.password === formData.get("old-password")) {
                await changePassword(e);
            } else {
                alert('Old Password is incorrect');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const changePassword = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    "ngrok-skip-browser-warning": "1", // Add this header
                    // Include other headers as needed
                },
                body: JSON.stringify({
                    id: localStorage.getItem("sessionId"),
                    password: formData.get("password"),
                }),
            });
            const data = await response.json();

            if (data.error) {
                alert(data.error);
            } else {
                alert('Password Changed Successfully');
                window.location = '/dashboard';
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
        
  return (
    <>
    <h1 className="mt-3 mx-3">Reset Password</h1>
        <hr style={{backgroundColor: "var(--color-5)",height: "2px",border: "none",borderRadius: "10px",margin: "0",marginBottom:'15px'}} />
        <div className="container">
            <div className="row">
            <div className="col-md-6 mx-auto">
                <div className=" card-body">
                <form onSubmit={checkPassword}>
                    <div className="form-group mb-3">
                    <label htmlFor="old-password">Old Password</label>
                    <input type="password" name="old-password" className="form-control" style={{backgroundColor:'var(--color-2)',border:'none',outline:'none',color:'var(--color-5)'}} required />
                    </div>
                    <div className="form-group mb-3">
                    <label htmlFor="password">New Password</label>
                    <input type="password" name="password" className="form-control" style={{backgroundColor:'var(--color-2)',border:'none',outline:'none',color:'var(--color-5)'}} required />
                    </div>
                    <div className="form-group mb-3">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="password" className="form-control" style={{backgroundColor:'var(--color-2)',border:'none',outline:'none',color:'var(--color-5)'}} required />
                    </div>
                    <button type="submit" className="btn btn-block" style={{backgroundColor: "var(--color-4)",color: "var(--color-1)",borderRadius: "5px",fontSize: "17px",marginTop: "10px",margin:'5px auto'}}>Reset Password</button>
                </form>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
