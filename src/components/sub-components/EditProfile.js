import React, { useState } from 'react'
import { useEffect } from 'react';

export default function EditProfile() {
    const user_id = parseInt(localStorage.getItem("sessionId"));

    const url = `https://foolish-moth-88.telebit.io/users/`;

    const fileUrl = `https://foolish-moth-88.telebit.io/posts/savefile`;


    const [user, setUser] = useState({
        fname: '',
        lname: '',
        number: '',
        username: '',
        email: '',
        bio: ''
    });
    


    const updateUser = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        fetch(url,{
            method: 'PUT',  
            headers: {
                "ngrok-skip-browser-warning": "1", // Add this header
                // Include other headers as needed
            },
            body: JSON.stringify({
                id: localStorage.getItem("sessionId"),
                fname: data.get("fname"),
                lname: data.get("lname"),
                username: data.get("username"),
                number: data.get("mobile"),
                email: data.get("email"),
                bio: data.get("bio"),
            })
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.error){
                alert(data.error);
            }else{
                
                alert('Profile Updated Successfully');
                window.location = '/dashboard';
            }
        })
    }

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    };


    const setProfileImage = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', file);

        fetch(fileUrl,{
            method: 'POST',
            body: data
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.error){
                alert(data.error);
            }else{
                fetch(url,{
                    method: 'PUT',  
                    headers: {
                        "ngrok-skip-browser-warning": "1", // Add this header
                        // Include other headers as needed
                    },
                    body: JSON.stringify({
                        id: localStorage.getItem("sessionId"),
                        image: fileName
                    })
                })
                .then((res) => res.json())
                .then((data) => {
                    if(data.error){
                        alert(data.error);
                    }else{
                        alert('Profile Image Updated Successfully');
                        window.location = '/dashboard';
                    }
                })
            }
        })
    }

    const [bannerFile, setBannerFile] = useState(null);
    const [bannerFileName, setBannerFileName] = useState("");
  
    const handleBannerFileChange = (e) => {
      setBannerFile(e.target.files[0]);
      setBannerFileName(e.target.files[0].name);
    };

    const setBanner = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', bannerFile);

        fetch(fileUrl,{
            method: 'POST',
            body: data
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.error){
                alert(data.error);
            }else{
                fetch(url,{
                    method: 'PUT',  
                    headers: {
                        "ngrok-skip-browser-warning": "1", // Add this header
                        // Include other headers as needed
                    },
                    body: JSON.stringify({
                        id: localStorage.getItem("sessionId"),
                        banner: bannerFileName
                    })
                })
                .then((res) => res.json())
                .then((data) => {
                    if(data.error){
                        alert(data.error);
                    }else{
                        alert('Banner Updated Successfully');
                        window.location = '/dashboard';
                    }
                })
            }
        })
    }

    useEffect(() => {
        const getUserData = async () => {
            await fetch(url,{
                method: 'GET',
                headers: {
                    "ngrok-skip-browser-warning": "1"
                }
            })
            .then(response => response.json())
            .then(data => {
                setUser(data.filter((item) => item.id === user_id)[0]);
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }

        getUserData();

        setUser(
            {
                fname: user.fname,
                lname: user.lname,
                number: user.number,
                username: user.username,
                email: user.email,
                bio: user.bio
            }
        )

    }, [url, user_id]);





return (
    <>
        <h1 className="mt-3 mx-3">Edit Profile</h1>
        <hr style={{backgroundColor: "var(--color-5)",height: "2px",border: "none",borderRadius: "10px",margin: "0",marginBottom:'15px'}} />

        <form className='col-md-10 m-auto' onSubmit={setProfileImage}>
            <h2 className='mt-4'>Profile Image:</h2>
            <div className="form-group">
                <label htmlFor="image"></label>
                <input type="file" className="form-control" id="image" name="image" style={{backgroundColor:'var(--color-2)',border:'none',outline:'none',color:'var(--color-5)'}} onChange={handleFileChange} required/>
            </div>
            <button className='btn'  type="submit"
                style={{backgroundColor: "var(--color-4)",color: "var(--color-1)",borderRadius: "5px",fontSize: "17px",marginTop: "10px",margin:'5px auto'}}
            >Update Profile Image</button>
        </form>

        <form className='col-md-10 m-auto' onSubmit={updateUser}>
            <h2 className='mt-4'>Personal Information:</h2>
            <div className="form-row">
                <div className="form-group  col-md-6">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" className="form-control" id="fname" value={user.fname} name="fname" style={{backgroundColor:'var(--color-2)',border:'none',outline:'none',color:'var(--color-5)'}} onChange={(e) => setUser({...user, fname: e.target.value})} required/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" className="form-control" id="lname" value={user.lname} name="lname" style={{backgroundColor:'var(--color-2)',border:'none',outline:'none',color:'var(--color-5)'}} onChange={(e) => setUser({...user, lname: e.target.value})} required/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input type="text" className="form-control" id="mobile" value={user.number} name="mobile" style={{backgroundColor:'var(--color-2)',border:'none',outline:'none',color:'var(--color-5)'}} onChange={(e) => setUser({...user, number: e.target.value})} required/>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" className="form-control" id="username" value={user.username} name="username" style={{backgroundColor:'var(--color-2)',border:'none',outline:'none',color:'var(--color-5)'}} onChange={(e) => setUser({...user, username: e.target.value})} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" value={user.email} name="email" style={{backgroundColor:'var(--color-2)',border:'none',outline:'none',color:'var(--color-5)'}} onChange={(e) => setUser({...user, email: e.target.value})} required/>
            </div>
            <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <input type="text" className="form-control" id="bio" name="bio" value={user.bio} style={{backgroundColor:'var(--color-2)',border:'none',outline:'none',color:'var(--color-5)'}} onChange={(e) => setUser({...user, bio: e.target.value})} required/>
            </div>

            <button className='btn'
                style={{backgroundColor: "var(--color-4)",color: "var(--color-1)",borderRadius: "5px",fontSize: "17px",marginTop: "10px",margin:'5px auto'}}
            >Submit Changes</button>
        </form>

        <form className="col-md-10 m-auto mb-5" onSubmit={setBanner}>
            <h2 className='mt-4'>Banner:</h2>
            <div className="form-group">
                <label htmlFor="banner"></label>
                <input type="file" className="form-control" id="banner" name="banner" style={{backgroundColor:'var(--color-2)',border:'none',outline:'none',color:'var(--color-5)'}} onChange={handleBannerFileChange} required/>
            </div>
            <button className='btn' type="submit"
                style={{backgroundColor: "var(--color-4)",color: "var(--color-1)",borderRadius: "5px",fontSize: "17px",marginTop: "10px",margin:'5px auto'}}
            >Update Banner</button>
        </form>
    </>
);
}
