import { useEffect,useState } from "react"
import OrgContainer from "./OrgContainer"
import SearchBar from "./SearchBar"

function OrgSearch({setOrg,setShowOrgForm,setShowJobForm}) {
    const [orgs,setOrgs] = useState(null)
    const [filteredOrgs,setFilteredOrgs] = useState(null)
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/organizations`,{credentials:'include'})
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((resp)=>{
            setOrgs(resp)
            
          })
        }
      })
    },[])
    function handleSearchSubmit(searchTerm) {
        searchTerm = searchTerm.toLowerCase()
        if (searchTerm) setFilteredOrgs(orgs.filter(org => org.name.toLowerCase().includes(searchTerm)))
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        setShowOrgForm(false)
        setShowJobForm(true)
    }
    return (
        <div>
           <h2>Choose an Organization</h2>
            {orgs ? <SearchBar handleSearchSubmit={handleSearchSubmit}/> : <div>Loading</div>}
            {filteredOrgs ? <OrgContainer filteredOrgs={filteredOrgs} setChosenOrg={setOrg} handleSubmit={handleSubmit}/> : null}
        </div>
    )
}

export default OrgSearch