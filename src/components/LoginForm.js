import {useState} from "react"

function LoginForm({setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials:'include',
            body: JSON.stringify({ username, password })
        }
        fetch(`${process.env.REACT_APP_API_URL}/login`,configObj)
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then(resp => {
                        setUser(resp)
                        setPassword("")
                        setUsername("")
                    })
                }
                else {
                    resp.json().then((resp) => resp.errors)
                }
            })
            
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={username} placeholder="Username" onChange={handleUsernameChange}/>
            <br/>
            <input type="password" name="password" value={password} placeholder="Password" onChange={handlePasswordChange}/>
            <br />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm