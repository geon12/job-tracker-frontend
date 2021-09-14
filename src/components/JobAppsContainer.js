

import JobAppCard from "./JobAppCard"

function JobAppsContainer({jobApps}) {
    //const [jobApps, setJobApps] = useState(null)
    

    return (
        <div>
            {jobApps ? jobApps.map((app) => <JobAppCard key={app.id} app={app} />) : <div>Page is Loading</div>}
        </div>
    )
}

export default JobAppsContainer