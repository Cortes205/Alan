import {Link} from 'react-scroll'

export default function Nav() {
    const navOptions : string[] = [
        'Home',
        'About',
        'Experience',
        'Projects'
    ];

    const idNames : string[] = [
        'home',
        'aboutSection',
        'experienceSection',
        'projectSection'
    ];

    return (
        <>
            <ul id="navbar">
                {navOptions.map((opts, index) =>
                    <li key={opts}>
                        <Link to={idNames[index]} smooth={true} duration={250}>{opts}</Link>
                    </li>
                )}
            </ul>

            {/* <ul id="socials">
                <li>hello</li>
            </ul> */}
        </>
    );
}