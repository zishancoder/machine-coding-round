function Settings({data,setData}){
    const {theme} = data;
    const handleChange = (e) =>{
        setData(prevState => ({
            ...prevState,
            theme:e.target.id
        }))
    }
    return <form className="form-container">
        <div>
            <input type="radio" id="dark" name="theme" onChange={handleChange} checked={theme=="dark"}/>
            <label htmlFor="dark">dark</label>
        </div>
        <div>
            <input type="radio" id="light" name="theme" onChange={handleChange} checked={theme=="light"}/>
            <label htmlFor="light">light</label>
        </div>
    </form>
}


export default Settings;