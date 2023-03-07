import './Search.css'
import { useState, useEffect } from "react";
import axios from "axios";

function Search() {

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
            <label for="site-search">Search the site:</label>
            <input type="search" id="site-search" name="searchbar"/>
            <button>Search</button>
            {article.map(a => <li > {a.title} <br/> <p dangerouslySetInnerHTML={{ __html: a.content }} /> </li >)}        
        </>
        );
}

export default Search;