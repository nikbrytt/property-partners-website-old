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
        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/abiespana/clrmf197b005701pe3izzaypd',
                center: [lng, lat],
                zoom: zoom,
            });
            map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
        }


        const geojson = {
            type: "FeatureCollection",
            features: projects.map(project => ({
                type: "Feature",
                properties: {},
                geometry: {
                    type: "Point",
                    coordinates: [Number(project.lng), Number(project.lat)]
                }
            }))
        };

        map.current.on('load', function () {
            map.current.addSource('projects', {
                type: 'geojson',
                data: geojson,
                cluster: true,
                clusterMaxZoom: 14,
                clusterRadius: 50
            });

            map.current.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'projects',
                filter: ['has', 'point_count'],
                paint: {
                    'circle-color': [
                        'step',
                        ['get', 'point_count'],
                        '#fff',
                        100,
                        '#fff',
                        750,
                        '#fff'
                    ],
                    'circle-radius': [
                        'step',
                        ['get', 'point_count'],
                        20,
                        100,
                        30,
                        750,
                        40
                    ]
                }
            });

            map.current.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'projects',
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': '{point_count_abbreviated}',
                    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                    'text-size': 12
                }
            });

            map.current.addLayer({
                id: 'unclustered-point',
                type: 'circle',
                source: 'projects',
                filter: ['!', ['has', 'point_count']],
                paint: {
                    'circle-color': '#fff',
                    'circle-radius': 5,
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#fff'
                }
            });
        });
    }, [lng, lat, zoom, projects]);



    return(<div className={"phone-map"}>
        <MenuProject handleMenuToggle={handleMenuToggle}/>
        <div className="map" ref={mapContainer}></div>
        <Footer active={"Map"}/>
    </div>)
}
export default PhoneMap