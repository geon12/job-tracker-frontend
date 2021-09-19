import { useState } from "react"

function SignUpForm({setUser}) {
    const initialState = {
        username: "",
        password: "",
        password_confirmation: "",
        location: "",
        email: "",
        job_title: "",
        name:""

    }
    const [formData,setFormData] = useState(initialState)

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials:'include',
        body: JSON.stringify(formData),
        })
        .then((resp) => resp.json())
        .then((resp) => {
            setUser(resp)
            setFormData(initialState)
        });
    }
    return (
        <form onSubmit={handleSubmit} className="form-group text-center">
             
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="username"
                className="form-control-lg my-2"
            />
            <br />
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
                className="form-control-lg my-2"
            />
            <br />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="password"
                className="form-control-lg my-2"
            />
            <br />
            <input
                type="password"
                name="password_confirmation"
                value={formData.passwordConfirmation}
                onChange={handleChange}
                placeholder="confirm password"
                className="form-control-lg my-2"
            />
            <br />
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="name"
                className="form-control-lg my-2"
            />
            <br />
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="location"
                className="form-control-lg my-2"
            />
            <br />
            <input
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                placeholder="job title"
                className="form-control-lg my-2"
            />
            <br />
            <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
    )
}

export default SignUpForm