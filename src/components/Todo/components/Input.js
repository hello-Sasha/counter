

export const Input =( {value, setValue})=>{
    
    const onChangeInput =(event)=>{
        setValue(event.target.value);
    }
    const div =(e)=>{
        console.log(e.target);
    }
    return(
        <div>
            <input value={value} onChange={onChangeInput} />
            <div onClick={div}>
                test
            </div>
        </div>
    )
}