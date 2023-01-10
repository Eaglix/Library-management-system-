import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'

const AdminNavbar = () => {
    return ( 
        <div className="adminnavbar">
            <div className="logo">
               <img src="../images/adminlogo.png" alt="" />
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/admin/" className='navlinks'>Dashboard</Link></li>
                    <li><Link to="/admin/addBooks" className='navlinks' >AddBooks</Link></li>
                    <li><Link to="/admin/adduser" className='navlinks' >AddUser</Link></li>
                    <li><Link to="/admin/booklist" className='navlinks' >BookList</Link></li>
                    <li><Link to="/admin/userlist" className='navlinks' >UserList</Link></li>
                    <li><Link to="/" className='navlinks' >Logout</Link></li>
                </ul>
            </div>

        </div>
     );
}
 
export default AdminNavbar;