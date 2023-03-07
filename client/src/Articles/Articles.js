import './Articles.css'
import { useState, useEffect } from "react";
import axios from "axios";


function Articles() {


    const [article, setArticle] = useState([])


    async function getArticles() {
        const article = (await axios.post('http://localhost:8000/api/allarticle')).data
        setArticle(article)
        console.log(article)
    }

    useEffect(() => {
        getArticles()
    }, []);



    return (
        <>
            <h1>ok</h1>
            {article.map(a => <li > {a.title} <br/> {a.content} </li >)}
        </>
    );
}

export default Articles;
