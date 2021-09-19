import SignUpForm from "./SignUpForm"

function SignUp({setUser}) {
    return(
        <div>
            <h1 className="text-center display-1">Sign up for JobTracker</h1>
            <SignUpForm setUser={setUser}/>
        </div>
    )
}

export default SignUp