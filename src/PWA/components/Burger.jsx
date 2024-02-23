import React, {useRef, useState} from 'react';
import "../styles/BurgerMenu.css";
import {Link} from "react-router-dom";


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



        if (diff < 0) {
            menuRefContent.current.style.left = `${diff}px`;
        }

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
                               <Link onClick={() => handleMenuToggle()} to="/phone/about-us" className="option">
                                   <div className="main">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                           <path
                                               d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"
                                               fill="#C29773"/>
                                       </svg>
                                       About us
                                   </div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                   <path
                                           d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z"
                                           fill="#8C8C8C"/>
                                   </svg>

                               </Link>
                               <Link onClick={() => handleMenuToggle()} to="/" className="option">
                                   <div className="main">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                           <path
                                               d="M21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8947 20.2652 21 20 21H4C3.73478 21 3.48043 20.8947 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V9.49003C2.99989 9.33764 3.03462 9.18724 3.10152 9.05033C3.16841 8.91341 3.26572 8.79359 3.386 8.70003L11.386 2.47803C11.5615 2.34147 11.7776 2.26733 12 2.26733C12.2224 2.26733 12.4385 2.34147 12.614 2.47803L20.614 8.70003C20.7343 8.79359 20.8316 8.91341 20.8985 9.05033C20.9654 9.18724 21.0001 9.33764 21 9.49003V20ZM19 19V9.97803L12 4.53403L5 9.97803V19H19ZM7 15H17V17H7V15Z"
                                               fill="#C29773"/>
                                       </svg>
                                       Main page
                                   </div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                       <path
                                           d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z"
                                           fill="#8C8C8C"/>
                                   </svg>

                               </Link>
                               <Link onClick={() => handleMenuToggle()} to="/phone/properties" className="option">
                                   <div className="main">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                           <path
                                               d="M3 19V5.70002C2.99994 5.49474 3.06305 5.29442 3.18077 5.12625C3.29849 4.95809 3.4651 4.83022 3.658 4.76002L13.329 1.24402C13.4045 1.21652 13.4856 1.20765 13.5653 1.21815C13.645 1.22865 13.721 1.25822 13.7869 1.30434C13.8527 1.35046 13.9065 1.41178 13.9436 1.4831C13.9807 1.55441 14 1.63363 14 1.71402V6.66702L20.316 8.77202C20.5152 8.83837 20.6885 8.96573 20.8112 9.13607C20.934 9.3064 21.0001 9.51105 21 9.72102V19H23V21H1V19H3ZM5 19H12V3.85502L5 6.40102V19ZM19 19V10.442L14 8.77502V19H19Z"
                                               fill="#C29773"/>
                                       </svg>
                                       Properties
                                   </div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                       <path
                                           d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z"
                                           fill="#8C8C8C"/>
                                   </svg>

                               </Link>
                               <Link  onClick={() => handleMenuToggle()} to="/phone/map" className="option">
                                   <div className="main">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                           <path
                                               d="M4 6.14301V18.967L9.065 16.797L15.065 19.797L20 17.68V4.85701L21.303 4.29901C21.3791 4.2664 21.4621 4.25318 21.5445 4.26056C21.627 4.26793 21.7063 4.29566 21.7754 4.34126C21.8445 4.38686 21.9012 4.4489 21.9404 4.52181C21.9796 4.59473 22.0001 4.67623 22 4.75901V19L15 22L9 19L2.697 21.701C2.62091 21.7336 2.53792 21.7468 2.45547 21.7395C2.37301 21.7321 2.29368 21.7044 2.22459 21.6588C2.1555 21.6132 2.09881 21.5511 2.05961 21.4782C2.02041 21.4053 1.99993 21.3238 2 21.241V7.00001L4 6.14301ZM16.243 11.243L12 15.485L7.757 11.243C6.91799 10.4039 6.34664 9.33476 6.11521 8.1709C5.88379 7.00704 6.00266 5.80069 6.45682 4.7044C6.91098 3.6081 7.68001 2.67109 8.66668 2.01184C9.65336 1.3526 10.8134 1.00073 12 1.00073C13.1866 1.00073 14.3466 1.3526 15.3333 2.01184C16.32 2.67109 17.089 3.6081 17.5432 4.7044C17.9973 5.80069 18.1162 7.00704 17.8848 8.1709C17.6534 9.33476 17.082 10.4039 16.243 11.243ZM12 12.657L14.828 9.82801C15.3875 9.26865 15.7686 8.55592 15.9231 7.77997C16.0775 7.00401 15.9983 6.19968 15.6956 5.4687C15.3929 4.73773 14.8802 4.11294 14.2224 3.67337C13.5646 3.23379 12.7912 2.99916 12 2.99916C11.2088 2.99916 10.4354 3.23379 9.77759 3.67337C9.11977 4.11294 8.60708 4.73773 8.30437 5.4687C8.00165 6.19968 7.92251 7.00401 8.07695 7.77997C8.23139 8.55592 8.61247 9.26865 9.172 9.82801L12 12.657Z"
                                               fill="#C29773"/>
                                       </svg>
                                       Map
                                   </div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                       <path
                                           d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z"
                                           fill="#8C8C8C"/>
                                   </svg>

                               </Link>
                               <Link onClick={() => handleMenuToggle()}  to="/phone/consierge" className="option">
                                   <div className="main">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22"
                                            viewBox="0 0 19 22" fill="none">
                                           <path
                                               d="M9.684 19.842H14.684V21.842H2.684V19.842H7.684V18.792C6.09848 18.6328 4.57394 18.097 3.23736 17.2294C1.90078 16.3618 0.790846 15.1874 0 13.804L1.737 12.812C2.34778 13.8792 3.19637 14.7913 4.21685 15.4774C5.23733 16.1635 6.40224 16.6051 7.62108 16.7679C8.83992 16.9307 10.0799 16.8103 11.2447 16.4162C12.4095 16.022 13.4677 15.3647 14.3372 14.4952C15.2067 13.6257 15.8641 12.5674 16.2582 11.4026C16.6524 10.2378 16.7727 8.99788 16.6099 7.77903C16.4471 6.56019 16.0055 5.39529 15.3194 4.37481C14.6333 3.35433 13.7213 2.50574 12.654 1.89496L13.646 0.157959C15.177 1.03251 16.4495 2.29646 17.3343 3.82159C18.2191 5.34672 18.6847 7.07875 18.684 8.84196C18.684 14.027 14.737 18.291 9.684 18.792V19.842ZM8.684 15.842C7.76475 15.842 6.85449 15.6609 6.00522 15.3091C5.15594 14.9573 4.38426 14.4417 3.73425 13.7917C3.08424 13.1417 2.56863 12.37 2.21684 11.5207C1.86506 10.6715 1.684 9.76121 1.684 8.84196C1.684 7.92271 1.86506 7.01245 2.21684 6.16318C2.56863 5.3139 3.08424 4.54222 3.73425 3.89221C4.38426 3.2422 5.15594 2.72659 6.00522 2.3748C6.85449 2.02302 7.76475 1.84196 8.684 1.84196C10.5405 1.84196 12.321 2.57946 13.6337 3.89221C14.9465 5.20497 15.684 6.98544 15.684 8.84196C15.684 10.6985 14.9465 12.479 13.6337 13.7917C12.321 15.1045 10.5405 15.842 8.684 15.842ZM8.684 13.842C10.0101 13.842 11.2819 13.3152 12.2195 12.3775C13.1572 11.4398 13.684 10.168 13.684 8.84196C13.684 7.51588 13.1572 6.24411 12.2195 5.30643C11.2819 4.36874 10.0101 3.84196 8.684 3.84196C7.35792 3.84196 6.08615 4.36874 5.14847 5.30643C4.21078 6.24411 3.684 7.51588 3.684 8.84196C3.684 10.168 4.21078 11.4398 5.14847 12.3775C6.08615 13.3152 7.35792 13.842 8.684 13.842Z"
                                               fill="#C29773"/>
                                       </svg>
                                       Concierge service
                                   </div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                       <path
                                           d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z"
                                           fill="#8C8C8C"/>
                                   </svg>

                               </Link>
                           </div>
                       </div>
                    </div>
                </div>
            )}
        </>

    )
};


export default Burger;


