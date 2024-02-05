import "../styles/project.scss"
import MaxLengthText from "./MaxLengthText.jsx";
import DynamicTruncatedText from "./DynamicTruncatedText.jsx";
import React from "react";
const Project = ({ project }) => {
    function formatNumberWithCommas(value) {
        value = (Number(value) / 3.16).toFixed(0).toString()
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (<div className={"project-sim"} onClick={() => window.location.href = `/project-view/${project._id}`}>
        <div className="img-container">
            <div className="image" style={{
                background: `linear-gradient(0deg, #000 -58.46%, rgba(0, 0, 0, 0.00) 96.51%), url(${project.imageSrcMain}) lightgray 50% / cover no-repeat`,
            }}>
            </div>

        </div>
        <div className="project-content">
            <div className="price">
                ${formatNumberWithCommas(project.priceFrom)} <span>/from</span>
            </div>
            <div className="name">
                <DynamicTruncatedText text={project.projectName} customBreakpoints={{
                    1920: 20,
                }}/>

                by

                <DynamicTruncatedText text={project.developer} customBreakpoints={{
                    1920: 20,
                    1024: 10,
                }}/>
            </div>
        </div>

        <div className="description">
            <div className="info">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                        <path
                            d="M23.3864 11.4997V9.51718C23.3864 7.025 23.3864 5.77891 22.5857 5.00469C21.785 4.23047 20.4963 4.23047 17.919 4.23047H11.0846C8.50726 4.23047 7.21856 4.23047 6.41788 5.00469C5.61719 5.77891 5.61719 7.025 5.61719 9.51718V11.4997M14.5018 4.89131V11.4997"
                            stroke="#C29773" stroke-width="2"/>
                        <path d="M24.1932 22.0002V20.3848M4.80859 22.0002V20.3848" stroke="#C29773" stroke-width="2"
                              stroke-linecap="round"/>
                        <path
                            d="M1.57812 15.5385C1.57812 14.284 1.57813 13.6568 1.77487 13.162C2.03719 12.5023 2.54035 11.9782 3.17365 11.7049C3.64863 11.5 4.25077 11.5 5.45505 11.5H23.5474C24.7517 11.5 25.3537 11.5 25.8288 11.7049C26.462 11.9782 26.9652 12.5023 27.2276 13.162C27.4243 13.6568 27.4243 14.284 27.4243 15.5385C27.4243 16.7929 27.4243 17.4201 27.2276 17.915C26.9652 18.5746 26.462 19.0988 25.8288 19.372C25.3537 19.5769 24.7517 19.5769 23.5474 19.5769H5.45505C4.25077 19.5769 3.64863 19.5769 3.17365 19.372C2.54035 19.0988 2.03719 18.5746 1.77487 17.915C1.57813 17.4201 1.57812 16.7929 1.57812 15.5385Z"
                            stroke="#1C274C" stroke-width="2"/>
                        <path
                            d="M25.8107 11.5C25.8107 6.55025 25.8107 4.07538 24.3387 2.53769C22.8668 1 20.4976 1 15.7594 1H13.2466C8.50837 1 6.13927 1 4.66728 2.53769C3.19531 4.07538 3.19531 6.55025 3.19531 11.5"
                            stroke="#1C274C" stroke-width="2"/>
                    </svg>
                </div>
                <div className="text">
                    {project.selectedBedrooms} <span>bdrm</span>
                </div>
            </div>

            <div className="info">
                <div>
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4.5" y="4" width="21" height="21" stroke="#C29773" stroke-width="2"/>
                        <path
                            d="M17.6587 13.9519V13.1709L18.8247 12.1919C18.9201 12.1113 19.0264 12.0196 19.1437 11.9169C19.2611 11.8143 19.3637 11.7006 19.4517 11.5759C19.5471 11.4513 19.5947 11.3266 19.5947 11.2019C19.5947 11.0406 19.5471 10.9196 19.4517 10.8389C19.3637 10.7509 19.2391 10.7069 19.0777 10.7069C18.9311 10.7069 18.8101 10.7436 18.7147 10.8169C18.6267 10.8903 18.5791 11.0003 18.5717 11.1469H17.6367C17.6441 10.6996 17.7907 10.3623 18.0767 10.1349C18.3627 9.90761 18.7184 9.79395 19.1437 9.79395C19.5544 9.79395 19.8954 9.90395 20.1667 10.1239C20.4381 10.3439 20.5737 10.6593 20.5737 11.0699C20.5737 11.3706 20.5041 11.6309 20.3647 11.8509C20.2254 12.0636 20.0567 12.2616 19.8587 12.4449C19.7414 12.5549 19.6204 12.6576 19.4957 12.7529C19.3784 12.8483 19.2574 12.9473 19.1327 13.0499H20.5297V13.9519H17.6587Z"
                            fill="#C29773"/>
                        <path
                            d="M16.6504 17.9999C16.1811 17.9999 15.7924 17.9376 15.4844 17.8129C15.1837 17.6883 14.9564 17.4866 14.8024 17.2079C14.6557 16.9293 14.5824 16.5553 14.5824 16.0859V13.3909H13.6914V12.2029H14.5824V10.5859H15.9244V12.2029H17.2774V13.3909H15.9244V15.9099C15.9244 16.2033 15.9757 16.4269 16.0784 16.5809C16.1811 16.7349 16.4121 16.8119 16.7714 16.8119H17.2334V17.9999H16.6504Z"
                            fill="#C29773"/>
                        <path
                            d="M10.9801 18V13.391H10.0781V12.203H10.9801V11.653C10.9801 11.213 11.0461 10.8537 11.1781 10.575C11.3101 10.289 11.5191 10.08 11.8051 9.948C12.0985 9.816 12.4725 9.75 12.9271 9.75H13.7851V10.938H13.0811C12.8831 10.938 12.7291 10.971 12.6191 11.037C12.5091 11.103 12.4285 11.202 12.3771 11.334C12.3331 11.4587 12.3111 11.6127 12.3111 11.796V12.203H13.7851V13.391H12.3111V18H10.9801Z"
                            fill="#C29773"/>
                        <mask id="path-5-inside-1_2627_21161" fill="white">
                            <rect x="23.5" width="6" height="6" rx="0.5"/>
                        </mask>
                        <rect x="23.5" width="6" height="6" rx="0.5" fill="white"/>
                        <rect x="23.5" width="6" height="6" rx="0.5" stroke="#191C38" stroke-width="2"
                              mask="url(#path-5-inside-1_2627_21161)"/>
                        <mask id="path-6-inside-2_2627_21161" fill="white">
                            <rect x="23.5" y="23" width="6" height="6" rx="0.5"/>
                        </mask>
                        <rect x="23.5" y="23" width="6" height="6" rx="0.5" fill="white"/>
                        <rect x="23.5" y="23" width="6" height="6" rx="0.5" stroke="#191C38" stroke-width="2"
                              mask="url(#path-6-inside-2_2627_21161)"/>
                        <mask id="path-7-inside-3_2627_21161" fill="white">
                            <rect x="0.5" y="23" width="6" height="6" rx="0.5"/>
                        </mask>
                        <rect x="0.5" y="23" width="6" height="6" rx="0.5" fill="white"/>
                        <rect x="0.5" y="23" width="6" height="6" rx="0.5" stroke="#191C38" stroke-width="2"
                              mask="url(#path-7-inside-3_2627_21161)"/>
                        <mask id="path-8-inside-4_2627_21161" fill="white">
                            <rect x="0.5" width="6" height="6" rx="0.5"/>
                        </mask>
                        <rect x="0.5" width="6" height="6" rx="0.5" fill="white"/>
                        <rect x="0.5" width="6" height="6" rx="0.5" stroke="#191C38" stroke-width="2"
                              mask="url(#path-8-inside-4_2627_21161)"/>
                    </svg>
                </div>
                <div className="text">
                    {(Number(project.priceFrom) / 3.16 / Number(project.sizeFrom)).toFixed(0)} <span>USD</span>
                </div>
            </div>

            <div className="info">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path
                            d="M10.45 1C6.19218 1.00766 3.96257 1.1122 2.53769 2.53708C1 4.07477 1 6.54965 1 11.4994C1 16.4492 1 18.924 2.53769 20.4617C4.07538 21.9994 6.55026 21.9994 11.5 21.9994C16.4497 21.9994 18.9247 21.9994 20.4623 20.4617C21.8872 19.0368 21.9917 16.8072 21.9994 12.5494"
                            stroke="#1C274C" stroke-width="2" stroke-linecap="round"/>
                        <path
                            d="M12.55 10.45L22 1M22 1H16.389M22 1V6.61094M20.95 2.05L11.5 11.5M11.5 11.5H15.7M11.5 11.5V7.3"
                            stroke="#C29773" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div className="text">
                    {project.sizeFrom} <span>sq.ft</span>
                </div>
            </div>
        </div>
    </div>)
}
export default Project