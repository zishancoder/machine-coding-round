function Profile({data,setData}){
    const {name,email} = data;
    const handleChange = (e,field) =>{
        setData(prevState => ({
            ...prevState,
            [field]:e.target.value
        }))
    }
    return <form className="form-container">
        <div>
            <label htmlFor="username">username :</label>
            <input type="text" id="username" onChange={(e)=>handleChange(e,"name")} value={name}/>
        </div>
        <div>
            <label htmlFor="email">email :</label>
            <input type="text" id="email" onChange={(e)=>handleChange(e,"email")} value={email}/>
        </div>
    </form>
}

export default Profile;