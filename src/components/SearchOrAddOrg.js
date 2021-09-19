import { useState } from "react"
import OrganizationForm from "./OrganizationForm"
import OrgSearch from "./OrgSearch"

function SearchOrAddOrg({setOrg,setShowOrgForm,setShowJobForm}) {
    const [searchOrAdd,setSearchOrAdd] = useState(false)
    function handleSearchClick() {
        setSearchOrAdd(true)
    }
    function handleAddClick() {
        setSearchOrAdd(false)
    }
    function addOrganization(data) {
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials:'include',
            body: JSON.stringify(data)
        }
        fetch(`${process.env.REACT_APP_API_URL}/organizations`,configObj)
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then(resp => {
                        
                        setOrg(resp)
                        setShowOrgForm(false)
                        setShowJobForm(true)
                    })
                }
                else {
                    resp.json().then((resp) => resp.errors)
                }
            })
    }
    return(
        <div>
            {searchOrAdd ?
            <OrgSearch setOrg={setOrg} setShowOrgForm={setShowOrgForm} setShowJobForm={setShowJobForm}/>:
            <OrganizationForm addOrganization={addOrganization}/>
            }
            <button onClick={handleSearchClick}>Search for Organization</button>
            <button onClick={handleAddClick}>Add an Organization</button>
        </div>
    )
}

export default SearchOrAddOrg