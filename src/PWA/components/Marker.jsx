
import React from 'react';
import "../styles/CustomMarker.css"
const Marker = ({price}) => {
    function convertPriceToShortFormat(price) {
        price = (price).toString()
        const suffixes = ['', 'K', 'M', 'B', 'T'];
        let suffixIndex = 0;

        while (price >= 1000 && suffixIndex < suffixes.length - 1) {
            price /= 1000;
            suffixIndex++;
        }

        return price + suffixes[suffixIndex];
    }
    return (
        <div
            className={"custom-Marker"}
        >
            {convertPriceToShortFormat(price)}
        </div>
    );
};

export default Marker;
