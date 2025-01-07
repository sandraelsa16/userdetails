import React, { useState } from "react";

function AddUser() {

  const [adduser,setAddUser]=useState({name:"",company:"",phrase:"",bs:""})
  const postReq = (user) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({ success: true, message: "User added successfully", user });
      },1000);
    });
  };

   const handleSubmit =  async()=>{
    const {name,company,phrase,bs}=adduser
    if(!name||!company||!phrase||!bs){
      alert("Please fill the missing fields")
    }else {
        try {
          const result = await postReq(adduser)
          if(result.success){
            alert("User added successfully")
            console.log(result);
            
            setAddUser({ name: "", company: "", phrase: "", bs: "" });
          }
        } catch (error) {
           console.log(error);
           
        }
    }
   }

  return (
    <div className="container" style={{ marginTop: "60px", maxWidth: "600px" }}>
      <h1 className="text-center text-dark mb-5" style={{fontFamily:"sans-serif"}}>Add User</h1>
  
        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            Enter User Name:
          </label>
          <input
            type="text"
            required
            className="form-control"
            value={adduser.name}
            name="name"
            placeholder="Enter User Name"
            onChange={(e)=>setAddUser({...adduser,name:e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="companyName" className="form-label">
            Enter Company Name:
          </label>
          <input
            type="text"
            required
            className="form-control"
            value={adduser.company}
            name="companyName"
            placeholder="Enter Company Name"
            onChange={(e)=>setAddUser({...adduser,company:e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="catchPhrase" className="form-label">
            Enter a Catch-phrase:
          </label>
          <input
            type="text"
            required
            className="form-control"
            value={adduser.phrase}
            name="catchPhrase"
            placeholder="Enter a Catch-phrase"
            onChange={(e)=>setAddUser({...adduser,phrase:e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="businessType" className="form-label">
            Enter Type of Business:
          </label>
          <input
            type="text"
            required
            className="form-control"
            value={adduser.bs}
            name="businessType"
            placeholder="Enter Type of Business"
            onChange={(e)=>setAddUser({...adduser,bs:e.target.value})}
          />
        </div>
        <div className="text-center">
          <button onClick={handleSubmit} type="submit" className="btn btn-warning">
            Add
          </button>
        </div>
      
    </div>
  );
}

export default AddUser;
