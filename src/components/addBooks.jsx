import '../styles/addBooks.css'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const AddBook = () => {
    //title,pageCount,shortDescription,longDescription,thumbnailUrl,authors,categories
    let [title,seTitle] = useState("")
    let [authors,setAuthors] = useState("")
    let [categories,setcategories] = useState("")
    let [pageCount,setPageCount] = useState("")
    let [shortDescription,setshortDescription] = useState("")
    let[longDescription,setlongDescription] = useState("")
    let [thumbnailUrl,setthumbnailUrl] = useState("")

    let navigate=useNavigate()

    let handleSubmit =(e) =>{
        e.preventDefault();
        //data to be posted
        let bookData ={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
        //posting to server
       
        fetch(' http://localhost:7777/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('Book added Succesfully')
        navigate('/admin/booklist')
    }
    return ( 
        <div className="addbook">
            <h1>Add a Book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>seTitle(e.target.value)} type="text" required placeholder="Title Of The Book" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e)=>setAuthors(e.target.value)} type="text" required placeholder="Author Of The Book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e)=>setcategories(e.target.value)} type="text" required placeholder="Category Of The Book" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e)=>setPageCount(e.target.value)} type="number" required placeholder="PageCount Of The Book" />
                    </div>
                    <div className="shortDescription">
                       <textarea value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)}  required placeholder="Short Description Of The Book" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(e)=>setlongDescription(e.target.value)} required placeholder="Long Description Of The Book" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} type="text"  placeholder="URL of The Image" />
                    </div>
                    
                    <button id='btnnn'>Add Book</button>
                
                    
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;