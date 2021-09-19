import OrgCard from "./OrgCard"
import {useState} from "react"
import RadioOption from "./RadioOption"

function OrgContainter({filteredOrgs,setChosenOrg,handleSubmit}) {

   

    const [checkedOrg,setCheckedOrg] = useState(null)

    function handleRadioChange(event) {
        if (event.target.checked) {
            const checkedOrganization = filteredOrgs.find(org => org.id === parseInt(event.target.value))
            setChosenOrg(checkedOrganization)
        }
    }
    function populateOrgs(filteredOrgs) {
        return filteredOrgs.map((org) => 
        <RadioOption 
            org={org}
            handleRadioChange={handleRadioChange}
            checked={checkedOrg}
            setChecked={setCheckedOrg}
            key={org.id}
        >
            <OrgCard org={org}/>
        </RadioOption>)
        
    }

    return (
        <form onSubmit={handleSubmit}>
            {populateOrgs(filteredOrgs)}
            <button className="btn btn-secondary btn-sm" type="submit">Choose Organization</button>
        </form>
    )
}

export default OrgContainter