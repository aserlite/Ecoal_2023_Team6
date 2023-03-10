import './Articles.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'


function Articles(props) {

    let params = useParams()
    let id = params.id;

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
                {articles.map(a => <li > <Link to={'/article/' + a.id}>
                    <div className='articles'>
                        <img className="artthumbnail" src={"http://localhost:8000" + a.thumbnailURL} alt="Logo" />
                        <h2 className='title'> {a.title} </h2> 
                    </div> </Link> </li >)}
            </div>
        </>
    );
}

export default Articles;
