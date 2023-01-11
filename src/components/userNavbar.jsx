import { Link } from "react-router-dom";
import '../styles/userNavbar.css'

const UserNavbar = () => {
    return ( 
        <div className="usernavbar">
             <div className="logo">
               <img src="../images/adminlogo.png" alt="" />
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/user/" className='navlinks'>Dashboard</Link></li>
                   
                    <li><Link to="/user/booklist" className='navlinks' >BookList</Link></li>
                   
                    <li><Link to="/" className='navlinks' >Logout</Link></li>
                </ul>
            </div>

        </div>
     );
}
 
export default UserNavbar;