import { useState } from "react"
import JobAppCard from "./JobAppCard"
import JobApplicationForm from "./JobApplicationForm"
import JobForm from "./JobForm"
import SearchOrAddOrg from "./SearchOrAddOrg"

function JobAppsContainer({jobApps,setJobApps}) {
    const [addButton,setAddButton] = useState(true)
    const [showOrgForm,setShowOrgForm] = useState(false)
    const [org,setOrg] = useState(null)
    const [showJobForm,setShowJobForm] = useState(false)
    const [job,setJob] = useState(null)
    const [showJobApp,setShowJobApp] = useState(null)
    

    function handleAddClick() {
        setShowOrgForm(true)
        setAddButton(false)
    }
    function handleCloseClick() {
        setShowOrgForm(false)
        setShowJobForm(false)
        setShowJobApp(false)
        setAddButton(true)
    }

    function addJob(data) {
        
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials:'include',
            body: JSON.stringify(data)
        }
        fetch(`${process.env.REACT_APP_API_URL}/jobs`,configObj)
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then(resp => {
                        
                        setJob(resp)
                        setShowJobForm(false)
                        setShowJobApp(true)
                    })
                }
                else {
                    resp.json().then((resp) => resp.errors)
                }
            })
    }

    function updateJobApps(newJobApp){
        job["organization"] = org
        newJobApp["job"] = job
        newJobApp["tasks"] = []
        newJobApp["contacts"] = []
        jobApps.push(newJobApp)
        setJobApps(jobApps)
        handleCloseClick()
    }

    function addJobApp(data) {
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials:'include',
            body: JSON.stringify(data)
        }
        fetch(`${process.env.REACT_APP_API_URL}/job_applications`,configObj)
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then(resp => {
                        
                        updateJobApps(resp)
                        setShowJobApp(false)
                    })
                }
                else {
                    resp.json().then((resp) => resp.errors)
                }
            })

    }

    return (
        <div>
            {showOrgForm ? <SearchOrAddOrg setOrg={setOrg} setShowOrgForm={setShowOrgForm} setShowJobForm={setShowJobForm}/> :null}
            {showJobForm && org ? <JobForm organizationId={org.id} fetch={addJob}/> :null}
            {showJobApp && job ? <JobApplicationForm fetch={addJobApp} jobId={job.id}/> : null}
            {addButton ? <button onClick={handleAddClick}>Add a Job Application</button> : 
                <button onClick={handleCloseClick}>Close</button>}
            {jobApps ? jobApps.map((app) => <JobAppCard key={app.id} app={app} />) : <div>Page is Loading</div>}
        </div>
    )
}

export default JobAppsContainer