import { Routes,Route } from 'react-router-dom';
import AddBook from './addBooks';
import AddUser from './addUser';
import AdminDashboard from './adminDashboard';
import AdminNavbar from './adminNavbar';
import BookList from './bookList';
import ReadBook from './readBook';
import UserList from './userList';

const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                <Route path='/booklist' element={<BookList/>}/>
                <Route path='/userlist' element={<UserList/>}/>
                <Route path='/booklist/:id' element={<ReadBook/>}/>
                <Route path='/addUser' element={<AddUser/>}/>
                <Route path='/addBooks' element={<AddBook/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminHome;