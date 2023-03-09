import './About.css'
import './AboutRythm.jpg'

function About() {

    return (
        <>
            <div className="AboutText">
                <h1>About Us</h1>
                <p>Welcome to our music newspaper, your go-to source for all the latest news and updates from the world of music. We are dedicated to providing you with timely and accurate coverage of the music industry, from breaking news to in-depth features and interviews with your favorite artists.</p>
                <img src={require('./AboutRythm.jpg')} width="75%" height="75%" />
                <p>Our team of experienced music journalists and critics are passionate about music, and we strive to provide our readers with insightful commentary and analysis on the latest releases, trends, and controversies in the music world.</p>
                <p>Whether you're a fan of rock, pop, hip-hop, country, or any other genre, we have you covered.</p>
                <p>Our mission is to be a trusted and reliable source of information for music fans everywhere. We value your feedback and encourage you to reach out to us with any questions, comments, or suggestions. Thank you for choosing our music newspaper as your source for all things music.</p>
                <p>Thank you for choosing our music newspaper as your source for all things music.</p>
            </div>
        </>
    );
}

export default About;