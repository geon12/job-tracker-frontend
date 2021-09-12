function LogOut({setUser}) {
    function handleClick() {
        fetch(`${process.env.REACT_APP_API_URL}/logout`,{method:'DELETE',credentials:'include'})
            .then((resp) => {
                if (resp.ok) {
                    console.log("deleted")
                    setUser(null)
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