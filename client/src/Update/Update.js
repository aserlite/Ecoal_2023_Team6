import './Update.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Update(props) {
    const navigate = useNavigate();

    const [articles, setArticles] = useState([])
    async function getArticles() {
        const articles = (await axios.post('http://localhost:8000/api/allarticle/')).data
        setArticles(articles)
    }

    async function updateArticle(e){
        navigate("/update/"+e.target.value);
    }
    useEffect(() => {
        getArticles()
    }, []);

    return (
        <div className="wrapper">
            {articles.map(a =>
                <div className="eachArticle">
                    {a.title}
                    <button value={a.id} className="toUpdate" onClick={e => updateArticle(e)}>Update</button>
                </div>
            )}
        </div>
    );
}


export default Update;