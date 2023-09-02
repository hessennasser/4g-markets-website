import img from "../assets/Roadmap.png"
const RoadMap = () => {
    return (
        <section className="start container" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src={img} alt="Road map" style={{ width: "80%" }} />
        </section>
    )
}

export default RoadMap
