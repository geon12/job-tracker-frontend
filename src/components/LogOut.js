function LogOut() {
    function handleClick() {
        fetch(`${process.env.REACT_APP_API_URL}/logout`,{method:'DELETE'})
            .then(resp => resp.json())
            .then(console.log)
    }
    return (
        <div>
            <button onClick={handleClick}>Log Out</button>
        </div>
    )
}

export default LogOut