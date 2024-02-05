import "../styles/KindProjects.css"
const KindProjects = ({tittle,text}) => {

    return(<div className={"kind-project"}>
        <div className="tittle">{tittle}</div>
        <div className="description">{text}</div>
    </div>)
}
export default KindProjects