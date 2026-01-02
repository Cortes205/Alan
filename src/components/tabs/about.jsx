import alanpic from "./img/alan.jpg"
import "./styles/about.css"

export default function About(props) {
    return (
        <>
            <div className="about-text-container">
                <p>
                    Outside of my work and education, I love going to the gym,
                    cooking delicious foods, and trying to learn languages. I speak English,
                    Spanish, some Portuguese, and am
                    trying to learn Tagalog. Languages I plan to start learning 
                    more of in the near future are Swedish, Korean, and French; however, I would love to learn way more!
                    <br />
                </p>
                <p>
                    Despite my rather active and "nerdy" hobbies, I love watching 
                    movies, sports, listening to music, and playing video games when I find
                    time to do so.
                </p>
            </div>
            <div className="about-img-container">
                <img src={alanpic} alt="alancortes"></img>
            </div>
        </>
    );
}