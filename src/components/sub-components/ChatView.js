import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';

export default function ChatView() {
    const url = "https://foolish-moth-88.telebit.io/get-messages/";
    const [message,setMessages] = useState([]);
    const id = useParams()
    const user_id = localStorage.getItem('sessionId');
    const [receiver, setReceiver] = useState('')
    const [loading, setLoading] = useState(false);
    const[newMessage, setNewMessage] = useState({message:''})


    useEffect(() => {
        setLoading(true)
        let interval = setInterval(() => {
            fetch(url + id.id + '/' + parseInt(user_id) + '/' , {
                method: 'GET'
            })
            .then((res) => res.json())
            .then((data) => {
                setMessages(data);
                setLoading(false);
            })
        }, 200);
        return () => clearInterval(interval);
    },[user_id,id]);
    
    useEffect(() => {
        fetch('https://foolish-moth-88.telebit.io/profile/' + id.id, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            setReceiver(data.username)
        })
    },[id])



    const handleChange = (event) =>{
        setNewMessage({
            ...newMessage,
            [event.target.name]: event.target.value
        })
    }

    const sendMessage = () => {
        const formData = new FormData();
        formData.append('user', parseInt(user_id));
        formData.append('sender', parseInt(user_id));
        formData.append("receiver", parseInt(id.id));
        formData.append('message', newMessage.message);
        formData.append('is_read', false);

        fetch('https://foolish-moth-88.telebit.io/send-messages/', {
            method: 'POST',
            body: formData
        })
        .then((res) => res.json())
        .then((data) => {
            setNewMessage({message:''})
        })
    }

    useEffect(() => {
        const chat = document.querySelector('.chat-messages');
        chat.scrollTop = chat.scrollHeight;
    }, [message]);


return (
    <>
        <style dangerouslySetInnerHTML={{__html:`body,html{height:100%;margin:0}.chat-container{display:flex;flex-direction:column;height:100vh}.chat-messages{flex:1;padding:20px;overflow-y:auto}.message{margin-bottom:35px!important}.message-content{padding:10px;border-radius:20px;max-width:70%;font-weight:600;margin-bottom:10px}.sent .message-content{background-color:var(--color-5);color:var(--color-2);float:right;clear:both;border-bottom-right-radius:3px}.received .message-content{background-color:var(--color-2);color:var(--color-5);float:left;border-bottom-left-radius:3px;clear:both}.chat-input{padding:20px;display:flex}.user-details{padding:20px;border-bottom:2px solid var(--color-5)}.user-details h2{margin:0}.chat-input input[type="text"]{flex:1;padding:10px;border:none;color:var(--color-5);border-radius:50px;padding:0 30px;background-color:var(--color-2)}input[type="text"]:focus{border:none;outline:none}input[type="text"]::placeholder{color:var(--color-5);font-weight:100}.chat-input button{padding:10px;margin-left:10px;border:none;border-radius:50%;background-color:var(--color-5);color:#fff;cursor:pointer}`}}></style>
        <div className="chat-container">
            <div className="user-details">
                <h2>{receiver}</h2>
            </div>
            <div className="chat-messages" ref={(el) => { el && el.scrollIntoView({ behavior: "smooth" }) }}>

            {!loading?
                
            message.length > 0?
            message.map((messag, index) => 
            <>
            {messag.sender.id === parseInt(user_id) &&
                <div key={index} className="message sent">
                    <div className="message-content">
                    {messag.message}
                    </div>
                </div>
            }
            {
                messag.receiver.id === parseInt(user_id) &&
                <div key={index} className="message received">
                    <div className="message-content">
                        {messag.message}
                    </div>
                </div>
            }
               </>
            ):
            <>
               <h3 className="text-center">No Message Yet</h3>
            </>
            :<Loader />
}
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type your message..." name='message' value={newMessage.message} onChange={handleChange} />
                <button onClick={sendMessage}><svg width="30px" height="30px" viewBox="0 0 24 24" fill="var(--color-2)" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#00002c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></button>
            </div>
        </div>
    </>
);
}
