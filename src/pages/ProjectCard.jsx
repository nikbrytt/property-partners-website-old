import Header from "../components/Header.jsx";
import Feedback from "../components/Feedback.jsx";
import "../styles/projectCard.css"
import card1 from "../assets/card/card1.jpg";
import card2 from "../assets/card/card2.png";
import card3 from "../assets/card/card3.jpg";
import card4 from "../assets/card/card4.png";
import card5 from "../assets/card/card5.jpg";
const ProjectCard = () => {

    return(<div className={"project-card"}>
        <Header/>
        <Feedback/>
        <div className="content">
            <div className="navigation">
                <div className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 13V20L4 12L12 4V11H20V13H12Z" fill="white"/>
                    </svg>
                    Back
                </div>
                <div className="link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.5762 17.2706L8.4662 14.4836C7.97569 14.9705 7.35201 15.3013 6.67379 15.4342C5.99557 15.5672 5.29316 15.4964 4.65513 15.2307C4.01709 14.9651 3.47199 14.5164 3.08855 13.9414C2.70511 13.3664 2.50049 12.6908 2.50049 11.9996C2.50049 11.3085 2.70511 10.6328 3.08855 10.0578C3.47199 9.4828 4.01709 9.03419 4.65513 8.76852C5.29316 8.50286 5.99557 8.43204 6.67379 8.56499C7.35201 8.69795 7.97569 9.02873 8.4662 9.51562L13.5762 6.72862C13.4009 5.90636 13.5275 5.04848 13.9328 4.31188C14.3381 3.57527 14.9949 3.00915 15.7833 2.71706C16.5717 2.42496 17.4388 2.4264 18.2262 2.72111C19.0136 3.01582 19.6686 3.58411 20.0714 4.32206C20.4742 5.06001 20.598 5.9183 20.42 6.73998C20.242 7.56165 19.7742 8.29181 19.1021 8.79692C18.43 9.30204 17.5986 9.54835 16.7598 9.49082C15.9211 9.43329 15.131 9.07577 14.5342 8.48362L9.4242 11.2706C9.52613 11.7513 9.52613 12.248 9.4242 12.7286L14.5342 15.5156C15.131 14.9235 15.9211 14.566 16.7598 14.5084C17.5986 14.4509 18.43 14.6972 19.1021 15.2023C19.7742 15.7074 20.242 16.4376 20.42 17.2593C20.598 18.0809 20.4742 18.9392 20.0714 19.6772C19.6686 20.4151 19.0136 20.9834 18.2262 21.2781C17.4388 21.5728 16.5717 21.5743 15.7833 21.2822C14.9949 20.9901 14.3381 20.424 13.9328 19.6874C13.5275 18.9508 13.4009 18.0929 13.5762 17.2706Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <div className="images-container">

                <div className="main-image"><img src={card1}/></div>
                <div className="more">
                    <div className="button">
                        <div>Show More</div>
                        <div className={"show-more-text"}>+6 photos</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.1722 11.9997L8.22217 7.04974L9.63617 5.63574L16.0002 11.9997L9.63617 18.3637L8.22217 16.9497L13.1722 11.9997Z" fill="black"/>
                        </svg>

                    </div>
                </div>
                <div className={"images"}><img src={card2}/> </div>
                <div className={"images"}> <img src={card3}/></div>
                <div className={"images"}><img src={card2}/> </div>
                <div className={"images"}> <img src={card2}/></div>

            </div>
        </div>
    </div>)
}
export default ProjectCard