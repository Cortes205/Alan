import * as React from "react";
import "./styles/projects.css"
import GitHubIcon from "@mui/icons-material/GitHub";
import { Pagination, ThemeProvider, createTheme } from "@mui/material";

export default function Projects(props) {

    const pageTheme = createTheme({
        palette: {
          primary: {
            main: "#00ffaa",
          },
          text: {
            primary: "#0af0f0",
          }
        },
    });

    const maxPerPage = 6;

    const [page, setPage] = React.useState(1)

    const [visible, setVisible] = React.useState(props.repos.slice(maxPerPage * (page - 1), maxPerPage * page))

    React.useEffect(() => {
        setVisible(props.repos.slice(maxPerPage * (page - 1), maxPerPage * page));
    }, [page]);

    return (
        <>
            <div className="project-container">
                {visible.map((repo, index) => {
                    return (
                            <div key={index} className="project-card">
                                <a href={repo.html_url} target="_blank">
                                    <h2>{repo.name.replaceAll("-", " ")} <GitHubIcon className="github-icon" fontSize="small" /></h2>
                                    <p>{repo.description}</p>
                                </a>
                            </div>
                    )
                })}
            </div>
            <div className="pagination-container">
                <ThemeProvider theme={pageTheme}>
                    <Pagination 
                        page={page} 
                        onChange={(event, val) => { setPage(val) }} 
                        count={Math.ceil(props.repos.length / maxPerPage)} 
                        color="primary" 
                    />
                </ThemeProvider>
            </div>
        </>
    )
}