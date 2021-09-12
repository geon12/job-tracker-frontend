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
        body: JSON.stringify(formData),
        })
        .then((resp) => resp.json())
        .then((resp) => {
            setUser(resp)
            setFormData(initialState)
        });
    }
    return (
        <form onSubmit={handleSubmit}>
             
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="username"
            />
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="password"
            />
            <input
                type="password"
                name="password_confirmation"
                value={formData.passwordConfirmation}
                onChange={handleChange}
                placeholder="confirm password"
            />
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="name"
            />
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="location"
            />
            <input
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                placeholder="job title"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUpForm