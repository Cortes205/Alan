import * as React from "react"
import {ThemeProvider, Tabs, Tab} from "@mui/material"
import "./styles/experience.css"

export default function Experience(props) {

    const [currentExperience, setExperience] = React.useState(0);

    const experience = [
        {
            company: "Schooley Mitchell", 
            title: "Software Developer", 
            dates: [
                "January 2026 - Present (Part Time)",
                "April 2025 - December 2025 (Internship, Full Time)"
            ],
            description: [
                "Full Stack Development using Vue.js, PHP (Laravel), and SQL",
                "Assist in maintaining Schooley Mitchell's employee and client websites",
                "Work on new features, pages, and fix bugs as requested by head office and franchisees",
                "Create unit tests for back end services",
            ],
        },
    ];

    return (
        <>
            <div className="side-experience-nav">
                <ThemeProvider theme={props.navTheme}>
                    <Tabs orientation="vertical" value={currentExperience} onChange={(event, val) => setExperience(val)}>
                        {experience.map((exp, index) => {
                            return <Tab key={index} label={exp.company}></Tab>
                        })}
                    </Tabs>
                </ThemeProvider>
            </div>
            <div className="experience-container">
                <h2>{experience[currentExperience].title} @ {experience[currentExperience].company}</h2>
                <div className="experience-dates">
                    {experience[currentExperience].dates.map((date, index) => {
                        return <p key={index}>{date}</p>
                    })}
                </div>
                <ul className="experience-list">
                    {experience[currentExperience].description.map((desc, index) => {
                        return <li key={index}>{desc}</li>
                    })}
                </ul>

            </div>
        </>
    )
}