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
        console.log(article)
    }

    const [choice, updateChoice] = useState('title')

    function tagChoice() {
        updateChoice('tags')
    }

    function resetChoice() {
        updateChoice('title')
    }


    let test = article.map(a => a.tags)
    console.log(test[0])

    return (
        <>
            <h1>Search by:</h1>
            <div class="row">
                <div class="column1"><button onClick={resetChoice}> Title </button></div>

                <div class="column2"> <button onClick={tagChoice}> Tags </button></div>
            </div>

            {choice == "title" ?
                <> <label for="site-search">Search Articles:</label>
                     <div class="row"></div><input type="search" id="site-search" name="searchbar" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button>Search</button> </>
                :
                <> <label for="music-select">Type of Music:</label>
                    <select name="music" id="music-select">
                        <option value=""> Please choose a music genre </option>
                        <option value="jazz">Jazz</option>
                        <option value="pop">Pop</option>
                        <option value="rock">Rock</option>
                        <option value="rap">Rap</option>
                    </select>
                </>}


            {article.map(a => <li > <Link to={'/article/' + a.id}> <h2> {a.title} </h2> <br /> <p dangerouslySetInnerHTML={{ __html: a.content }} /> </Link> </li >)}

        </>
    );
}

export default Search;