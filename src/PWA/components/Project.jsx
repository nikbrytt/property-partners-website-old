import "../styles/Project.css"
import collection1 from "../../assets/collection1.jpg"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
const Project = ({projectData}) => {
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
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    function formatNumberWithCommas(value) {
        value = (Number(value) / 3.16).toFixed(0).toString()
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const handleProjectClick = () => {
        if (visited.indexOf(projectData._id) === -1) {
            const visitedData = localStorage.getItem("visited");
            const visitedList = visitedData ? JSON.parse(visitedData) : [];
            visitedList.push(projectData._id);
            localStorage.setItem("visited", JSON.stringify(visitedList));
            window.dispatchEvent(new Event("storage"));
        }
    };

    const handleLikeClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const likedData = localStorage.getItem("liked");
        let updatedLiked = likedData ? JSON.parse(likedData) : [];

        const index = updatedLiked.findIndex((item) => item === projectData._id);

        if (index !== -1) {
            updatedLiked = updatedLiked.filter((item) => item !== projectData._id);
        } else {
            updatedLiked.push(projectData._id);
        }

        localStorage.setItem("liked", JSON.stringify(updatedLiked));
        window.dispatchEvent(new Event("storage"));
    };
    return(<div className={"project"} onClick={handleProjectClick}>
        <Link to="/phone/project/1" state={{ project: projectData }} >
        <div className="image">
            <img src={projectData.imageSrcMain}/>
            <div className="like" onClick={handleLikeClick}>
                {liked.includes(projectData._id)?
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.46572C9.00067 0.839279 5.65975 0.027595 3.1547 2.43263C0.649644 4.83766 0.296966 8.85871 2.2642 11.7032C3.89982 14.0681 8.84978 19.056 10.4721 20.6704C10.6536 20.8511 10.7443 20.9414 10.8502 20.9768C10.9426 21.0077 11.0437 21.0077 11.1361 20.9768C11.242 20.9414 11.3327 20.8511 11.5142 20.6704C13.1366 19.056 18.0865 14.0681 19.7221 11.7032C21.6894 8.85871 21.3797 4.81236 18.8316 2.43263C16.2835 0.0528947 12.9993 0.839279 11 3.46572Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>:
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.46572C9.00067 0.839279 5.65975 0.027595 3.1547 2.43263C0.649644 4.83766 0.296966 8.85871 2.2642 11.7032C3.89982 14.0681 8.84978 19.056 10.4721 20.6704C10.6536 20.8511 10.7443 20.9414 10.8502 20.9768C10.9426 21.0077 11.0437 21.0077 11.1361 20.9768C11.242 20.9414 11.3327 20.8511 11.5142 20.6704C13.1366 19.056 18.0865 14.0681 19.7221 11.7032C21.6894 8.85871 21.3797 4.81236 18.8316 2.43263C16.2835 0.0528947 12.9993 0.839279 11 3.46572Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                }

            </div>
            <div className="info">
                <div className="data">4 bdrm</div>
                <div className="data">483 USD</div>
                <div className="data">3,260 sq.ft</div>
            </div>
        </div>
        <div className="information">
            <div className="name">  {projectData.projectName.length > 20 ?
                projectData.projectName.slice(0, 19) + '...' :
                projectData.projectName
            }</div>
            <div className="location">{projectData.selectedLocation||projectData.ownLocation}</div>
            <div className="price">From <span>${formatNumberWithCommas(projectData.priceFrom)}</span></div>
        </div>
        </Link>
    </div>)
}
export default Project;