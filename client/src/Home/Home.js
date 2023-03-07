import "./Home.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import logo from '../logo.svg';
import logo1 from '../logo.jpeg';
import '@splidejs/react-splide/css';


function Home() {

    return (
        <>
            <h1> hi </h1>
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <img className="logo" src={logo} alt="Logo" />
                </SplideSlide>
                <SplideSlide>
                    <img className="logo" src={logo1} alt="Logo" />
                </SplideSlide>
            </Splide>
        </>
    );
}


export default Home;
