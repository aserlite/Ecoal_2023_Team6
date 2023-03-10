import "./Latest.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


function Latest() {
    const navigate = useNavigate();
    async function redirection (id){
        navigate("/article/"+id.target.value);
    }
    const [article, setArticle] = useState([])
    async function getArticles() {
        const article = (await axios.post('http://localhost:8000/api/allarticle')).data
        setArticle(article)
        let test = article.reverse()
    }
    useEffect(() => {
        getArticles()
    }, []);

    return (
        <>
            <div className="content">


                <h2>Latest Posts</h2>


                <div className="LatestPost">
                    <Splide
                        options={{
                            type: 'loop',
                            rewind: true,
                            gap: '1rem',

                        }}
                        aria-label="Some news">
                        {article.map(a =>
                            <SplideSlide>

                                <img className="thumbnail" src={"http://localhost:8000" + a.thumbnailURL} alt="Logo" />
                                <h3>{a.title}</h3>
                                <p>{a.content.substring(0,100)+"..."}</p>
                                <div className="testButton">
                                    <button value={a.id} className="redirect" onClick={e => redirection(e)}>Read More</button>
                                </div>
                            </SplideSlide>)}
                    </Splide>
                </div>


            </div>
        </>
    );
}

export default Latest;