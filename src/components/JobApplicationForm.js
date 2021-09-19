import {useState} from "react"
import { v4 as uuidv4 } from 'uuid'

function JobApplicationForm({fetch,jobApp,jobId}) {
    
    const initialState = jobApp ? {
        notes: jobApp.notes ,
        application_process: jobApp.application_process ,
        status: jobApp.status,
        rejected: jobApp.rejected,
    } : {notes: "" , application_process: "", status: "Other", rejected: false,job_id: jobId}

    const [formData, setFormData] = useState(initialState)

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value
        })
        if (name === "rejected") {
            setFormData({...formData,[name]: event.target.checked})
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        fetch(formData)
        
    }

    const statusCategories = ["Need to Submit Application","Waiting for Response","Interviewing","Need to Complete Additional Steps", "Waiting for Final Yes/No","Deciding on Offer","Other"]
    return (
        <form onSubmit={handleSubmit} className="form-group"> 
            <input 
                type="text" 
                name="notes" 
                placeholder="Any notes"
                value={formData.notes} 
                onChange={handleChange}
                className="form-control-lg m-2"
            />
            <input 
                type="text" 
                name="application_process" 
                placeholder="Process - Ex. online, referred,etc."
                value={formData.application_process} 
                onChange={handleChange}
                className="form-control-lg m-2"
            />
            <select className="form-select-lg m-2" name="status" onChange={handleChange} value={formData.status}>
                {statusCategories.map((status) => <option key={uuidv4()} value={status}>{status}</option>)}
            </select>
            <label className="form-check-label m-2 h3" htmlFor="rejected">rejected?</label>
            <input className="m-2" type="checkbox" name="rejected" id="rejected" checked={formData.rejected} onChange={handleChange}/>
            
            <button className="btn btn-secondary btn-sm" type="submit">Save</button>
        </form>
    )
}

export default JobApplicationForm