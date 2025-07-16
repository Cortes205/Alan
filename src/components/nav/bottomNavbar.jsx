import {ThemeProvider, Tab, Tabs} from '@mui/material'
import './styles/bottomNavbar.css'

export default function BottomNavBar(props) {
    return (
        <div id="bottom-nav">
            <ThemeProvider theme={props.navTheme}>
                <Tabs  
					value={props.currTab} 
					onChange={(event, val) => props.setTab(val)}>
                    {Object.keys(props.tabs).map((tab, index) => {
                        return <Tab key={index} value={tab} icon={props.tabs[tab].icon} />
                    })}
				</Tabs>
            </ThemeProvider>
        </div>
    )
}