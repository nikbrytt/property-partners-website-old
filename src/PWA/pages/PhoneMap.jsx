"use client";
import "../styles/Map.css"
import MenuProject from "../components/MenuProject.jsx";
import Footer from "../components/Footer.jsx";
import {APIProvider, ControlPosition, MapControl,Map} from "@vis.gl/react-google-maps";
import React, {useState} from "react";
import projects from "../data/response.json"
import Project from "../../components/Project.jsx";
import Marker from "../../components/Marker.jsx";
const PhoneMap = () => {
    const [mapZoom, setMapZoom] = useState(10);
    const [currnetIndex, setCurrentIndex] = useState(null)

    return(<div className={"phone-map"}>
        <MenuProject/>
        <div className="map">
            <APIProvider apiKey={"AIzaSyAbaX7Vb6ERFTrWR4espV48g25lFRGGjIc"}>
                <Map
                    zoom={10}
                    center={{
                        lat: 25.152033492170037,
                        lng: 55.32550889425454,
                    }}
                    mapId={"eafda8fe79279394"}
                    fullscreenControl={true}
                    onZoomChanged={ev => {
                        setMapZoom(ev.detail.zoom);
                        setCurrentIndex(null)
                    }}
                    onClick={event => {
                        setCurrentIndex(null)
                    }}
                >

                    <MapControl position={ControlPosition.TOP_LEFT}>

                    </MapControl>
                    {projects.map((marker, index) => (
                        <Marker key={index}
                                index={index}
                                mapZoom={mapZoom}
                                project={marker}
                                currnetIndex={currnetIndex}
                                setCurrentIndex={setCurrentIndex}
                        />
                    ))}

                </Map>
            </APIProvider>

        </div>
        <Footer active={"Map"}/>
    </div>)
}
export default PhoneMap