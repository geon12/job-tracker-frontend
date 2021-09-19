import LoginForm from "./LoginForm"

function Login({setUser,getJobApps}) {
    return (
        <div>
            <LoginForm setUser={setUser} getJobApps={getJobApps}/>
        </div>
    )
}

export default Login