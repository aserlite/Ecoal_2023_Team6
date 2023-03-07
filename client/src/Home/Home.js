import "./Home.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import logo from '../logo.svg';
import logo1 from '../logo.jpeg';
import '@splidejs/react-splide/css';


function Home() {

    return (
        <>
            <Splide
                options={{
                    type: 'loop',
                    rewind: true,
                    gap: '1rem',
                }}
                aria-label="Some news">

                <SplideSlide>
                    <img className="img" src={logo} alt="Logo" />
                </SplideSlide>
                <SplideSlide>
                    <img className="img" src={logo1} alt="Logo" />
                </SplideSlide>
            </Splide>

            <h1> hi </h1>

        </>
    );
}


export default Home;
