import { useState } from "react"
import JobAppCard from "./JobAppCard"

function JobAppsContainer({jobApps}) {
    const [showOrgForm,setShowOrgForm] = useState(false)
    const [org, setOrg] = useState(null)


    return (
        <div>
            <button>Add a Job Application</button>
            {jobApps ? jobApps.map((app) => <JobAppCard key={app.id} app={app} />) : <div>Page is Loading</div>}
        </div>
    )
}

export default JobAppsContainer