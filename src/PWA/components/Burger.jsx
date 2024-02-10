import React, {useRef, useState} from 'react';
import "../styles/BurgerMenu.css";


const Burger = ({menuOpen,handleMenuToggle}) => {
    const menuRef = useRef(null);
    const menuRefContent = useRef(null);
    const startXRef = useRef(null);

    const handleMenu = (event) => {
        if (event.target.classList.contains('burger-menu-menu')) {
            handleMenuToggle()
        }
    };
    const handleTouchStart = (event) => {
        startXRef.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
        if (!menuOpen) return;
        const currentX = event.touches[0].clientX;
        const diff = currentX - startXRef.current;



        menuRefContent.current.style.left = `${diff}px`;

        if (diff < -150) {
            handleMenuToggle();
        }
    };


    const handleTouchEnd = () => {
        if (menuRefContent.current) {
            menuRefContent.current.style.left = '0';
        }
    };

    return (
        <>
            {menuOpen && (
                <div className={"burger-menu-menu"} onClick={handleMenu}
                     ref={menuRef}
                     onTouchStart={handleTouchStart}
                     onTouchMove={handleTouchMove}
                     onTouchEnd={handleTouchEnd}
                >
                    <div className="burger-menu-content" ref={menuRefContent}>
                       <div className="content">
                           <div className="header">Menu</div>

                           <div className="options">
                               <div className="option">
                                    <div className="main">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z" fill="#C29773"/>
                                        </svg>
                                        Text
                                    </div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                       <path d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z" fill="#8C8C8C"/>
                                   </svg>

                               </div>
                               <div className="option">
                                   <div className="main">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                           <path d="M5 20H19V22H5V20ZM12 18C9.87827 18 7.84344 17.1571 6.34315 15.6569C4.84285 14.1566 4 12.1217 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 12.1217 19.1571 14.1566 17.6569 15.6569C16.1566 17.1571 14.1217 18 12 18Z" fill="#C29773"/>
                                       </svg>
                                       Consierge service
                                   </div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                       <path d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z" fill="#8C8C8C"/>
                                   </svg>

                               </div>
                               <div className="option">
                                   <div className="main">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                           <path d="M7.29101 20.824L2.00001 22L3.17601 16.709C2.40154 15.2604 1.99754 13.6426 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3574 22.0025 8.73963 21.5985 7.29101 20.824Z" fill="#C29773"/>
                                       </svg>
                                       Consulting service
                                   </div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                       <path d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z" fill="#8C8C8C"/>
                                   </svg>

                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            )}
        </>

)
};


export default Burger;


