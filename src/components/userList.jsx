import { useState,useEffect } from "react";
import '../styles/userList.css'

const UserList = () => {
    let [users,setUser] = useState([])

    useEffect(()=>{
        let fetchData = async()=>{
            let response = await fetch(' http://localhost:7777/users')
            let data = await response.json()
            setUser(data)
        }
        fetchData()
    },[])
    let handleDelete =(id,name)=>{
        setUser( users.filter( x=> x.id != id))
        alert(`${name} has been deleted`)
    }

    return ( 
        <div className="userlist">
            <h1>User List: {users.length}</h1>
            
            <div className="user_section">
                { users.map( data =>(
                   <div className="usercard">
                        <h3>{data.name}</h3>
                        <h5>Email id: {data.email}</h5>
                        <h5>Age: {data.age}</h5>
                        <h6>Phonenumber: {data.phonenumber}</h6>
                        <button onClick={ () => handleDelete(data.id,data.name)}>Delete</button>
                   </div> 
                ))}
            </div>
        </div>
     );
}
 
export default UserList;