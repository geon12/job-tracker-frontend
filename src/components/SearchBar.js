import {useState} from "react"

function SearchBar({handleSearchSubmit}) {

    const [search,setSearch] = useState("")

    function handleChange(event) {
        setSearch(event.target.value)
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleSearchSubmit(search)
        setSearch("")
    }

    const placeholder = `Search Organizations`
    const id = `org-search`
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={id} className="h5">
                <span>Search Organizations</span>
            </label>
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                name="title"
                value={search}
                onChange={handleChange}
                className="form-control-sm m-2"
            />
            <button className="btn btn-secondary btn-sm" type="submit">Search</button>
        </form>
    )

}

export default SearchBar