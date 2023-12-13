import axios from "axios"
import { useState } from "react"

export default function LoginUser() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [postResponse, setPostResponse] = useState("");

    const handleOnChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const postToDo = async (user) => {
        const postUser = { ...user };
        await axios
        .post("http://localhost:3000/login", postUser)
        .then((response) => setPostResponse(<p>{response.data}</p>))
    };

    const postUser = async (evt) => {
        evt.preventDefault();
        console.log("here!");
        postToDo(formData);
        setFormData({
            username: "",
            password: "",
        });
    }
    return ( 
        <div>
            <form action="" onSubmit={postUser}>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                name="username" 
                id="username"
                onChange={handleOnChange}
                value={formData.username}
                required 
                />
                <br />
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password" 
                id="password" 
                onChange={handleOnChange}
                value={formData.password}
                required
                />
                <br />
                <button>Login</button>
            </form>
            {postResponse}
        </div>
    );
}