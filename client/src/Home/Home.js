import "./Home.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from "axios";
import { useEffect, useState } from "react";


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
                                <h3>Billboard top song</h3>
                                <img className="img" src={"http://localhost:8000" + a.thumbnailURL} alt="Logo" />

                                <p>Hola Bonco, humpty dumpty hunky dory</p>
                                <div className="testButton">
                                    <button type="button" >Read More</button>
                                </div>
                            </SplideSlide>)}

                        {article.map(a =>
                            <SplideSlide>
                                <h3>Billboard song 2 </h3>
                                <img className="img" src={"http://localhost:8000" + a.thumbnailURL} alt="Logo" />
                                <p>Hola Bonco, humpty dumpty hunky dory cracker tork</p>

                                <div className="testButton">
                                    <button value={a.id} className="redirect" onClick={e => redirection(e)}>Read More</button>
                                </div>
                            </SplideSlide>)}

                    </Splide>
                </div>

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

export default Home;