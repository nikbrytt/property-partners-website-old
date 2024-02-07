import "../styles/Collection.css"
const Collection = ({img,type,projects,price}) => {

    return(<div className={"collection"}>
        <div className="image-container">
            <img src={img}/>
        </div>
        <div className="information">
            <div className="general">
                <div className="main">
                    <div className="type">{type}</div>
                    <div className="project-count">{projects} projects</div>
                </div>

                <div className="price"><span>from</span> {price}</div>
            </div>
            <div className="next">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.1722 12.0002L8.22217 7.05023L9.63617 5.63623L16.0002 12.0002L9.63617 18.3642L8.22217 16.9502L13.1722 12.0002Z" fill="white"/>
                    </svg>
                </div>
               </div>
        </div>
    </div>)
}
export default Collection