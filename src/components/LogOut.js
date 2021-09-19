import { useHistory } from "react-router-dom";

function LogOut({setUser}) {
    const history = useHistory()

    function handleClick() {
        fetch(`${process.env.REACT_APP_API_URL}/logout`,{method:'DELETE',credentials:'include'})
            .then((resp) => {
                if (resp.ok) {
                    // console.log("deleted")
                    setUser(null)
                    history.push("/login")
                }
            })
            
    }
    return (
        <div>
            <button onClick={handleClick}>Log Out</button>
        </div>
    )
}

export default LogOut