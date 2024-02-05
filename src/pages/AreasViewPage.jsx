import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Pages/AreasViewPage.scss"
import arrowLeft from "../assets/arrow-left-fill.svg";
import share from "../assets/share.svg";
import GetConsult from "../components/GetConsult";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import annaHorshunovaName from "../assets/teams/anna-horshunova-min.jpg";
import annaHorshunova from "../assets/teams/qr/anna-horshunova.png";
import RequestModal from "../components/RequestModal.jsx";

import apart11 from "../assets/Areas/apart.png";
import apart1 from "../assets/Areas/apart-pages/apart1.png";
import apart2 from "../assets/Areas/apart-pages/apart2.png";
import apart3 from "../assets/Areas/apart-pages/apart3.png";

import palm1 from "../assets/Areas/apart-pages/palm1.png";
import palm2 from "../assets/Areas/apart-pages/palm2.png";
import palm3 from "../assets/Areas/apart-pages/palm3.png";

import mbr from "../assets/Areas/apart-pages/mbr1.png";
import mbr1 from "../assets/Areas/apart-pages/mbr2.png";
import mbr2 from "../assets/Areas/apart-pages/mbr3.png";

import creek1 from "../assets/Areas/apart-pages/creek1.png";
import creek2 from "../assets/Areas/apart-pages/creek2.png";
import creek3 from "../assets/Areas/apart-pages/creek3.png";

import marina1 from "../assets/Areas/apart-pages/marina1.png";
import marina2 from "../assets/Areas/apart-pages/marina2.png";
import marina3 from "../assets/Areas/apart-pages/marina3.png";

import lagoon1 from "../assets/Areas/lagoons1.png";
import lagoon2 from "../assets/Areas/lagoons2.png";
import lagoon3 from "../assets/Areas/lagoons3.png";

import jlt from "../assets/Areas/jlt.png";
import jlt1 from "../assets/Areas/jlt1.png";
import jlt2 from "../assets/Areas/jlt2.png";

import mjl from "../assets/Areas/apart-pages/mjl.png";
import mjl1 from "../assets/Areas/apart-pages/mjl1.png";
import mjl2 from "../assets/Areas/apart-pages/mjl2.png";

import mudon from "../assets/Areas/apart-pages/mudon.png";
import mudon1 from "../assets/Areas/apart-pages/mudon1.png";
import mudon2 from "../assets/Areas/apart-pages/mudon2.png";

import jvc from "../assets/Areas/apart-pages/jvc.png";
import jvc1 from "../assets/Areas/apart-pages/jvc1.png";
import jvc2 from "../assets/Areas/apart-pages/jvc2.png";

import bluewaters from "../assets/Areas/apart-pages/bluewaters.png";
import bluewaters1 from "../assets/Areas/apart-pages/bluewaters1.png";
import bluewaters2 from "../assets/Areas/apart-pages/bluewaters2.png";

import centralPark from "../assets/Areas/apart-pages/central-park1.png";
import centralPark1 from "../assets/Areas/apart-pages/central-park2.png";
import centralPark2 from "../assets/Areas/apart-pages/central-park.png";

import damacHills from "../assets/Areas/apart-pages/damac-hills.png";
import damacHills1 from "../assets/Areas/apart-pages/damac-hills1.png";
import damacHills2 from "../assets/Areas/apart-pages/damac-hills2.png";

import dubaiHills from "../assets/Areas/apart-pages/damac-hills.png";
import dubaiHills1 from "../assets/Areas/apart-pages/damac-hills1.png";
import dubaiHills2 from "../assets/Areas/apart-pages/damac-hills2.png";

import areaMap from "../assets/Areas/map.png";
import palmMap from "../assets/Areas/AreasPhoto/palm.png";
import mbrMap from "../assets/Areas/AreasPhoto/mbr.png";
import creekMap from "../assets/Areas/AreasPhoto/creek.png";
import dubaiMap from "../assets/Areas/AreasPhoto/dubai.png";
import damacMap from "../assets/Areas/AreasPhoto/damac.png";
import jltMap from "../assets/Areas/AreasPhoto/jlt.png";
import mjlMap from "../assets/Areas/AreasPhoto/mjl.png";
import mudonMap from "../assets/Areas/AreasPhoto/mudon.png";
import jvcMap from "../assets/Areas/AreasPhoto/jvc.png";
import bluewatersMap from "../assets/Areas/AreasPhoto/bluewaters.png";
import cityWalkMap from "../assets/Areas/AreasPhoto/city-walk.png";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DynamicTruncatedText from "../components/DynamicTruncatedText.jsx";
import AreasCardsInfo from "../data/AreasCardsInfo.jsx";
import AreaCard from "../components/AreaCard.jsx";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {AdvancedMarker, APIProvider, ControlPosition, Map, MapControl} from "@vis.gl/react-google-maps";
import Marker from "../components/Marker.jsx";
import axios from "axios";
import dubai from "../assets/Areas/AreasPhoto/dubai.png";

const Block = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="block" style={{ height: isExpanded ? "100%" : "fit-content" }}
        >
            <div className="info">
                <div>{title}</div>
                <div>
                    {isExpanded ? content : content.slice(0, 250) + '...'}
                </div>
            </div>

            {content.length > 250 && (
                <div className="read-more" onClick={handleToggleExpand}>
                    {isExpanded ? 'Read less' : 'Read more'}
                </div>
            )}
        </div>
    );
};

function AreasViewPage() {
    const {id} = useParams();
    const [showModal, setShowModal] = useState(false);

    const {t} = useTranslation();

    const pageTexy= {
        "business": {
            "title": t("areas-business.title"),
            "titleText": [
                t('areas-business.titleText.0'),
            ],
            "locationText": [
                t('areas-business.locationText.0'),
                t('areas-business.locationText.1'),
                t('areas-business.locationText.2'),
                t('areas-business.locationText.3')
            ],
            "infrastructureText": [
                t('areas-business.infrastructureText.0'),
                t('areas-business.infrastructureText.1'),
                t('areas-business.infrastructureText.2')
            ],
            "images": [apart1, apart2, apart3, areaMap],
            "blocks": [
                {
                    "title": t('areas-business.blocks.0.title'),
                    "texts": [
                        t('areas-business.blocks.0.texts.0'),
                        t('areas-business.blocks.0.texts.1'),
                        t('areas-business.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('areas-business.blocks.1.title'),
                    "texts": [
                        t('areas-business.blocks.1.texts.0'),
                        t('areas-business.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('areas-business.blocks.2.title'),
                    "texts": [t('areas-business.blocks.2.texts.0')]
                }
            ],
            lat: "25.18326",
            lng: "55.26808"
        },
        "palm": {
            "title": t("palm.title"),
            "titleText": [
                t('palm.titleText.0'),
            ],
            "locationText": [
                t('palm.locationText.0'),
                t('palm.locationText.1'),
                t('palm.locationText.2'),
                t('palm.locationText.3')
            ],
            "infrastructureText": [
                t('palm.infrastructureText.0'),
                t('palm.infrastructureText.1'),
                t('palm.infrastructureText.2')
            ],
            "images": [palm1, palm2, palm3, palmMap],
            "blocks": [
                {
                    "title": t('palm.blocks.0.title'),
                    "texts": [
                        t('palm.blocks.0.texts.0'),
                        t('palm.blocks.0.texts.1'),
                        t('palm.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('palm.blocks.1.title'),
                    "texts": [
                        t('palm.blocks.1.texts.0'),
                        t('palm.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('palm.blocks.2.title'),
                    "texts": [t('palm.blocks.2.texts.0')]
                }
            ],
            lat: "25.11426838805843",
            lng: "55.15544118892634"
        },
        "mbr": {
            "title": t("mbr.title"),
            "titleText": [
                t('mbr.titleText.0'),
            ],
            "locationText": [
                t('mbr.locationText.0'),
                t('mbr.locationText.1'),
                t('mbr.locationText.2'),
                t('mbr.locationText.3')
            ],
            "infrastructureText": [
                t('mbr.infrastructureText.0'),
                t('mbr.infrastructureText.1'),
                t('mbr.infrastructureText.2')
            ],
            "images": [mbr, mbr1, mbr2, mbrMap],
            "blocks": [
                {
                    "title": t('mbr.blocks.0.title'),
                    "texts": [
                        t('mbr.blocks.0.texts.0'),
                        t('mbr.blocks.0.texts.1'),
                        t('mbr.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('mbr.blocks.1.title'),
                    "texts": [
                        t('mbr.blocks.1.texts.0'),
                        t('mbr.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('mbr.blocks.2.title'),
                    "texts": [t('mbr.blocks.2.texts.0')]
                }
            ],
            lat: "25.163702361421716",
            lng: "55.290416067451176"
        },
        "creek": {
            "title": t("creek.title"),
            "titleText": [
                t('creek.titleText.0'),
            ],
            "locationText": [
                t('creek.locationText.0'),
                t('creek.locationText.1'),
                t('creek.locationText.2'),
                t('creek.locationText.3')
            ],
            "infrastructureText": [
                t('creek.infrastructureText.0'),
                t('creek.infrastructureText.1'),
                t('creek.infrastructureText.2')
            ],
            "images": [creek1, creek2, creek3, creekMap],
            "blocks": [
                {
                    "title": t('creek.blocks.0.title'),
                    "texts": [
                        t('creek.blocks.0.texts.0'),
                        t('creek.blocks.0.texts.1'),
                        t('creek.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('creek.blocks.1.title'),
                    "texts": [
                        t('creek.blocks.1.texts.0'),
                        t('creek.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('creek.blocks.2.title'),
                    "texts": [t('creek.blocks.2.texts.0')]
                }
            ],
            lat: "25.195839684347554",
            lng: "55.36208518670469"
        },

        "marina": {
            "title": t("marina.title"),
            "titleText": [
                t('marina.titleText.0'),
            ],
            "locationText": [
                t('marina.locationText.0'),
                t('marina.locationText.1'),
                t('marina.locationText.2'),
                t('marina.locationText.3')
            ],
            "infrastructureText": [
                t('marina.infrastructureText.0'),
                t('marina.infrastructureText.1'),
                t('marina.infrastructureText.2')
            ],
            "images": [marina1, marina2, marina3, dubaiMap],
            "blocks": [
                {
                    "title": t('marina.blocks.0.title'),
                    "texts": [
                        t('marina.blocks.0.texts.0'),
                        t('marina.blocks.0.texts.1'),
                        t('marina.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('marina.blocks.1.title'),
                    "texts": [
                        t('marina.blocks.1.texts.0'),
                        t('marina.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('marina.blocks.2.title'),
                    "texts": [t('marina.blocks.2.texts.0')]
                }
            ],
            lat: "25.077882518530753",
            lng: "55.13167305094422"
        },
        "lagoons": {
            "title": t("lagoons.title"),
            "titleText": [
                t('lagoons.titleText.0'),
            ],
            "locationText": [
                t('lagoons.locationText.0'),
                t('lagoons.locationText.1'),
                t('lagoons.locationText.2'),
                t('lagoons.locationText.3')
            ],
            "infrastructureText": [
                t('lagoons.infrastructureText.0'),
                t('lagoons.infrastructureText.1'),
                t('lagoons.infrastructureText.2')
            ],
            "images": [lagoon1, lagoon2, lagoon3, damacMap],
            "blocks": [
                {
                    "title": t('lagoons.blocks.0.title'),
                    "texts": [
                        t('lagoons.blocks.0.texts.0'),
                        t('lagoons.blocks.0.texts.1'),
                        t('lagoons.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('lagoons.blocks.1.title'),
                    "texts": [
                        t('lagoons.blocks.1.texts.0'),
                        t('lagoons.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('lagoons.blocks.2.title'),
                    "texts": [t('lagoons.blocks.2.texts.0')]
                }
            ],
            lat: "25.011299587780673",
            lng: "55.240526772734434"
        },
        "jlt": {
            "title": t("jlt.title"),
            "titleText": [
                t('jlt.titleText.0'),
            ],
            "locationText": [
                t('jlt.locationText.0'),
                t('jlt.locationText.1'),
                t('jlt.locationText.2'),
                t('jlt.locationText.3')
            ],
            "infrastructureText": [
                t('jlt.infrastructureText.0'),
                t('jlt.infrastructureText.1'),
                t('jlt.infrastructureText.2')
            ],
            "images": [jlt, jlt1, jlt2, jltMap],
            "blocks": [
                {
                    "title": t('jlt.blocks.0.title'),
                    "texts": [
                        t('jlt.blocks.0.texts.0'),
                        t('jlt.blocks.0.texts.1'),
                        t('jlt.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('jlt.blocks.1.title'),
                    "texts": [
                        t('jlt.blocks.1.texts.0'),
                        t('jlt.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('jlt.blocks.2.title'),
                    "texts": [t('jlt.blocks.2.texts.0')]
                }
            ],
            lat: "25.070791373667383",
            lng: "55.145857689647535"
        },
        "mjl": {
            "title": t("mjl.title"),
            "titleText": [
                t('mjl.titleText.0'),
            ],
            "locationText": [
                t('mjl.locationText.0'),
                t('mjl.locationText.1'),
                t('mjl.locationText.2'),
                t('mjl.locationText.3')
            ],
            "infrastructureText": [
                t('mjl.infrastructureText.0'),
                t('mjl.infrastructureText.1'),
                t('mjl.infrastructureText.2')
            ],
            "images": [mjl, mjl1, mjl2, mjlMap],
            "blocks": [
                {
                    "title": t('mjl.blocks.0.title'),
                    "texts": [
                        t('mjl.blocks.0.texts.0'),
                        t('mjl.blocks.0.texts.1'),
                        t('mjl.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('mjl.blocks.1.title'),
                    "texts": [
                        t('mjl.blocks.1.texts.0'),
                        t('mjl.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('mjl.blocks.2.title'),
                    "texts": [t('mjl.blocks.2.texts.0')]
                }
            ],
            lat: "25.13421299733816",
            lng: "55.192893920025064"
        },

        "mudon": {
            "title": t("mudon.title"),
            "titleText": [
                t('mudon.titleText.0'),
            ],
            "locationText": [
                t('mudon.locationText.0'),
                t('mudon.locationText.1'),
                t('mudon.locationText.2'),
                t('mudon.locationText.3')
            ],
            "infrastructureText": [
                t('mudon.infrastructureText.0'),
                t('mudon.infrastructureText.1'),
                t('mudon.infrastructureText.2')
            ],
            "images": [mudon, mudon1, mudon2, mudonMap],
            "blocks": [
                {
                    "title": t('mudon.blocks.0.title'),
                    "texts": [
                        t('mudon.blocks.0.texts.0'),
                        t('mudon.blocks.0.texts.1'),
                        t('mudon.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('mudon.blocks.1.title'),
                    "texts": [
                        t('mudon.blocks.1.texts.0'),
                        t('mudon.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('mudon.blocks.2.title'),
                    "texts": [t('mudon.blocks.2.texts.0')]
                }
            ],
            lat: "25.017709497239544",
            lng: "55.26420037798617"
        },
        "jvc": {
            "title": t("jvc.title"),
            "titleText": [
                t('jvc.titleText.0'),
            ],
            "locationText": [
                t('jvc.locationText.0'),
                t('jvc.locationText.1'),
                t('jvc.locationText.2'),
                t('jvc.locationText.3')
            ],
            "infrastructureText": [
                t('jvc.infrastructureText.0'),
                t('jvc.infrastructureText.1'),
                t('jvc.infrastructureText.2')
            ],
            "images": [jvc, jvc1, jvc2, jvcMap],
            "blocks": [
                {
                    "title": t('jvc.blocks.1.title'),
                    "texts": [
                        t('jvc.blocks.0.texts.0'),
                        t('jvc.blocks.0.texts.1'),
                        t('jvc.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('jvc.blocks.1.title'),
                    "texts": [
                        t('jvc.blocks.1.texts.0'),
                        t('jvc.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('jvc.blocks.2.title'),
                    "texts": [t('jvc.blocks.2.texts.0')]
                }
            ],
            lat: "25.05568694551645",
            lng: "55.210765198471826"
        },
        "bluewaters": {
            "title": t("bluewaters.title"),
            "titleText": [
                t('bluewaters.titleText.0'),
            ],
            "locationText": [
                t('bluewaters.locationText.0'),
                t('bluewaters.locationText.1'),
                t('bluewaters.locationText.2'),
                t('bluewaters.locationText.3')
            ],
            "infrastructureText": [
                t('bluewaters.infrastructureText.0'),
                t('bluewaters.infrastructureText.1'),
                t('bluewaters.infrastructureText.2')
            ],
            "images": [bluewaters, bluewaters1, bluewaters2, bluewatersMap],
            "blocks": [
                {
                    "title": t('bluewaters.blocks.0.title'),
                    "texts": [
                        t('bluewaters.blocks.0.texts.0'),
                        t('bluewaters.blocks.0.texts.1'),
                        t('bluewaters.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('bluewaters.blocks.1.title'),
                    "texts": [
                        t('bluewaters.blocks.1.texts.0'),
                        t('bluewaters.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('bluewaters.blocks.2.title'),
                    "texts": [t('bluewaters.blocks.2.texts.0')]
                }
            ],
            lat: "25.079542367968156",
            lng: "55.11852342246321"
        },
        "central-park": {
            "title": t("central-park.title"),
            "titleText": [
                t('central-park.titleText.0'),
            ],
            "locationText": [
                t('central-park.locationText.0'),
                t('central-park.locationText.1'),
                t('central-park.locationText.2'),
                t('central-park.locationText.3')
            ],
            "infrastructureText": [
                t('central-park.infrastructureText.0'),
                t('central-park.infrastructureText.1'),
                t('central-park.infrastructureText.2')
            ],
            "images": [cityWalkMap, centralPark, centralPark2, centralPark1],
            "blocks": [
                {
                    "title": t('central-park.blocks.0.title'),
                    "texts": [
                        t('central-park.blocks.0.texts.0'),
                        t('central-park.blocks.0.texts.1'),
                        t('central-park.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('central-park.blocks.1.title'),
                    "texts": [
                        t('central-park.blocks.1.texts.0'),
                        t('central-park.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('central-park.blocks.2.title'),
                    "texts": [t('central-park.blocks.2.texts.0')]
                }
            ],
            lat: "25.205564110864415",
            lng: "55.26059454555963"
        },

        "damac-hills": {
            "title": t("damac-hills.title"),
            "titleText": [
                t('damac-hills.titleText.0'),
            ],
            "locationText": [
                t('damac-hills.locationText.0'),
                t('damac-hills.locationText.1'),
                t('damac-hills.locationText.2'),
                t('damac-hills.locationText.3')
            ],
            "infrastructureText": [
                t('damac-hills.infrastructureText.0'),
                t('damac-hills.infrastructureText.1'),
                t('damac-hills.infrastructureText.2')
            ],
            "images": [damacHills, damacHills1, damacHills2, damacMap],
            "blocks": [
                {
                    "title": t('damac-hills.blocks.0.title'),
                    "texts": [
                        t('damac-hills.blocks.0.texts.0'),
                        t('damac-hills.blocks.0.texts.1'),
                        t('damac-hills.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('damac-hills.blocks.1.title'),
                    "texts": [
                        t('damac-hills.blocks.1.texts.0'),
                        t('damac-hills.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('damac-hills.blocks.2.title'),
                    "texts": [t('damac-hills.blocks.2.texts.0')]
                }
            ],
            lat: "25.022400644734635",
            lng: "55.25773142987843"
        },
        "dubai-hills": {
            "title": t("dubai-hills.title"),
            "titleText": [
                t('dubai-hills.titleText.0'),
            ],
            "locationText": [
                t('dubai-hills.locationText.0'),
                t('dubai-hills.locationText.1'),
                t('dubai-hills.locationText.2'),
                t('dubai-hills.locationText.3')
            ],
            "infrastructureText": [
                t('dubai-hills.infrastructureText.0'),
                t('dubai-hills.infrastructureText.1'),
                t('dubai-hills.infrastructureText.2')
            ],
            "images": [dubaiHills, dubaiHills1, dubaiHills2, dubaiMap],
            "blocks": [
                {
                    "title": t('dubai-hills.blocks.0.title'),
                    "texts": [
                        t('dubai-hills.blocks.0.texts.0'),
                        t('dubai-hills.blocks.0.texts.1'),
                        t('dubai-hills.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('dubai-hills.blocks.1.title'),
                    "texts": [
                        t('dubai-hills.blocks.1.texts.0'),
                        t('dubai-hills.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('dubai-hills.blocks.2.title'),
                    "texts": [t('dubai-hills.blocks.2.texts.0')]
                }
            ],
            lat: "25.114928437059035",
            lng: "55.26031822754444 "
        },
    }

    const team = [
        {
            "image": annaHorshunovaName, "name": "Anna Horshunova", "position": "Real estate broker", "qr": annaHorshunova,
            "social": {
                facebook: "https://www.facebook.com/annagorshunova?mibextid=LQQJ4d"
            }
        },
    ]

    const { title, titleText, locationText, infrastructureText, images, blocks, lat, lng } = pageTexy[id];

    const [modalText, setModalText] = useState({
        tittleText: "",
        buttonText: ""
    });

    const closeModal = () => {
        setShowModal(false);
    };

    const [projects, setProjects] = useState(null);
    function convertPriceToShortFormat(price) {
        price = (Number(price) / 3.16).toFixed(0).toString()
        const suffixes = ['', 'K', 'M', 'B', 'T'];
        let suffixIndex = 0;

        while (price >= 1000 && suffixIndex < suffixes.length - 1) {
            price /= 1000;
            suffixIndex++;
        }

        return price.toFixed(1) + suffixes[suffixIndex];
    }
    const [mapZoom, setMapZoom] = useState(15);
    const [currnetIndex, setCurrentIndex] = useState(null)

    const cardInfo = AreasCardsInfo();

    const infraContent = infrastructureText.join(' ');
    const attrContent = blocks[0].texts.join(' ');

    const center = {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        toJSON: function () {
            return { lat: this.lat, lng: this.lng };
        },
    };

    if (projects === null) {
        return null;
    }

    return (<div className="areas-view-page">
        <Header/>
        <RequestModal showModal={showModal} closeModal={closeModal} modalText={modalText}
                      image={annaHorshunovaName} />
        <div className="areas-container">
            <div className="path">
                <Link to='/'>Home</Link>
                <div>{'->'}</div>
                <Link to='/areas'>Areas</Link>
                <div>{'->'}</div>
                <Link to={`/area/${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</Link>
            </div>

            <div className="area-baner">
                <div className="image-content">
                    <div
                        className="image"
                        style={{backgroundImage: `url(${images[0]})`}}
                    ></div>

                    <div className="content">
                        <div className="title">
                            <div>{title}</div>
                            <div>{titleText.map((text, index) => (
                                <div key={index}>{text}</div>
                            ))}
                            </div>
                        </div>
                        <div className="advantages">
                            <div className="advantage">{t("Mixed-Use Development")}</div>
                            <div className="advantage">{t("Strategic Location")}</div>
                            <div className="advantage">{t("Hub for Business and Finance")}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="baner-info active">
                <div className="content">
                    <div className="title">
                        <div>{title}</div>
                        <div>{titleText.map((text, index) => (
                            <div key={index}>{text}</div>
                        ))}
                        </div>
                    </div>
                    <div className="advantages">
                        <div className="advantage">{t("Mixed-Use Development")}</div>
                        <div className="advantage">{t("Strategic Location")}</div>
                        <div className="advantage">{t("Hub for Business and Finance")}</div>
                    </div>
                </div>
            </div>

            <div className="location-features">
                <div className="content">
                    <div className="title">{t("location-features")}</div>
                    <div className="description">
                        {locationText.map((text, index) => (
                            <div className="text" key={index}>
                                {text}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="image">
                    <img src={images[3]} alt=""/>
                </div>
            </div>

            <div className="location-features active">
                <div className="content">
                <div className="title">{t("location-features")}</div>
                    <div className="description">
                        {locationText.slice(0, 2).map((text, index) => (
                            <div className="text" key={index}>
                                {text}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="image">
                    <img src={images[3]} alt=""/>
                </div>

                <div className="content">
                    <div className="description">
                        {locationText.slice(2).map((text, index) => (
                            <div className="text" key={index}>
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="infrastructure">
                <Block
                    title={t("infrastructure")}
                    content={infraContent}
                />

                <Block
                    title={t("attractions")}
                    content={attrContent}
                />
            </div>

            <div className="gallery">
                <div className="image">
                    <img src={images[1]} alt=""/>
                </div>
                <div className="image">
                    <img src={images[2]} alt=""/>
                </div>
            </div>

            <div className="property">
                <div className="content">
                    <div>{blocks[1].title}</div>
                    <div className="description">
                        {blocks[1].texts.map((text, index) => (
                            <div key={index}>
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="map-container">
                <div className="content">
                    <div className="map">
                        <APIProvider apiKey={"AIzaSyAbaX7Vb6ERFTrWR4espV48g25lFRGGjIc"}>
                            <Map
                                zoom={14}
                                center={center}
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
                </div>
            </div>

            <div className="property">
                <div className="content">
                    <div>{blocks[2].title}</div>
                    <div className="description">
                        {blocks[2].texts.map((text, index) => (
                            <div key={index}>
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="areas-cards">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={14}
                    loop={true}
                    modules={[Navigation]}
                    className="mySimSwiper"
                    onInit={(swiper) => {
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 12,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        900: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 14,
                        },
                        1300: {
                            slidesPerView: 3,
                            spaceBetween: 14,
                        },
                        1450: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }
                    }}
                >
                    {cardInfo.map((card, index) => (
                        <SwiperSlide key={index}>
                            <AreaCard
                                key={index}
                                name={card.name}
                                description={card.description}
                                price={card.price}
                                image={card.image}
                                area={card.area}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="consolt-box">
                <GetConsult/>
            </div>
        </div>
        <Footer/>
    </div>)
}

export default AreasViewPage;