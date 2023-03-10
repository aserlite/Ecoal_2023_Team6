import "./Latest.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from "axios";
import { useEffect, useState } from "react";


function Latest() {
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

                                <img className="img1" src={"http://localhost:8000" + a.thumbnailURL} alt="Logo" />
                                <h3>Billboard top song</h3>
                                <p>Hola Bonco, humpty dumpty hunky dory</p>

                            </SplideSlide>)}
                        {article.map(a =>
                            <SplideSlide>
                                <img className="img1" src={"http://localhost:8000" + a.thumbnailURL} alt="Logo" />
                                <h3>Billboard top song1</h3>
                                <p>Hola Bonco, humpty dumpty hunky dory</p>

                            </SplideSlide>)}

                    </Splide>
                </div>


            </div>
        </>
    );
}

export default Latest;