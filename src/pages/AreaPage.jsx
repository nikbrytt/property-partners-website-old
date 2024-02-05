import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Pages/business.scss"
import arrowLeft from "../assets/arrow-left-fill.svg";
import share from "../assets/share.svg";
import GetConsult from "../components/GetConsult";
import { useState } from "react";
import { useParams } from "react-router-dom";
import annaHorshunovaName from "../assets/teams/anna-horshunova-min.jpg";
import annaHorshunova from "../assets/teams/qr/anna-horshunova.png";
import RequestModal from "../components/RequestModal.jsx";

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

import centralPark from "../assets/Areas/apart-pages/bluewaters.png";
import centralPark1 from "../assets/Areas/apart-pages/bluewaters1.png";
import centralPark2 from "../assets/Areas/apart-pages/bluewaters2.png";

import damacHills from "../assets/Areas/apart-pages/damac-hills.png";
import damacHills1 from "../assets/Areas/apart-pages/damac-hills1.png";
import damacHills2 from "../assets/Areas/apart-pages/damac-hills2.png";

import dubaiHills from "../assets/Areas/apart-pages/damac-hills.png";
import dubaiHills1 from "../assets/Areas/apart-pages/damac-hills1.png";
import dubaiHills2 from "../assets/Areas/apart-pages/damac-hills2.png";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AreaPage() {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);

    const { t } = useTranslation();

    const pageTexy = {
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
            "images": [apart1, apart2, apart3],
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
                    "title": t('areas-business.blocks.0.title'),
                    "texts": [
                        t('areas-business.blocks.1.texts.0'),
                        t('areas-business.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('areas-business.blocks.2.title'),
                    "texts": [t('areas-business.blocks.2.texts.0')]
                }
            ]
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
            "images": [palm1, palm2, palm3],
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
                    "title": t('palm.blocks.0.title'),
                    "texts": [
                        t('palm.blocks.1.texts.0'),
                        t('palm.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('palm.blocks.2.title'),
                    "texts": [t('palm.blocks.2.texts.0')]
                }
            ]
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
            "images": [mbr, mbr1, mbr2],
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
                    "title": t('mbr.blocks.0.title'),
                    "texts": [
                        t('mbr.blocks.1.texts.0'),
                        t('mbr.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('mbr.blocks.2.title'),
                    "texts": [t('mbr.blocks.2.texts.0')]
                }
            ]
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
            "images": [creek1, creek2, creek3],
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
                    "title": t('creek.blocks.0.title'),
                    "texts": [
                        t('creek.blocks.1.texts.0'),
                        t('creek.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('creek.blocks.2.title'),
                    "texts": [t('creek.blocks.2.texts.0')]
                }
            ]
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
            "images": [marina1, marina2, marina3],
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
                    "title": t('marina.blocks.0.title'),
                    "texts": [
                        t('marina.blocks.1.texts.0'),
                        t('marina.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('marina.blocks.2.title'),
                    "texts": [t('marina.blocks.2.texts.0')]
                }
            ]
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
            "images": [lagoon1, lagoon2, lagoon3],
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
                    "title": t('lagoons.blocks.0.title'),
                    "texts": [
                        t('lagoons.blocks.1.texts.0'),
                        t('lagoons.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('lagoons.blocks.2.title'),
                    "texts": [t('lagoons.blocks.2.texts.0')]
                }
            ]
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
            "images": [jlt, jlt1, jlt2],
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
                    "title": t('jlt.blocks.0.title'),
                    "texts": [
                        t('jlt.blocks.1.texts.0'),
                        t('jlt.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('jlt.blocks.2.title'),
                    "texts": [t('jlt.blocks.2.texts.0')]
                }
            ]
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
            "images": [mjl, mjl1, mjl2],
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
                    "title": t('mjl.blocks.0.title'),
                    "texts": [
                        t('mjl.blocks.1.texts.0'),
                        t('mjl.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('mjl.blocks.2.title'),
                    "texts": [t('mjl.blocks.2.texts.0')]
                }
            ]
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
            "images": [mudon, mudon1, mudon2],
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
                    "title": t('mudon.blocks.0.title'),
                    "texts": [
                        t('mudon.blocks.1.texts.0'),
                        t('mudon.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('mudon.blocks.2.title'),
                    "texts": [t('mudon.blocks.2.texts.0')]
                }
            ]
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
            "images": [jvc, jvc1, jvc2],
            "blocks": [
                {
                    "title": t('jvc.blocks.0.title'),
                    "texts": [
                        t('jvc.blocks.0.texts.0'),
                        t('jvc.blocks.0.texts.1'),
                        t('jvc.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('jvc.blocks.0.title'),
                    "texts": [
                        t('jvc.blocks.1.texts.0'),
                        t('jvc.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('jvc.blocks.2.title'),
                    "texts": [t('jvc.blocks.2.texts.0')]
                }
            ]
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
            "images": [bluewaters, bluewaters1, bluewaters2],
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
                    "title": t('bluewaters.blocks.0.title'),
                    "texts": [
                        t('bluewaters.blocks.1.texts.0'),
                        t('bluewaters.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('bluewaters.blocks.2.title'),
                    "texts": [t('bluewaters.blocks.2.texts.0')]
                }
            ]
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
            "images": [centralPark, centralPark1, centralPark2],
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
                    "title": t('central-park.blocks.0.title'),
                    "texts": [
                        t('central-park.blocks.1.texts.0'),
                        t('central-park.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('central-park.blocks.2.title'),
                    "texts": [t('central-park.blocks.2.texts.0')]
                }
            ]
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
            "images": [damacHills, damacHills1, damacHills2],
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
                    "title": t('damac-hills.blocks.0.title'),
                    "texts": [
                        t('damac-hills.blocks.1.texts.0'),
                        t('damac-hills.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('damac-hills.blocks.2.title'),
                    "texts": [t('damac-hills.blocks.2.texts.0')]
                }
            ]
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
            "images": [dubaiHills, dubaiHills1, dubaiHills2],
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
                    "title": t('dubai-hills.blocks.0.title'),
                    "texts": [
                        t('dubai-hills.blocks.1.texts.0'),
                        t('dubai-hills.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('dubai-hills.blocks.2.title'),
                    "texts": [t('dubai-hills.blocks.2.texts.0')]
                }
            ]
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

    const { title, titleText, locationText, infrastructureText, images, blocks } = pageTexy[id];

    const [modalText, setModalText] = useState({
        tittleText: "",
        buttonText: ""
    });

    const closeModal = () => {
        setShowModal(false);
    };

    function copy(text) {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className="areas-page-wrapper">
            <Header />
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={modalText}
                image={annaHorshunovaName} />
            <div className="areas-page-container">
                <div className="back-container">
                    <Link to={"/"}>
                        <div className="back">
                            <img src={arrowLeft} alt="" />
                            Back
                        </div>
                    </Link>
                    <div onClick={() => copy("http://propart.ae/areas")} className="share">
                        <img src={share} alt="" />
                    </div>
                </div>

                <div className="main-content">
                    <div className="content-left">
                        <div className="block">
                            <div className="big-title">{title}</div>
                            <div className="description">
                                <div className="text">
                                    {titleText.map((text, index) => (
                                        <div key={index}>{text}</div>
                                    ))}
                                </div>
                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${images[0]})` }}
                                ></div>
                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${images[1]})` }}
                                ></div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="title">{t("location-features")}</div>
                            <div className="description">
                                {locationText.map((text, index) => (
                                    <div className="text" key={index}>
                                        {text}
                                    </div>
                                ))}
                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${images[2]})` }}
                                ></div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="title">{t("infrastructure")}</div>
                            <div className="description">
                                {infrastructureText.map((text, index) => (
                                    <div className="text" key={index}>
                                        {text}
                                    </div>
                                ))}
                                <div className="broker">
                                    <div className="image">
                                        <img src={annaHorshunovaName} alt="" />
                                    </div>
                                    <div className="get-consult-form">
                                        <div className="content">
                                            <div className="title-description">
                                                <div className="title">
                                                    <div>{t("r_req1")}</div>
                                                    <div>Anna Horshunova</div>
                                                </div>
                                                <div className="description">
                                                    {t("r_req2")}
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                <div className="button-white" onClick={() => window.open("tel:+971521038793")}>{t("r_req3")}</div>
                                                <div className="button-brown" onClick={() => {
                                                    setModalText({ tittleText: t("modalHeader"), buttonText: t("modalButton") })
                                                    setShowModal(true)
                                                }}>{t("r_req4")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-right">
                        {images.slice(0, 3).map((image, index) => (
                            <div
                                key={index}
                                className="image"
                                style={{ backgroundImage: `url(${image})` }}
                            ></div>
                        ))}
                        <div className="broker">
                            <div className="image">
                                <img src={annaHorshunovaName} alt="" />
                            </div>
                            <div className="get-consult-form">
                                <div className="content">
                                    <div className="title-description">
                                        <div className="title">
                                            <div>Real estate broker</div>
                                            <div>Anna Horshunova</div>
                                        </div>
                                        <div className="description">
                                            Off-plan properties, Investments, Commercial property, Mortgage
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <div className="button-white" onClick={() => window.open("tel:+971521038793")}>Contact agent</div>
                                        <div className="button-brown" onClick={() => {
                                            setModalText({ tittleText: t("modalHeader"), buttonText: t("modalButton") })
                                            setShowModal(true)
                                        }}>Request</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lower-container">
                    {blocks.map((block, index) => (
                        <div className="block" key={index}>
                            <div className="title">{block.title}</div>
                            {block.texts.map((text, textIndex) => (
                                <div key={textIndex} className="description">
                                    <div className="text">{text}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="get-consult-box">
                    <GetConsult></GetConsult>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default AreaPage