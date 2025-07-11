import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, Snackbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Fade, Slide } from 'react-awesome-reveal';
import './styles/index.css';
import TopNavbar from './components/nav/topNavbar.jsx';
import BottomNavBar from './components/nav/bottomNavbar.jsx';
import Home from './components/tabs/home.jsx';
import About from './components/tabs/about.jsx';
import Experience from './components/tabs/experience.jsx';
import Projects from './components/tabs/projects.jsx';
import renderHeader from './components/render/header.jsx';

function renderMain(repos, error) {
	createRoot(document.getElementById('root')).render(
		<StrictMode>
			<MainComponent repos={repos} error={error} />
		</StrictMode>,
	)
}

function MainComponent(args) {

	const [repos, setRepos] = React.useState(args.repos)
	const [openMsg, setOpenMsg] = React.useState(args.error);

	const navTheme = createTheme({
		palette: {
			primary: {
				main: '#00ffaa',
			},
			text: {
				secondary: '#0af0f0',
			}
		},
	});

	const tabs = {
		Home: {
			ref: React.useRef(null),
			component: (key) => { return <Home key={key} /> },
			icon: <HomeIcon />,
		},
		About: {
			ref: React.useRef(null),
			component: (key) => { return <About key={key} /> },
			icon: <AccountBoxIcon />,
		},
		Experience: {
			ref: React.useRef(null),
			component: (key) => { return <Experience key={key} navTheme={navTheme} /> },
			icon: <WorkIcon />,
		},
		Projects: {
			ref: React.useRef(null),
			component: (key) => { return <Projects key={key} repos={repos} /> },
			icon: <AccountTreeIcon />,
		},
	};

	const [currTab, setTab] = React.useState("Home");

	React.useEffect(() => {
		tabs[currTab]?.ref.current?.scrollIntoView({ behavior: 'smooth' })
	}, [currTab]);

	return (
		<>
			<TopNavbar tabs={tabs} currTab={currTab} setTab={setTab} navTheme={navTheme} />

			{/* Render all tab components */}
			{Object.keys(tabs).map((tab, index) => {
				return (
					<div className='section-container'>
						<div ref={tabs[tab].ref} className="section-top"></div>
						{renderHeader(((tab !== "Home") ? `~$ ${tab}` : "~$ My name is Alan"), (tab !== "Home") ? "h2" : "h1", 20)}
						<div id={tab}>
							<Slide direction="up" duration={1500} triggerOnce={true}>
								<Fade duration={2000} triggerOnce={true}>
									{tabs[tab].component(index)}
								</Fade>
							</Slide>
						</div>
					</div>
				)
			})}

			<div className='footer'>
				<p>
					Built and Designed by Alan Cortes.<br />
					All Rights Reserved. ©<br />
					Contact: <a id="mail" href="mailto:cortalan2005@gmail.com">cortalan2005@gmail.com</a>
				</p>
			</div>

			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				open={openMsg}
				autoHideDuration={5000}
				onClose={() => setOpenMsg(false)}
				message="Note: Projects failed to load from GitHub"
			/>

			<BottomNavBar tabs={tabs} currTab={currTab} setTab={setTab} navTheme={navTheme} />
		</>
	)
}

let repos = []
let hide = [
	"Cortes205",
	"Alan",
	"Distance-Around-the-World",
]
let error = false

fetch('https://api.github.com/users/Cortes205/repos')
	.then(res => {
		res.json().then(res => {
			repos = res
				.filter(repo => !hide.includes(repo.name))
				.sort((a, b) => (Date(a.created_at) < Date(b.created_at)) ? -1 : 1)
			renderMain(repos, error)
		}, err => {
			error = true
			renderMain(repos, error)
		})
	}, err => {
		error = true
		renderMain(repos, error)
	})


