import renderHeader from "./helpers/renderHeader.tsx";
import {Fade, Slide} from "react-awesome-reveal";

export default function Experience() {
    const skillsOne : string[] = [
        'Communication skills', 
        'Understanding how consumers view and use technology (self-checkout terminals)'
    ];

    return(
        <>
            <section id="main">
                {renderHeader('~$ Experience', 'h2', 20)}

                <Slide direction="up" duration={1500} triggerOnce={true}>
                    <Fade duration={2000} triggerOnce={true}>
                        <p>
                            Being that I am in second year, I have
                            yet to attain on the job experience in
                            the software world. However, I have many transferable
                            skills from the non-software work experience I have, education,
                            and personal projects.
                        </p>
                    </Fade>
                </Slide>
            </section>

            <section id="jobs">
                {renderHeader('~$ Walmart Canada, Bowmanville - Cashier', 'h3', 60)}
                <Slide direction="up" duration={1500} triggerOnce={true}>
                    <Fade duration={2000} triggerOnce={true}>
                        <ul>
                            {skillsOne.map((skills) => <li className='skills' key={skills}>{skills}</li>)}
                        </ul>
                    </Fade>
                </Slide>
            </section>
        </>
    );
}