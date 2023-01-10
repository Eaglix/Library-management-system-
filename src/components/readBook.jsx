import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
    let [book,setBook] = useState([])
    //to get route paramenter
    let params = useParams()
    useEffect(()=>{
        let fetchData = async() => {
            let response = await fetch(`http://localhost:7777/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    }
    )

    return ( 
        <div className="readbook">
            <h1>Read Book</h1>
            <h1>{book.title}</h1>
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
        </div>
     );
}
 
export default ReadBook;

