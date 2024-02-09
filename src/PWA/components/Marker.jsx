import React, { useState, useEffect, useRef } from 'react';
import {
    AdvancedMarker,
    InfoWindow,
    useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import {Link} from "react-router-dom";



const Marker = ({ index, mapZoom, project,currnetIndex,setCurrentIndex }) => {
    const [infowindowOpen, setInfowindowOpen] = useState(false);
    const [markerRef, marker] = useAdvancedMarkerRef();
    const elementRef = useRef(null);



    function convertPriceToShortFormat(price) {
        price = (Number(price) / 3.16).toFixed(0).toString()
        const suffixes = ['', 'K', 'M', 'B', 'T'];
        let suffixIndex = 0;

        while (price >= 1000 && suffixIndex < suffixes.length - 1) {
            price /= 1000;
            suffixIndex++;
        }

        if (typeof price === 'number') {
            return price.toFixed(1) + suffixes[suffixIndex];
        } else {
            return "Invalid price";
        }
    }

    return (
        <>
            {Number.isFinite(Number(project.lat)) && Number.isFinite(Number(project.lng)) && (
                <AdvancedMarker
                    className='marker'
                    ref={markerRef}
                    style={{ pointerEvents: 'auto' }}
                    position={{
                        lat: Number.parseFloat(project.lat),
                        lng: Number.parseFloat(project.lng)
                    }}
                    title={'AdvancedMarker that opens an Infowindow when clicked.'}
                    onClick={() => setCurrentIndex(index)}
                >
                    <div style={{ borderRadius: mapZoom < 13 ? 20 : 5, padding: mapZoom < 13 ? 7 : 0 }}>
                        <div ref={elementRef} style={{ display: mapZoom < 13 ? "none" : "block" }} className="price">
                            {convertPriceToShortFormat(project.priceFrom)}
                        </div>
                    </div>
                </AdvancedMarker>
            )}
            {currnetIndex===index && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={200}
                >
                    <Link to="/phone/project" state={{ project: project }} >  <div className="pop-container" >
                        <img src={project.imageSrcMain} alt="" />
                        <div className="pop-content">
                            <div>{project.projectName}</div>
                            <div>{project.developer}</div>
                        </div>
                    </div></Link>
                </InfoWindow>
            )}
        </>
    );
};

export default Marker