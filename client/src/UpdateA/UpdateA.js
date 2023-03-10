import './UpdateA.css'
import axios from "axios";
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'

function UpdateA(props) {
    let params = useParams()
    let id = params.id;
    console.log(id)
    const [article, setArticle] = useState([])
    async function getArticle() {
        const article = (await axios.post('http://localhost:8000/api/single/'+id)).data
        setArticle(article)
        console.log(article)
    }
    useEffect(() => {
        getArticle()
    }, []);
    async function sendUpdate(){
        const response = (await axios.post("http://127.0.0.1:8000/api/update/"+id, article,
            {
                headers: {
                    Authorization: "Bearer " + props.cookies.td05.access_token,
                    "content-type": "multipart/form-data",
                }
            })).data;
    }
    return (
        <div className="wrapper">
            <form onSubmit={sendUpdate}>
                <input type="text" placeholder={article.title}/>
                <input type="textarea" placeholder={article.content}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default UpdateA;