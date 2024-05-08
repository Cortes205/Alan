import {TypeAnimation} from 'react-type-animation'
import {Fade, Slide} from "react-awesome-reveal";

export default function Header() {    
    return (
    <>
        <TypeAnimation
            sequence={['~$ ', '~$ My Name is Alan.']}
            wrapper="h1"
            speed={20}
            repeat={0}
            preRenderFirstString={true}
        />

        <Slide direction="up" duration={1500} triggerOnce={true}>
            <Fade duration={2000} triggerOnce={true}>
                <p id="intro">
                    I am a second year Computer Science Student at the University of Guelph who is very
                    ambitious and has great interest in development of software, websites, networks, and the cloud. 
                    I am as well pursuing a minor in Mathematics due to my great interest in its 
                    theories and methods used to complete difficult tasks.
                </p>
            </Fade>
        </Slide>
    </>
    );
}