function RadioOption({children,org,handleRadioChange,setChecked,checked}) {
    
    return (
        <div >
            <input 
                type="radio"
                name="organization"
                required
                id={org.id}
                checked={checked === org.id} 
                value={org.id} 
                onChange={handleRadioChange} 
                onClick={() => setChecked(org.id)}
                className="align-middle"
            />
            <label htmlFor={org.id}>{children}</label>
         </div>
    )
}

export default RadioOption