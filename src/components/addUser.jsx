import { useState } from "react";
import '../styles/addUser.css'
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let [name,setName] = useState("")
    let [age,setAge] = useState("")
    let [email,setEmail] = useState("")
    let [phoneNumber,setPhoneNumber] = useState("")

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();

        let userData ={name,age,email,phoneNumber}
        //posting to server
        fetch('  http://localhost:7777/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('user added Succesfully')
        navigate('/admin/userlist')
    }
    return ( 
        <div className="adduser">
           <h1>Add a New User</h1>
           <div className="forms">
           <form action="" onSubmit={handleSubmit}>
            <div className="name">
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Your Name" />
            </div>
            <div className="age">
                <input value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter Your Age" />
            </div>
            <div className="email">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
            </div>
            <div className="phnumber">
                <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="number" minLength='10' maxLength='10' placeholder="Enter Your Phonenumber" />
            </div>
            <button id="btnn">Add User</button>
            </form>
           </div>
        </div>
     );
}
 
export default AddUser;