import './Article.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'



function Article(props) {

    let params = useParams()
    console.log(params.id)
    let id = params.id;

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
                {article.title}<p dangerouslySetInnerHTML={{ __html: article.content }}/>
            </div>
        </>
    );
}

export default Article;
