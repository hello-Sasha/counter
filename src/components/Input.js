

export const Input =( {value, setValue})=>{
    
    const onChangeInput =(event)=>{
        setValue(event.target.value);
    }

    return(
        <div>
            <input value={value} onChange={onChangeInput} />
        </div>
    )
}