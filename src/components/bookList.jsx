import '../styles/bookList.css'
import { useEffect, useState } from "react";
import { useNavigate,useLocation } from 'react-router-dom';


const BookList = () => {
    let [books, setBooks] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:7777/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    }, [books])
    // to delete a book from server permenently
    let handleDelete = (id,title) => {
        fetch(`http://localhost:7777/books/${id}`,{
            method:'DELETE'
        })
        alert(`${title} will be deleted permenently`)
    }

    //to fetch the route value
    let location = useLocation()

    let navigate = useNavigate()
    
    let read=(id) =>{
        if(location.pathname=='/admin/booklist'){
            navigate (`/admin/booklist/${id}`)
        }else{
            navigate(`/user/booklist/${id}`)
        }
        
    }

    return (
        <div className="booklist">
            <h1>Book List</h1>
            <p>Available No Of Books: {books.length}</p>
            <div className="book_section">
                {books.map(data => (

                    <div className="books">
                        <div className="images">
                            <img src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="bookcard">
                        <h3>{data.title}</h3>
                        <h5>Authors: {data.authors}</h5>
                        <h5>Category: {data.categories}</h5>
                        <h6>PageCount: {data.pageCount}</h6>
                       
                            <button className='btn1' onClick={() => read(data.id)} >Read More</button>
                           { location.pathname == '/admin/booklist' && <button className='btn2' onClick={()=> handleDelete(data.id,data.title)}>Delete</button>}
                        </div>
                        </div>
                        
                   
                ))}
            </div>
            
        </div>
    );
}

export default BookList;