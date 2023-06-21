import './Search.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


function Search() {

    const [search, setSearch] = useState("")
    const [article, setArticle] = useState([])

    useEffect(() => {
        (async () => await searchArticle())()
    }, [search]);

    async function searchArticle() {
        const article = (await axios.post('http://localhost:8000/api/byTitle/' + search)).data
        setArticle(article)
    }




    const [choice, updateChoice] = useState('title')

    function tagChoice() {
        updateChoice('tags')
    }

    function resetChoice() {
        updateChoice('title')
    }







    const [value, setValue] = useState("react")
    const [articletag, setArticleTag] = useState([])

    useEffect(() => {
        (async () => await filterTag())()
    }, [value]);

    async function filterTag(tag) {
        const articletag = (await axios.post('http://localhost:8000/api/bytag/' + tag)).data
        setArticleTag(articletag)
    }

    function handleChange(e,label){
        filterTag(e.target.value);
    }
    return (
        <>
            <h1>Search by</h1>
            <div className="buttons_bar_search">
                <button onClick={resetChoice}> Title </button>
                <button onClick={tagChoice}> Tags </button>
            </div>

            {choice === "title" ?
                <> <label for="site-search">Search the site:</label>
                    <input type="search" id="site-search" name="searchbar" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <div className="results">
                    {article.map(a => <li className='list'> <Link to={'/article/' + a.id}> <h1 className='searchtitle'> {a.title} </h1>
                        <br /> <p dangerouslySetInnerHTML={{ __html: a.content.substring(0,200)+"..." }} /> </Link> </li >

                    )} </div> </>
                :
                <> <label for="music-select">Type of music:</label>
                    <select name="music" id="music-select" onChange={handleChange}>
                        <option value=""> Please choose a music </option>
                        <option value="jazz">Jazz</option>
                        <option value="pop">Pop</option>
                        <option value="rock">Rock</option>
                        <option value="rap">Rap</option>
                    </select>
                    <div className  ="results">
                    {articletag.map(a => <li className='list'> <Link to={'/article/' + a.id}> <h1 className='searchtitle'> {a.title}  </h1>
                        <br /> <p dangerouslySetInnerHTML={{ __html: a.content.substring(0,200)+"..." }} /> </Link> </li >)}
                    </div>
                </>}
        </>
    );
}

export default Search;