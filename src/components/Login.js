import LoginForm from "./LoginForm"

function Login({setUser,getJobApps}) {
    return (
        <div>
            <h1 className="display-1 text-center">Login to your Profile</h1>
            <LoginForm setUser={setUser} getJobApps={getJobApps}/>
        </div>
    )
}

export default Login