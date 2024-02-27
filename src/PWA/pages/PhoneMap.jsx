"use client";
import "../styles/Map.css"
import MenuProject from "../components/MenuProject.jsx";
import Footer from "../components/Footer.jsx";
import {APIProvider, ControlPosition, MapControl,Map} from "@vis.gl/react-google-maps";
import React, {useEffect, useRef, useState} from "react";
import projects from "../data/response.json"
import Project from "../../components/Project.jsx";
import {createRoot} from "react-dom/client";

import mapboxgl from "mapbox-gl";
import Marker from "../components/Marker.jsx";

mapboxgl.accessToken =
    'pk.eyJ1IjoiYWJpZXNwYW5hIiwiYSI6ImNscG8xcWE1MzBvMmgycXA2bWxvbHFuNWYifQ.RXtCxiR0GiE_k-EDiQiRWA';
const PhoneMap = ({handleMenuToggle}) => {

    const mapContainer = useRef(null);

    const map = useRef(null);
    const [lng, setLng] = useState(55.226249);
    const [lat, setLat] = useState(25.246757);
    const [zoom, setZoom] = useState(10);
    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/abiespana/clrmf197b005701pe3izzaypd',
            center: [lng, lat],
            zoom: zoom,
        });
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }, []);
    useEffect(() => {
        if(projects!=null ) {
            projects.map((project) => {
                const markerElement = document.createElement('div');
                createRoot(markerElement).render(<Marker price={project.priceFrom}/>);

                const marker = new mapboxgl.Marker(markerElement).setLngLat([Number(project.lng), Number(project.lat)]);

                marker.addTo(map.current);

            });
        }
    }, [projects]);
    useEffect(() => {

    }, []);

    return(<div className={"phone-map"}>
        <MenuProject handleMenuToggle={handleMenuToggle}/>
        <div className="map" ref={mapContainer}>
        </div>
        <Footer active={"Map"}/>
    </div>)
}
export default PhoneMap