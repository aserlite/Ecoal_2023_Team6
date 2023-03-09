import './Articles.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"



function Articles() {

    const [articles, setArticles] = useState([])

    async function getArticles() {
        const articles = (await axios.post('http://localhost:8000/api/allarticle')).data
        setArticles(articles)
        console.log(articles)
    }

    useEffect(() => {
        getArticles()
    }, []);

    return (
        <>
            <div className="allArticles">
                <Link to='/article/:id'>{articles.map(a => <li> <h2> {a.title}</h2><br/><p dangerouslySetInnerHTML={{ __html: a.content }}/></li >)}</Link>
            </div>
        </>
    );
}

export default Articles;
