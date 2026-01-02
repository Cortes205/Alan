import {ThemeProvider, Tab, Tabs} from "@mui/material"
import "./styles/topNavbar.css"

export default function TopNavbar(props) {
	return (
		<div id="top-nav">
			<ThemeProvider theme={props.navTheme}>
				<Tabs  
					value={props.currTab} 
					onChange={(event, val) => props.setTab(val)}>
					{Object.keys(props.tabs).map((tab, index) => {
						return <Tab key={index} value={tab} label={props.tabs[tab].title} />
					})}
				</Tabs>
			</ThemeProvider>
		</div>
	)
}
