import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

export default function LoginUser() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [postResponse, setPostResponse] = useState("");
    const [jwtCookie, setJwtCookie] = useState("")
const navigate = useNavigate();

const createCookie = (Cookie) => {
    Cookies.set("jwt-cookie", cookie)
}
   

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
        const post = await axios
        .post("http://localhost:3000/login", postUser)
        .then((response) => {
            setPostResponse(response.data.message)
                    if(response.data.message == "Successful Login"){
                const jwtCookie = createCookie(response.data.token)
                setJwtCookie(jwtCookie)
            }
        })      
    }
  

    const postUser = async (evt) => {
        evt.preventDefault();
        console.log("here!");
        postToDo(formData);
        setFormData({
            username: "",
            password: "",
        });
    }

    const handleLogin = (message) => {
        return message == "Successful Login"
        ? navigate("/main") 
        : console.log("No")
    }
    return ( 
        <div className="login">
            <h1>Groceries App</h1>
            <form action="" onSubmit={postUser}>
                <label htmlFor="username">Username </label>
                <input 
                type="text" 
                name="username" 
                id="username"
                onChange={handleOnChange}
                value={formData.username}
                required 
                />
                <p></p>
                <label htmlFor="password">Password </label>
                <input 
                type="password" 
                name="password" 
                id="password" 
                onChange={handleOnChange}
                value={formData.password}
                required
                />
                <br />
                {/* <button onClick={() => handleLogin(postResponse)}>Login</button> */}
                <button>Login</button>
                
                <p>not a member yet? click <a href="/register"> here</a> to join</p>
               
            </form>
            {<p className="logintext">{postResponse}</p>}
            {<p>{jwtCookie} </p>}
        </div>
    );
}