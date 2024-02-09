import "../styles/MenuProject.css"

const MenuProjectFilter = ({ setFilterOpen }) => {

    return(<div className={"menu-project"}>
        <div className="content">
            <div className="logo">
                {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">*/}
                {/*    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="black"/>*/}
                {/*</svg>*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="24" viewBox="0 0 60 24" fill="none">
                    <g clip-path="url(#clip0_1_2109)">
                        <path d="M53.3462 0H54.5096C55.6147 0.0962602 56.5923 0.440325 57.4423 1.0322C58.318 1.64228 58.9583 2.42341 59.3635 3.37561C60.0769 5.05561 60.0385 7.37366 59.2712 9.0439C58.2346 11.3034 56.0904 12.3571 53.6154 12.2673C50.1346 12.1424 47.9635 9.56488 47.9808 6.16195C47.9885 4.48 48.4558 2.90732 49.6096 1.71317C50.5801 0.706341 51.8256 0.135285 53.3462 0ZM56.7096 7.96878C57.0865 6.94634 57.134 5.87252 56.8519 4.74732C56.4327 3.07512 54.9904 2.18341 53.3115 2.4761C51.0404 2.87024 50.5096 5.64098 51.0038 7.47707C51.3897 8.91577 52.2718 9.70537 53.65 9.84585C54.9904 9.98244 56.2404 9.24098 56.7096 7.96878Z" fill="#C29773"/>
                        <path d="M11.7154 24.0002H0V0.439215C0.0346154 0.284418 0.162821 0.20702 0.384615 0.20702C8.01282 0.197914 15.6417 0.194011 23.2712 0.195312C23.3216 0.195312 23.3701 0.21587 23.4058 0.252462C23.4415 0.289055 23.4615 0.338685 23.4615 0.390434V11.9046C23.4615 12.036 23.3968 12.1017 23.2673 12.1017L11.8404 12.0841C11.7686 12.0841 11.7327 12.1205 11.7327 12.1934L11.7154 24.0002ZM9.03846 9.46751C9.03846 9.45418 9.04105 9.44099 9.04607 9.42868C9.0511 9.41637 9.05847 9.40518 9.06775 9.39576C9.07704 9.38634 9.08806 9.37887 9.10019 9.37377C9.11233 9.36867 9.12533 9.36604 9.13846 9.36604H20.6692C20.6958 9.36604 20.7212 9.35535 20.7399 9.33633C20.7587 9.3173 20.7692 9.29149 20.7692 9.26458V3.02848C20.7692 3.00157 20.7587 2.97577 20.7399 2.95674C20.7212 2.93771 20.6958 2.92702 20.6692 2.92702H2.79231C2.76579 2.92702 2.74035 2.93771 2.7216 2.95674C2.70284 2.97577 2.69231 3.00157 2.69231 3.02848V21.167C2.69231 21.1939 2.70284 21.2197 2.7216 21.2388C2.74035 21.2578 2.76579 21.2685 2.79231 21.2685H8.93846C8.96498 21.2685 8.99042 21.2578 9.00917 21.2388C9.02793 21.2197 9.03846 21.1939 9.03846 21.167V9.46751Z" fill="#C29773"/>
                        <path d="M30.0481 8.30055V11.9084C30.0481 11.9773 30.0141 12.0118 29.9462 12.0118L27.3769 12.0215C27.3586 12.0215 27.341 12.0141 27.328 12.0009C27.315 11.9878 27.3077 11.9699 27.3077 11.9513V0.394208C27.3077 0.31746 27.3455 0.278435 27.4212 0.277135C29.5237 0.26933 31.3968 0.273883 33.0404 0.290793C35.9115 0.322013 37.425 2.88787 36.6673 5.55128C36.1712 7.28982 34.6 8.12689 32.8808 8.17567C31.9936 8.20169 31.0872 8.20559 30.1615 8.18738C30.0859 8.18608 30.0481 8.2238 30.0481 8.30055ZM30.0519 2.66152L30.0404 5.76396C30.0404 5.78104 30.0471 5.79742 30.059 5.80949C30.0709 5.82157 30.087 5.82835 30.1038 5.82835L32.5558 5.83811C32.7598 5.83891 32.9621 5.80083 33.1509 5.72605C33.3397 5.65127 33.5115 5.54125 33.6563 5.40228C33.8011 5.26331 33.9162 5.0981 33.995 4.91609C34.0737 4.73409 34.1147 4.53885 34.1154 4.34152V4.11518C34.1169 3.71675 33.9546 3.33402 33.6643 3.05116C33.374 2.76831 32.9794 2.6085 32.5673 2.60689L30.1154 2.59713C30.0986 2.59713 30.0824 2.60392 30.0705 2.61599C30.0586 2.62807 30.0519 2.64445 30.0519 2.66152Z" fill="#C29773"/>
                        <path d="M45.7462 6.51295C46.6231 6.85116 47.1013 7.51198 47.1808 8.49539C47.2462 9.29799 47.2936 10.1143 47.3231 10.9442C47.3346 11.2785 47.4231 11.6024 47.5885 11.9159C47.6218 11.9796 47.6026 12.0115 47.5308 12.0115L44.9346 12.0193C44.8991 12.0193 44.8643 12.0087 44.8346 11.989C44.8049 11.9692 44.7815 11.9411 44.7673 11.9081C44.6289 11.5907 44.5558 11.2609 44.5481 10.9188C44.534 10.2645 44.5045 9.6375 44.4596 9.03783C44.4006 8.23393 43.9724 7.7897 43.175 7.70515C42.7045 7.65572 41.8603 7.64596 40.6423 7.67588C40.5667 7.67718 40.5289 7.7162 40.5289 7.79295V11.8964C40.5289 11.9731 40.4904 12.0115 40.4135 12.0115L37.9192 12.0193C37.8321 12.0193 37.7885 11.9757 37.7885 11.8886V0.341244C37.7885 0.323649 37.7954 0.306775 37.8076 0.294333C37.8199 0.281892 37.8365 0.274902 37.8539 0.274902C39.7051 0.280106 41.6064 0.280756 43.5577 0.276854C45.6077 0.272951 47.3404 1.30124 47.4577 3.51393C47.5295 4.84986 46.9571 5.81116 45.7404 6.39783C45.6532 6.43946 45.6551 6.47783 45.7462 6.51295ZM40.5269 2.54027L40.5308 5.54515C40.5308 5.55912 40.5362 5.57252 40.546 5.5824C40.5557 5.59228 40.5689 5.59783 40.5827 5.59783L43.1423 5.59198C43.5432 5.5914 43.9274 5.43958 44.2105 5.1699C44.4936 4.90022 44.6524 4.53477 44.6519 4.15393V3.91588C44.6509 3.5353 44.491 3.1707 44.2072 2.90216C43.9234 2.63362 43.539 2.48311 43.1385 2.48368L40.5789 2.48759C40.5651 2.48759 40.5519 2.49314 40.5421 2.50302C40.5324 2.5129 40.5269 2.5263 40.5269 2.54027Z" fill="#C29773"/>
                        <path d="M23.4481 23.9999H13.2827L13.2596 13.9648C13.2596 13.7632 13.359 13.6624 13.5577 13.6624L23.4 13.6604C23.4158 13.6604 23.431 13.6668 23.4421 13.6781C23.4533 13.6895 23.4596 13.7048 23.4596 13.7209L23.4481 23.9999ZM20.7692 16.5053C20.7692 16.4747 20.7573 16.4455 20.736 16.4239C20.7147 16.4023 20.6859 16.3902 20.6558 16.3902H16.075C16.0449 16.3902 16.016 16.4023 15.9948 16.4239C15.9735 16.4455 15.9615 16.4747 15.9615 16.5053V21.1531C15.9615 21.1836 15.9735 21.2129 15.9948 21.2345C16.016 21.2561 16.0449 21.2682 16.075 21.2682H20.6558C20.6859 21.2682 20.7147 21.2561 20.736 21.2345C20.7573 21.2129 20.7692 21.1836 20.7692 21.1531V16.5053Z" fill="#C29773"/>
                        <path d="M29.4712 20.9211V23.7562C29.4712 23.8212 29.4391 23.8537 29.375 23.8537H27.4038C27.3397 23.8537 27.3077 23.8212 27.3077 23.7562V14.5757C27.3077 14.5094 27.3404 14.4768 27.4058 14.4781C28.5532 14.5015 29.7365 14.5015 30.9558 14.4781C32.9423 14.4391 34.6712 15.1201 34.7981 17.4206C34.9058 19.3698 33.6942 20.6811 31.7904 20.7728C31.0827 20.8079 30.3558 20.8124 29.6096 20.7864C29.5173 20.7838 29.4712 20.8287 29.4712 20.9211ZM29.4731 16.3942L29.4654 18.8801C29.4654 18.891 29.4696 18.9014 29.4772 18.9091C29.4848 18.9167 29.4951 18.9211 29.5058 18.9211L31.425 18.9289C31.5854 18.9294 31.7443 18.8991 31.8927 18.8398C32.041 18.7805 32.1759 18.6932 32.2897 18.5831C32.4034 18.4729 32.4938 18.342 32.5556 18.1978C32.6175 18.0535 32.6495 17.8988 32.65 17.7425V17.5552C32.651 17.2396 32.5233 16.9364 32.295 16.7125C32.0667 16.4886 31.7565 16.3621 31.4327 16.3611L29.5135 16.3533C29.5028 16.3533 29.4925 16.3576 29.4849 16.3653C29.4773 16.3729 29.4731 16.3834 29.4731 16.3942Z" fill="#C29773"/>
                        <path d="M36.5827 22.2536L36.0769 23.8088C36.0729 23.8211 36.0652 23.8319 36.0549 23.8396C36.0445 23.8473 36.0321 23.8515 36.0192 23.8517L33.9346 23.8536C33.9247 23.8536 33.915 23.8512 33.9062 23.8465C33.8974 23.8419 33.8899 23.8352 33.8842 23.8269C33.8786 23.8187 33.875 23.8092 33.8737 23.7992C33.8724 23.7893 33.8735 23.7792 33.8769 23.7697L37.2115 14.5288C37.2159 14.5168 37.2237 14.5064 37.234 14.4991C37.2444 14.4918 37.2566 14.4878 37.2692 14.4878H39.7712C39.7838 14.4878 39.796 14.4918 39.8064 14.4991C39.8167 14.5064 39.8245 14.5168 39.8289 14.5288L43.2385 23.7697C43.2419 23.7792 43.243 23.7893 43.2417 23.7992C43.2404 23.8092 43.2368 23.8187 43.2311 23.8269C43.2255 23.8352 43.218 23.8419 43.2092 23.8465C43.2004 23.8512 43.1907 23.8536 43.1808 23.8536H41.0096C40.9968 23.8535 40.9843 23.8493 40.974 23.8416C40.9636 23.8339 40.9559 23.8231 40.9519 23.8107L40.4385 22.2536C40.4345 22.2413 40.4267 22.2305 40.4164 22.2228C40.4061 22.2151 40.3936 22.2109 40.3808 22.2107H36.6404C36.6276 22.2109 36.6151 22.2151 36.6048 22.2228C36.5944 22.2305 36.5867 22.2413 36.5827 22.2536ZM37.4192 20.3727L39.6462 20.3746C39.759 20.3746 39.7974 20.3206 39.7615 20.2127L38.5615 16.5971C38.518 16.4683 38.475 16.4683 38.4327 16.5971L37.2673 20.1619C37.2212 20.3024 37.2718 20.3727 37.4192 20.3727Z" fill="#C29773"/>
                        <path d="M50.2846 19.4811C50.9192 19.7204 51.275 20.2167 51.3519 20.9699C51.4147 21.576 51.4564 22.2349 51.4769 22.9464C51.4846 23.204 51.5462 23.4694 51.6596 23.6996C51.6994 23.7829 51.6737 23.8238 51.5827 23.8225L49.8019 23.8167C49.5263 23.8154 49.3789 23.6755 49.3596 23.3972C49.3109 22.7142 49.2737 22.0834 49.2481 21.5045C49.2173 20.8008 48.8571 20.4346 48.1673 20.406C47.5724 20.3825 46.9481 20.3786 46.2942 20.3942C46.2096 20.3968 46.1673 20.4404 46.1673 20.525L46.1692 23.725C46.1692 23.8108 46.1269 23.8538 46.0423 23.8538H44.1346C44.0705 23.8538 44.0385 23.8212 44.0385 23.7562V14.5445C44.0385 14.5324 44.0431 14.5208 44.0513 14.512C44.0595 14.5033 44.0708 14.4982 44.0827 14.4977C45.666 14.4755 47.2205 14.4775 48.7462 14.5035C50.4673 14.5328 51.7135 15.645 51.5712 17.5064C51.5039 18.3923 51.0039 18.9386 50.2731 19.3581C50.191 19.4063 50.1949 19.4473 50.2846 19.4811ZM46.1731 16.3142L46.1654 18.6518C46.1654 18.671 46.1729 18.6893 46.1862 18.7029C46.1996 18.7164 46.2177 18.724 46.2365 18.724L48.2269 18.7318C48.3775 18.7323 48.5266 18.7043 48.6659 18.6493C48.8052 18.5943 48.9318 18.5134 49.0386 18.4112C49.1454 18.309 49.2302 18.1875 49.2883 18.0537C49.3463 17.9199 49.3765 17.7764 49.3769 17.6313V17.3581C49.3779 17.0653 49.2581 16.784 49.0439 16.5762C48.8297 16.3683 48.5386 16.2509 48.2346 16.2499L46.2442 16.2421C46.2254 16.2421 46.2073 16.2497 46.1939 16.2632C46.1806 16.2767 46.1731 16.2951 46.1731 16.3142Z" fill="#C29773"/>
                        <path d="M56.9712 16.5249V23.7854C56.9712 23.8035 56.9641 23.8208 56.9514 23.8336C56.9388 23.8465 56.9217 23.8536 56.9038 23.8536H54.8269C54.8091 23.8536 54.7919 23.8465 54.7793 23.8336C54.7667 23.8208 54.7596 23.8035 54.7596 23.7854V16.5229C54.7596 16.5048 54.7525 16.4874 54.7399 16.4746C54.7273 16.4618 54.7102 16.4546 54.6923 16.4546L51.9904 16.4527C51.9725 16.4527 51.9554 16.4455 51.9428 16.4327C51.9302 16.4199 51.9231 16.4025 51.9231 16.3844L51.925 14.5561C51.925 14.5471 51.9267 14.5382 51.9301 14.53C51.9335 14.5217 51.9385 14.5141 51.9447 14.5078C51.951 14.5015 51.9584 14.4964 51.9665 14.493C51.9747 14.4896 51.9835 14.4878 51.9923 14.4878H59.7404C59.7582 14.4878 59.7754 14.495 59.788 14.5078C59.8006 14.5206 59.8077 14.538 59.8077 14.5561V16.3824C59.8077 16.3914 59.8059 16.4003 59.8026 16.4086C59.7992 16.4168 59.7942 16.4244 59.788 16.4307C59.7817 16.4371 59.7743 16.4421 59.7661 16.4455C59.758 16.449 59.7492 16.4507 59.7404 16.4507L57.0385 16.4566C57.0206 16.4566 57.0035 16.4638 56.9909 16.4766C56.9782 16.4894 56.9712 16.5068 56.9712 16.5249Z" fill="#C29773"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_2109">
                            <rect width="60" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="additional">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.5 10L22.9 21H20.745L19.544 18H15.454L14.255 21H12.101L16.5 10H18.5ZM10 2V4H16V6H14.032C13.2606 8.32208 12.0295 10.465 10.412 12.301C11.1333 12.9446 11.9157 13.5163 12.748 14.008L11.997 15.886C10.9225 15.2766 9.9176 14.552 9 13.725C7.21358 15.3417 5.09804 16.5522 2.799 17.273L2.263 15.344C4.23284 14.7159 6.04802 13.6793 7.59 12.302C6.44869 11.0099 5.49806 9.56127 4.767 8H7.007C7.56435 9.02886 8.23267 9.9936 9 10.877C10.2501 9.4361 11.2353 7.7853 11.91 6.001L2 6V4H8V2H10ZM17.5 12.885L16.253 16H18.745L17.5 12.885Z" fill="black"/>
                </svg>
                <svg onClick={()=>window.open('tel:+971521038793')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z" fill="black"/>
                </svg>
                <svg onClick={()=>setFilterOpen(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z" fill="#191C38"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#191C38"/>
                </svg>
            </div>
        </div>
        <div className="content-filter">
            <div className="option">Plots</div>
            <div className="option">Town house</div>
            <div className="option">Villa</div>
            <div className="option">Apartments</div>
        </div>

    </div>)
}
export default MenuProjectFilter