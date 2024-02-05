import React, { useState, useEffect } from 'react';

const DynamicTruncatedText = ({ text, customBreakpoints }) => {
    const [truncatedText, setTruncatedText] = useState(text);

    useEffect(() => {
        const handleResize = () => {
            if (!customBreakpoints || typeof customBreakpoints !== 'object') {
                return;
            }

            const screenWidth = window.innerWidth;

            const maxTextLength = Object.entries(customBreakpoints)
                .filter(([maxWidth, _]) => screenWidth <= parseInt(maxWidth))
                .map(([_, maxLength]) => Math.min(maxLength, text.length))
                .shift();

            if (maxTextLength < text.length) {
                setTruncatedText(`${text.slice(0, maxTextLength)}...`);
            } else {
                setTruncatedText(text);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [text, customBreakpoints]);

    return (
        <div className="dynamic-truncated-text">
            {truncatedText}
        </div>
    );
};

export default DynamicTruncatedText;
