import MenuProjectFilter from "../components/MenuProjectFilter.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/Projects.css"
import ProjectBig from "../components/ProjectBig.jsx";
const Projects = () => {

    return(<div className={"projects"}>
        <MenuProjectFilter/>
        <div className="projects-data">
            <div className="tittle">All page</div>
            <div className="content">
                <ProjectBig/>
            </div>
        </div>
        <Footer active={"Properties"}/>
    </div>)
}
export default Projects