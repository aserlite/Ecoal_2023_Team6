import './Delete.css'
import axios from "axios";
import {useEffect, useState} from "react";

function Delete(props) {
    const [articles, setArticles] = useState([])
    async function getArticles() {
        const articles = (await axios.post('http://localhost:8000/api/allarticle/')).data
        setArticles(articles)
    }

    async function deleteArticle(e){
        console.log(props.cookies.td05.access_token)
        console.log(e.target.value)
        const deleted = (await axios.delete("http://127.0.0.1:8000/api/delete/"+e.target.value,
            {
                headers: {
                    "Authorization": "Bearer " + props.cookies.td05.access_token,
                }
            })).data;
        getArticles();
    }
    useEffect(() => {
        getArticles()
    }, []);

    return (
        <div className="wrapper">
            {articles.map(a =>
                <div className="eachArticle">
                    {a.title}
                    <button value={a.id} className="todelete" onClick={e => deleteArticle(e)}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default Delete;