import { useEffect,useState } from "react"
import JobAppCard from "./JobAppCard"

function JobAppsContainer() {
    // const [jobApps, setJobApps] = useState(null)
    // const [tasks, setTasks] = useState(null)
    // const [contacts,setContacts] = useState(null)
    useEffect( () => {
        fetch(`${process.env.REACT_APP_API_URL}/job_applications`,{credentials:'include'})
        .then((resp) => {
            if (resp.ok) {
            resp.json().then((resp) => {
                    //setJobApps(resp)
                    console.log(resp)
                })
            }
        })
    },[])
    return (
        <div>
            {/* {jobApps ? jobApps.map((app) => <JobAppCard app={app}/>) : <div>Page is Loading</div>} */}
        </div>
    )
}

export default JobAppsContainer