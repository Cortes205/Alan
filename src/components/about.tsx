import renderHeader from "./helpers/renderHeader.tsx";
import {Fade, Slide} from "react-awesome-reveal";
import alanpic from "../assets/alan.jpg"

export default function About() {
    return (
        <>
            {renderHeader('~$ About me', 'h2', 20)}

            <Slide direction="up" duration={1500} triggerOnce={true}>
                <Fade duration={2000} triggerOnce={true}>
                    <img src={alanpic} alt="alancortes"></img>
                    <p>
                        Outside of my work and education, I love going to the gym,
                        cooking, and trying to learn languages. I speak English,
                        Spanish, some Portuguese, and am currently focusing on learning Tagalog. Languages
                        I plan to learn more of in the near future are 
                        Swedish and French; however, I would love to learn way more!
                        <br /><br />Despite my rather active and "nerdy" hobbies, I love watching 
                        movies, sports, listening to music, and playing video games when I find
                        time to do so.
                    </p>
                </Fade>
            </Slide>
        </>
    );
}