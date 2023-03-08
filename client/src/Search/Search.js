import './Search.css'
import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    const [search,setSearch]=useState("")
    const [article, setArticle] = useState([])

    useEffect(() => {
        (async()=>await searchArticle())()
    }, [search]);

    async function searchArticle(){
        const article = (await axios.post('http://localhost:8000/api/byTitle/'+search)).data
        console.log("==",article)
        setArticle(article)
    }
    return (
        <>
            <label for="site-search">Search the site:</label>
            <input type="search" id="site-search" name="searchbar" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button>Search</button>
            {article.map(a => <li > {a.title} <br/> <p dangerouslySetInnerHTML={{ __html: a.content }} /> </li >)}
        </>
        );
}

export default Search;
