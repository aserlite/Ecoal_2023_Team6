import "./Home.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from "axios";
import {useEffect, useState} from "react";


function Home() {
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
            <div className="content">
                <div className="slider">
                    <Splide
                        options={{
                            type: 'loop',
                            rewind: true,
                            gap: '1rem',
                        }}
                        aria-label="Some news">
                        {article.map(a =>
                            <SplideSlide>
                            <img className="img" src={"http://localhost:8000"+ a.thumbnailURL} alt="Logo" />
                        </SplideSlide>)}
                    </Splide>
                </div>
            </div>
        </>
    );
}

export default Home;