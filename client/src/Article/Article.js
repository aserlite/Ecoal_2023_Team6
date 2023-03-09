import './Article.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'



function Article() {

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


    return (
        <>
            <div className="article">
                <h2>{article.title}</h2><p dangerouslySetInnerHTML={{ __html: article.content }}/>
            </div>
        </>
    );
}

export default Article;
