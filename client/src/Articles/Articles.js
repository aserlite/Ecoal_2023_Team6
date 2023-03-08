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
            <div className="allArticles">
                {article.map(a =>   <li > <h2> {a.title} </h2> <br/> <p dangerouslySetInnerHTML={{ __html: a.content }} />
                </li >)}
            </div>
        </>
    );
}

export default Articles;
