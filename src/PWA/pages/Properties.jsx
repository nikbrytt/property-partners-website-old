import MenuProjectFilter from "../components/MenuProjectFilter.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/Properties.css"
import Project from "../components/Project.jsx";
import projects from "../data/response.json";
import {useEffect, useState} from "react";
import {shuffle} from "lodash";
import {Link} from "react-router-dom";

const Properties = () => {

    const shuffledProjects = projects.slice(0, 10);
    const [liked, setLiked] = useState([]);
    const [visited,setVisited] = useState([]);

    useEffect(() => {
        const likedData = localStorage.getItem("liked");
        const initialLiked = likedData ? JSON.parse(likedData) : [];
        setLiked(initialLiked);
        const visitedData = localStorage.getItem("visited");
        const visitedList = visitedData ? JSON.parse(visitedData) : [];
        setVisited(visitedList);

        const handleStorageChange = () => {
            const updatedLikedData = localStorage.getItem("liked");
            const updatedLiked = updatedLikedData ? JSON.parse(updatedLikedData) : [];
            setLiked(updatedLiked);
            const visitedData = localStorage.getItem("visited");
            const visitedList = visitedData ? JSON.parse(visitedData) : [];
            setVisited(visitedList);
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);
    return(<div className={"Properties"}>
        <MenuProjectFilter/>
        <div className="project-content">

            <div className="option">
                <div className="header">
                    <div className="tittle">Popular</div>
                    <Link to={"/phone/projects"}>  <div className="see-more">See more</div></Link>
                </div>
                <div className="content">
                    {
                        shuffledProjects.map((projectData, index) => (
                            <Project projectData={projectData} key={index}/>
                        ))
                    }


                </div>
            </div>
            {visited.length>0&&<div className="option">
                <div className="header">
                    <div className="tittle">Reviewed</div>
                   <div className="see-more">See more</div>
                </div>
                <div className="content">
                    {projects.filter(project => visited.includes(project._id)).map((likedProject, index) => (
                        <Project projectData={likedProject} key={index}/>
                    ))}
                </div>
            </div>}
            {liked.length>0&&
            <div className="option">
                <div className="header">
                    <div className="tittle">Liked</div>
                    <div className="see-more">See more</div>
                </div>
                <div className="content">
                    {projects.filter(project => liked.includes(project._id)).map((likedProject, index) => (
                        <Project projectData={likedProject} key={index}/>
                    ))}
                </div>
            </div>}
        </div>

        <Footer active={"Properties"}/>
    </div>)
}
export default Properties