import React from 'react';
import logo from "../../assets/logo.png"

const ForgotPassword = () => {

    // Send recovery link to email
    const sendRecoveryLink = async (e) => {
        const data = new FormData(e.target);
        e.preventDefault();
        const url = "https://popular-parrot-100.telebit.io/forgot-password/";
        await fetch(url, {
            method: 'POST',
            headers: {
                "ngrok-skip-browser-warning": "1"
            },
            body: JSON.stringify({
                email: data.get("email")
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    alert(data);
                }
            });
    }

return (
    <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
            dangerouslySetInnerHTML={{
                __html:
                    ":root{--color-1: #0f0021;\n    --color-2: #00002c;\n    --color-3: #fcb045;\n    --color-4: #23d18b;\n    --color-5: #29b8db;\n\n    --background-gradient: linear-gradient(to bottom right, var(--color-1), var(--color-2),#0A2E58,#155C84, #1F8AAF, var(--color-5));\n}\n*{\n    font-family: roboto;\n}\n::-webkit-scrollbar{\n    display: none;\n}\n.container-fluid{ width:100%;  background: var(--background-gradient);\n}\n.container-fluid{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\nimg{\n    width: 300px;\n}\n.register-card{    background-color: var(--color-2);\n    border-radius: 10px;\n    padding: 20px;\n}\n.input{\n    width: 38%;\n    border-radius: 5px;\n    border: 2px solid white;\n    background-color: transparent;\n    color: white;\n    font-size: 15px;\n    padding: 10px;\n    margin: 10px;\n    \n}\ninput::placeholder{\n    color: rgb(148, 148, 148);\n}\n.input:focus, select:focus{\n border:1px solid white;outline: none;\n}\nh1{\n    color: white;\n    text-align: center;\n    margin: 10px;\n    font-size: 40px;\n}\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=submit]{\n    background-color: var(--color-4);\n    color: white;\n    border: none;\n    padding: 10px;\n    border-radius: 5px;\n    margin: 10px;\n    cursor: pointer;\n    width: 15rem;\n}\ninput[type=submit]:hover{\n    background-color: var(--color-3);\n    transition: background-color 0.9s;\n}\nform{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.input-group-self{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n@media screen and (max-width: 600px){\n    .input-group-self{\n        flex-direction: column;\n        margin: auto;\n    }\n    .input{\n        width: 80%;\n        margin: 10px auto;\n    }\n    .container-fluid{\n           }\n}\n    "
            }}
        />

        <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
            <img src={logo} alt="" />
            <div className="register-card col-md-4">
                <h1>Forgot Password</h1>
                <form onSubmit={sendRecoveryLink} >

                    <div className="d-flex justify-content-center align-items-center flex-column w-100">
                        <input className="input"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            style={{ width: '70%' }}
                        />
                    </div>
                    <input
                        type="submit"
                        name="submit"
                        className="login input login-submit"
                        value="Send Recovery Link"
                    />
                </form>
            </div>
        </div>
    </>
);

};

export default ForgotPassword;
