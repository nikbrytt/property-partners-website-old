import Menu from "../components/Menu.jsx";
import '../styles/AreaPhone.scss'
import apart1 from "../../assets/Areas/apart-pages/apart1.png";
import {useState} from "react";
import AreasCardsInfo from "../../data/AreasCardsInfo.jsx";
import axios from "axios";
import Footer from "../components/Footer.jsx";
import DynamicTruncatedText from "../../components/DynamicTruncatedText.jsx";
import apart2 from "../../assets/Areas/apart-pages/apart2.png";
import apart3 from "../../assets/Areas/apart-pages/apart3.png";
import palm1 from "../../assets/Areas/apart-pages/palm1.png";
import palm2 from "../../assets/Areas/apart-pages/palm2.png";
import palm3 from "../../assets/Areas/apart-pages/palm3.png";
import mbr from "../../assets/Areas/apart-pages/mbr1.png";
import mbr1 from "../../assets/Areas/apart-pages/mbr2.png";
import mbr2 from "../../assets/Areas/apart-pages/mbr3.png";
import creek1 from "../../assets/Areas/apart-pages/creek1.png";
import creek2 from "../../assets/Areas/apart-pages/creek2.png";
import creek3 from "../../assets/Areas/apart-pages/creek3.png";
import marina1 from "../../assets/Areas/apart-pages/marina1.png";
import marina2 from "../../assets/Areas/apart-pages/marina2.png";
import marina3 from "../../assets/Areas/apart-pages/marina3.png";
import lagoon1 from "../../assets/Areas/lagoons1.png";
import lagoon2 from "../../assets/Areas/lagoons2.png";
import lagoon3 from "../../assets/Areas/lagoons3.png";
import jlt from "../../assets/Areas/jlt.png";
import jlt1 from "../../assets/Areas/jlt1.png";
import jlt2 from "../../assets/Areas/jlt2.png";
import mjl from "../../assets/Areas/apart-pages/mjl.png";
import mjl1 from "../../assets/Areas/apart-pages/mjl1.png";
import mjl2 from "../../assets/Areas/apart-pages/mjl2.png";
import mudon from "../../assets/Areas/apart-pages/mudon.png";
import mudon1 from "../../assets/Areas/apart-pages/mudon1.png";
import mudon2 from "../../assets/Areas/apart-pages/mudon2.png";
import jvc from "../../assets/Areas/apart-pages/jvc.png";
import jvc1 from "../../assets/Areas/apart-pages/jvc1.png";
import jvc2 from "../../assets/Areas/apart-pages/jvc2.png";
import bluewaters from "../../assets/Areas/apart-pages/bluewaters.png";
import bluewaters1 from "../../assets/Areas/apart-pages/bluewaters1.png";
import bluewaters2 from "../../assets/Areas/apart-pages/bluewaters2.png";
import centralPark from "../../assets/Areas/apart-pages/bluewaters.png";
import centralPark1 from "../../assets/Areas/apart-pages/bluewaters1.png";
import centralPark2 from "../../assets/Areas/apart-pages/bluewaters2.png";
import damacHills from "../../assets/Areas/apart-pages/damac-hills.png";
import damacHills1 from "../../assets/Areas/apart-pages/damac-hills1.png";
import damacHills2 from "../../assets/Areas/apart-pages/damac-hills2.png";
import dubaiHills from "../../assets/Areas/apart-pages/damac-hills.png";
import dubaiHills1 from "../../assets/Areas/apart-pages/damac-hills1.png";
import dubaiHills2 from "../../assets/Areas/apart-pages/damac-hills2.png";
import {useTranslation} from "react-i18next";
import {Link, useParams} from "react-router-dom";
import areaMap from "../../assets/Areas/map.png";
import palmMap from "../../assets/Areas/AreasPhoto/palm.png";
import mbrMap from "../../assets/Areas/AreasPhoto/mbr.png";
import creekMap from "../../assets/Areas/AreasPhoto/creek.png";
import dubaiMap from "../../assets/Areas/AreasPhoto/dubai.png";
import damacMap from "../../assets/Areas/AreasPhoto/damac.png";
import jltMap from "../../assets/Areas/AreasPhoto/jlt.png";
import mjlMap from "../../assets/Areas/AreasPhoto/mjl.png";
import mudonMap from "../../assets/Areas/AreasPhoto/mudon.png";
import jvcMap from "../../assets/Areas/AreasPhoto/jvc.png";
import bluewatersMap from "../../assets/Areas/AreasPhoto/bluewaters.png";
import cityWalkMap from "../../assets/Areas/AreasPhoto/city-walk.png";




const AreaPhone = ({handleMenuToggle}) => {
    const [showMore, setShowMore] = useState(false);
    const [showInfrMore, setShowInfrMore] = useState(null);
    const { id } = useParams();
    function CustomTooltip({ name, label, active, pv }) {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <div className="desc">{getIntroOfPage(label)}</div>
                </div>
            );
        }

        return null;
    }
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [dataSented, setDataSented] = useState('')
    const [activeFocus, setActiveFocus] = useState([false, false, false, false]);
    const { t } = useTranslation();

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
            lng: "55.26808",
            "Title": "Business Bay Dubai: Where Luxury Living Meets Dynamic Commerce",
            "MetaDescription": "Discover the epitome of opulence in Business Bay, Dubai's prominent business center. This dynamic hub seamlessly blends commercial and residential spaces, offering a vibrant urban environment. Explore key features such as its strategic location along the Dubai Water Canal, exceptional transport accessibility, and a well-developed infrastructure with five-star hotels, gourmet restaurants, and premium amenities. Delve into the diverse real estate landscape, from compact studios to luxurious penthouses, and experience the investment attractiveness that sets Business Bay apart. Explore the allure of Business Bay, where luxury living and thriving commerce converge seamlessly.",
            "Keywords": ["Business Bay Dubai", "Luxury Living", "Dynamic Commerce", "Mixed-Use Development", "Strategic Location", "Transport Accessibility", "Infrastructure", "Dubai Water Canal", "Real Estate Landscape", "Premium Amenities", "Investment Attractiveness", "Opulence", "Business Hub", "Residential Cluster"]
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
            lng: "55.15544118892634",
            "Title": "Palm Jumeirah Dubai: A Masterpiece of Luxurious Living on the Iconic Artificial Island",
            "MetaDescription": "Embark on a life of luxury and sophistication at Palm Jumeirah, Dubai's iconic artificial island shaped like a palm tree. Discover the epitome of opulence with luxurious properties, breathtaking views of the Arabian Gulf, and a captivating blend of residential, commercial, and entertainment spaces. Explore the strategic location, impressive architecture, and attractions, including pristine beaches, water sports, shopping malls, and the renowned Aquaventure Waterpark. Palm Jumeirah is a prestigious residential oasis, offering a beachfront lifestyle with unparalleled views and top-notch amenities. Experience the ultimate in Dubai living at Palm Jumeirah, where every moment is a masterpiece.",
            "Keywords": ["Palm Jumeirah Dubai", "Luxurious Living", "Artificial Island", "Iconic Landmark", "Residential Oasis", "Strategic Location", "Size and Architecture", "Attractions", "Infrastructure", "Beachfront Lifestyle", "Investment Attractiveness", "Top-notch Amenities", "Masterpiece Living", "Dubai Living"]
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
            lng: "55.290416067451176",
            "Title": "MBR City Dubai: Luxurious Living in the Heart of Mohammed Bin Rashid City",
            "MetaDescription": "Embark on a journey to MBR City, Dubai's premier development named after His Highness Sheikh Mohammed bin Rashid Al Maktoum. This master-planned marvel spans over 54 million square feet, seamlessly blending residential, commercial, and leisure spaces with a focus on luxury, comfort, and sustainability. Explore the strategic location, architectural diversity, world-class amenities, and attractions like Cityland Mall and Meydan One Mall. With connectivity to Downtown Dubai, Business Bay, and Dubai Hills Estate, MBR City offers a wealth of shopping, dining, and entertainment options. Experience a luxurious haven in the making, where every detail is crafted for a life of luxury and comfort.",
            "Keywords": ["MBR City Dubai", "Luxurious Living", "Mohammed Bin Rashid City", "Master-Planned Community", "Strategic Location", "Architectural Diversity", "World-Class Amenities", "Attractions", "Connectivity", "Kite Beach", "Diverse Properties", "Comfortable Lifestyle", "Upscale Living", "Dubai Premier Development"]
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
            lng: "55.36208518670469",
            "Title": "Dubai Creek Harbour: Luxury Living on the Historic Banks of Dubai Creek",
            "MetaDescription": "Embark on a journey to Dubai Creek Harbour, a captivating mixed-use development on the historic banks of Dubai Creek, the birthplace of Dubai. Discover a riverside marvel with a master-planned community seamlessly blending residential, commercial, and leisure spaces. Explore the strategic location, architectural splendor, and world-class amenities, including the iconic Dubai Creek Tower. With excellent connectivity to Downtown Dubai, Business Bay, and Dubai Festival City, Dubai Creek Harbour offers a growing oasis of luxury. Experience a sought-after destination with stunning views, diverse properties, and convenient access to key areas. Choose Dubai Creek Harbour for a luxurious lifestyle where comfort meets history.",
            "Keywords": ["Dubai Creek Harbour", "Luxury Living", "Historic Banks", "Riverside Marvel", "Mixed-Use Development", "Strategic Location", "Architectural Splendor", "World-Class Amenities", "Dubai Creek Tower", "Shopping Destinations", "Connectivity", "Recreational Spaces", "Upscale Living", "Sought-After Destination", "Diverse Properties", "Historic Dubai Creek"]
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
            lng: "55.13167305094422",
            "Title": "Dubai Marina: A Waterfront Oasis and Vibrant Cosmopolitan Hub",
            "MetaDescription": "Experience the allure of Dubai Marina, a dynamic waterfront community along the Persian Gulf shoreline in Dubai. Discover a waterfront marvel with mixed-use development seamlessly blending residential, commercial, and recreational spaces. Explore the strategic location, impressive architecture, and world-class amenities like Dubai Marina Mall and outdoor activities along the Marina Promenade. With excellent connectivity to neighboring communities and popular beaches, Dubai Marina offers a vibrant cosmopolitan lifestyle. Whether for residence or investment, Dubai Marina is a harmonious blend of luxury and lifestyle, where the city meets the sea.",
            "Keywords": ["Dubai Marina", "Waterfront Oasis", "Mixed-Use Development", "Strategic Location", "Impressive Architecture", "Dubai Metro", "Shopping Haven", "Outdoor Activities", "Connectivity", "Beach Access", "Investment Attractiveness", "Cosmopolitan Community", "Luxury Living", "Persian Gulf Shoreline"]

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
            lng: "55.240526772734434",
            "Title": "Damac Lagoons Dubai: A Celebration of Luxury Living in a Waterfront Oasis",
            "MetaDescription": "Discover Damac Lagoons, a luxurious waterfront residential community in Dubai's International Media Production Zone (IMPZ), crafted by Damac Properties. Explore a mixed-use development where luxury meets tranquility, featuring modern amenities, breathtaking waterfront views, and a range of residential properties from apartments to villas. Enjoy world-class amenities, parks, and a marina, creating a harmonious blend of convenience and leisure. With proximity to landmarks like Dubai Miracle Garden and surrounding communities, Damac Lagoons is your gateway to luxury living. Whether for residence or investment, experience the epitome of Dubai's exclusive lifestyle at Damac Lagoons, where every day is a celebration of luxury and comfort.",
            "Keywords": ["Damac Lagoons Dubai", "Waterfront Oasis", "Luxury Living", "Mixed-Use Development", "Strategic Location", "Architectural Excellence", "Luxurious Real Estate", "Amenities and Infrastructure", "Retail and Recreation", "Outdoor Activities", "Nearby Communities", "Transportation", "Investment Attractiveness", "Exclusive Lifestyle", "Celebration of Luxury and Comfort"]
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
            lng: "55.145857689647535",
            "Title": "Jumeirah Lake Towers (JLT) Dubai: A Dynamic Hub for Vibrant Living",
            "MetaDescription": "Discover the vibrancy of Jumeirah Lake Towers (JLT), a large mixed-use development in the heart of Dubai. Explore a dynamic urban environment with 80 high-rise towers, man-made lakes, and a mix of residential, commercial, and retail properties. Benefit from JLT's strategic location adjacent to Dubai Marina, offering easy access to landmarks, shopping centers like Dubai Marina Mall, and attractions like Jumeirah Beach. Enjoy a well-rounded living experience with modern amenities, walkways, and green spaces. JLT stands as a dynamic and multicultural area, presenting a vibrant lifestyle for residents and investment opportunities. Explore the possibilities and embrace the dynamic lifestyle that Jumeirah Lake Towers has to offer!",
            "Keywords": ["Jumeirah Lake Towers Dubai", "Mixed-Use Development", "Vibrant Living", "Strategic Location", "Amenities and Infrastructure", "Shopping Extravaganza", "Nearby Communities", "Beach Access", "Investment Attractiveness", "Dynamic Lifestyle", "Multicultural Community", "Dubai Marina", "Residential Properties", "Investment Opportunities"]
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
            lng: "55.192893920025064",
            "Title": "Madinat Jumeirah Living Dubai: Luxurious Residences in the Heart of Jumeirah District",
            "MetaDescription": "Explore the epitome of luxury at Madinat Jumeirah Living, a premium residential development in Dubai's prestigious Jumeirah district by Dubai Holding. Discover luxurious apartments, townhouses, and villas with high-end finishes and breathtaking views of the iconic Burj Al Arab. Experience a lifestyle of convenience with community facilities, fitness amenities, and healthcare access. Indulge in a shopping extravaganza at Souk Madinat Jumeirah and enjoy proximity to popular areas like Dubai Marina. Madinat Jumeirah Living not only offers a sought-after residence but also presents a promising investment opportunity in the heart of Dubai.",
            "Keywords": ["Madinat Jumeirah Living Dubai", "Luxurious Residences", "Jumeirah District", "Premium Residential Development", "Iconic Views", "Infrastructure and Amenities", "Shopping Extravaganza", "Nearby Communities", "Investment Attractiveness", "Strategic Location", "Dubai Holding", "Burj Al Arab", "Souk Madinat Jumeirah", "Investment Opportunity"]
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
            lng: "55.26420037798617",
            "Title": "Mudon Dubai: Tranquil Living in a Private Oasis by Dubai Properties",
            "MetaDescription": "Discover Mudon, a private enclave within Dubai's expansive Dubailand, offering a unique blend of serene country life in a low-rise setting. Developed by Dubai Properties, Mudon stands out as a classic low-rise development with diverse living options, including duplexes, townhouses, and villas. Explore the strategic location at the intersection of Al Qudra Road and Emirates Road, providing residents with tranquility and connectivity. Enjoy a green oasis at the expansive Central Park and diverse recreational amenities. With a diverse real estate portfolio, Mudon is an ideal living choice for expats, families, and individuals seeking a tranquil yet well-connected lifestyle in Dubai.",
            "Keywords": ["Mudon Dubai", "Tranquil Living", "Private Oasis", "Dubai Properties", "Dubailand", "Low-Rise Development", "Strategic Location", "Central Park", "Diverse Living Options", "Recreational Amenities", "Real Estate Portfolio", "Investment Attractiveness", "Quiet Living", "Well-Connected Lifestyle", "Dubai's Real Estate Landscape"]
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
            lng: "55.210765198471826",
            "Title": "Jumeirah Village Circle (JVC): Your Gateway to Vibrant Living and Investment Opportunities in Dubai",
            "MetaDescription": "Explore the charms of Jumeirah Village Circle (JVC), a blossoming community strategically nestled in the heart of Dubai. With a mix of residential options, including apartments, villas, and townhouses, JVC is designed as a self-contained neighborhood. Discover a flourishing oasis of amenities, outdoor activities, and landmarks, including The Circle Mall, Dubai Autodrome, and Dubai Butterfly Garden. JVC's strategic location, excellent amenities, and diverse real estate options make it an attractive destination for expats, young families, and investors looking for a thriving lifestyle in Dubai.",
            "Keywords": ["Jumeirah Village Circle", "JVC Dubai", "Vibrant Living", "Investment Opportunities", "Self-Contained Neighborhood", "Residential Options", "Amenities", "Outdoor Activities", "Landmarks", "The Circle Mall", "Dubai Autodrome", "Dubai Butterfly Garden", "Strategic Location", "Diverse Real Estate", "Thriving Lifestyle", "Dubai's Real Estate Landscape"]
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
            lng: "55.11852342246321",
            "Title": "Bluewaters Island: Luxury Redefined in Dubai's Coastal Paradise",
            "MetaDescription": "Explore the allure of Bluewaters Island, an opulent artificial island within Dubai Marina, crafted by Meraas. Discover a harmonious blend of residential, entertainment, beach, shopping, and hotel zones. The iconic Dubai Eye, world's tallest wheel at 210 meters, adds to the island's charm. Bluewaters Island offers low-rise residential complexes, including apartments, penthouses, townhouses, and villas, providing a luxurious lifestyle with premium amenities. Limited availability makes real estate on Bluewaters a highly profitable and exclusive investment opportunity in Dubai.",
            "Keywords": ["Bluewaters Island", "Dubai Marina", "Luxury Real Estate", "Dubai Eye", "Artificial Island", "Residential Complexes", "Premium Amenities", "Limited Availability", "Investment Opportunity", "Meraas", "Sophisticated Lifestyle", "Coastal Paradise", "Exclusive Destination", "Profitable Investment", "Dubai's Real Estate"]
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
            lng: "55.26059454555963",
            "Title": "Central Park: Tranquil Suburban Living in Mohammed bin Rashid City",
            "MetaDescription": "Explore Central Park, an elite residential community in Mohammed bin Rashid City, offering a tranquil suburban lifestyle. Positioned strategically with easy access to major thoroughfares, Central Park provides a comprehensive living experience with a range of amenities. Discover comfortable townhouses and apartments, showcasing spacious designs and premium features. Ideal for residents seeking serenity without compromising on modern comforts. Central Park's well-developed infrastructure and investment potential make it a tenant's delight for both short-term and long-term rentals in Dubai.",
            "Keywords": ["Central Park", "Mohammed bin Rashid City", "Tranquil Living", "Suburban Lifestyle", "Strategic Location", "Comprehensive Amenities", "Comfortable Townhouses", "Premium Apartments", "Investment Potential", "Well-developed Infrastructure", "Tenant's Delight", "Short-term Rentals", "Long-term Rentals", "Dubai Real Estate"]
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

    const { title, titleText, locationText, infrastructureText, images, blocks, lat, lng, Title, MetaDescription, Keywords } = pageTexy[id];


    function sentData() {
        let data = JSON.stringify({
            "email": mail,
            "phone": phone,
            "name": name,
            "additional": "Additional information here"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://contact.propart.ae/append-data',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
            .then((response) => {
                setName('')
                setPhone('')
                setMail('')
                setDataSented(true)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleReadMoreClick = () => {
        setShowMore(!showMore);
    };

    const AreasPhoneCard = ({name, description, price, image, area}) => {
        return (
            <Link to={`/phone/${area}`} className="areas-phone-card">
                <div className="image">
                    <img src={image} alt="" />
                    <div className="price">{price}</div>
                </div>
                <div className="title">
                    <div className={"name"}>{name}</div>
                    <div><DynamicTruncatedText text={description} customBreakpoints={
                        {
                            650: 20,
                            600: 24
                        }
                    } /><DynamicTruncatedText/></div>
                </div>
            </Link>
        );
    };

    const cardInfo = AreasCardsInfo();
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    return (<div className="area-phone">
        <Menu handleMenuToggle={handleMenuToggle}/>
        <div className="main-title">
            <div>{title}</div>
            <div>
                {titleText.map(text=> (
                    text
                ))}
            </div>
        </div>

        <div className="bener-photo">
            <img src={images[0]} alt=""/>

            <div className="slider-options">
                <div className="option">Use Development</div>
                <div className="option">Strategic Location</div>
                <div className="option">Hub for Business and Finance</div>
            </div>
        </div>

        <div className="location">
            <div className="content">
                <div>Location Features</div>
                <div className="description">
                    {showMore ? locationText.map(text => text)
                        : locationText[0]}
                    <span className="read-more" onClick={handleReadMoreClick}>
                            {showMore ? "Hide" : "Read more"}
                        </span>
                </div>
                <img src={images[1]} alt=""/>
            </div>
        </div>

        <div className="infrastructure">
            <div className="content">
                <div className="title-buttons">
                    <div className="name">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M10.0026 15.8345H11.6693V5.00115L16.9976 7.28448C17.1476 7.34878 17.2754 7.45571 17.3652 7.592C17.455 7.72829 17.5027 7.88795 17.5026 8.05115V15.8345H19.1693V17.5011H0.835938V15.8345H2.5026V4.70948C2.50258 4.54824 2.54934 4.39047 2.6372 4.25527C2.72506 4.12008 2.85026 4.01328 2.9976 3.94781L9.41677 1.09448C9.48028 1.06627 9.54983 1.05438 9.6191 1.05992C9.68837 1.06545 9.75516 1.08821 9.81338 1.12615C9.87161 1.16408 9.91942 1.21597 9.95247 1.2771C9.98552 1.33823 10.0028 1.40666 10.0026 1.47615V15.8345Z"
                                fill="#C29773"/>
                        </svg>
                        Infrastructure
                    </div>
                    {
                        !(showInfrMore === '0') && <div className="read-more" onClick={() => setShowInfrMore('0')}>
                            Read more
                        </div>
                    }
                </div>
                {
                    (showInfrMore === '0') ? <div className="description">
                        {infrastructureText.map(text => text)}
                    </div> : <div className="description">
                        {infrastructureText[0]}
                    </div>
                }
            </div>
            {
                (showInfrMore === '0') && <div className="read-less" onClick={() => setShowInfrMore(null)}>
                    Read less
                </div>
            }
        </div>

        <div className="infrastructure attractions">
            <div className="content">
                <div className="title-buttons">
                    <div className="name">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M9.16579 15.832V10.832L7.49912 9.9987V7.4987H12.4991V9.9987L10.8325 10.832V15.832L14.9991 16.6654V18.332H4.99912V16.6654L9.16579 15.832ZM8.33245 1.8512V0.832031H11.6658V1.8512C13.0953 2.17759 14.3978 2.91572 15.4124 3.97435C16.4269 5.03297 17.109 6.36569 17.3744 7.80777C17.6397 9.24985 17.4767 10.7381 16.9054 12.0885C16.3341 13.4389 15.3796 14.5923 14.16 15.4062L13.235 14.0195C14.2765 13.325 15.0671 12.3138 15.4897 11.1353C15.9122 9.95687 15.9445 8.67373 15.5817 7.47554C15.2188 6.27735 14.4801 5.22769 13.4747 4.48168C12.4693 3.73567 11.2506 3.3329 9.9987 3.3329C8.74678 3.3329 7.52807 3.73567 6.52269 4.48168C5.51731 5.22769 4.7786 6.27735 4.41575 7.47554C4.0529 8.67373 4.08516 9.95687 4.50775 11.1353C4.93035 12.3138 5.72086 13.325 6.76245 14.0195L5.83829 15.4062C4.6186 14.5923 3.66412 13.4389 3.09285 12.0885C2.52157 10.7381 2.35853 9.24985 2.62387 7.80777C2.88922 6.36569 3.57133 5.03297 4.58588 3.97435C5.60043 2.91572 6.90295 2.17759 8.33245 1.8512V1.8512Z"
                                fill="#C29773"/>
                        </svg>
                        {blocks[0].title}
                    </div>
                    {
                        !(showInfrMore === '1') && <div className="read-more" onClick={() => setShowInfrMore('1')}>
                            Read more
                        </div>
                    }
                </div>
                {
                    (showInfrMore === '1') ? <div className="description">
                        {blocks[0].texts.map(text => text)}
                    </div> : <div className="description">
                        {blocks[0].texts[0]}
                    </div>
                }
            </div>
            {
                (showInfrMore === '1') && <div className="read-less" onClick={() => setShowInfrMore(null)}>
                    Read less
                </div>
            }
        </div>

        <div className="two-images">
            <img src={images[1]} alt=""/>
            <img src={images[2]} alt=""/>
        </div>

        <div className="main-title main-title-second">
            <div>{blocks[1].title}</div>
            <div>{blocks[1].texts.map(text => text)}</div>
        </div>

        <div className="location">
            <div className="content">
                <div>{blocks[2].title}</div>
                <div className="description">
                    {blocks[2].texts.map(text => text)}
                </div>
                <img src={images[3]} alt=""/>
            </div>
        </div>

        <div className="areas-phone-cards">
            {shuffleArray(cardInfo).map((area, index) => (
                <AreasPhoneCard key={index}
                                name={area.name}
                                description={area.description}
                                price={area.price}
                                image={area.image}
                                area={area.area}/>
            ))}

        </div>

        <div className="get-in-touch">
            <div className="prompt">
                <div className="tittle">Get a free consultation individual calculation</div>
            </div>
            <div className="content">
                <div className={`input ${activeFocus[0] ? "active" : ""}`}>
                    <input
                        type="text"
                        placeholder={"Name"}
                        onFocus={() => setActiveFocus([true, false, false, false])}
                        onBlur={() => setActiveFocus([false, false, false, false])}
                        value={name} onChange={(e) => {
                        setName(e.target.value)
                        setDataSented(false)
                    }}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M20 22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z"
                            fill="#CACACA"
                        />
                    </svg>
                </div>
                <div className={`input ${activeFocus[1] ? "active" : ""}`}>
                    <input
                        type="text"
                        placeholder={"Phone number"}
                        onFocus={() => setActiveFocus([false, true, false, false])}
                        onBlur={() => setActiveFocus([false, false, false, false])}
                        value={phone} onChange={(e) => {
                        setPhone(e.target.value)
                        setDataSented(false)
                    }}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"
                            fill="#CACACA"
                        />
                    </svg>
                </div>
                <div className="send" onClick={sentData}>
                    Send
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M10.0002 15.172L19.1922 5.979L20.6072 7.393L10.0002 18L3.63623 11.636L5.05023 10.222L10.0002 15.172Z"
                            fill="white"/>
                    </svg>
                </div>
            </div>
        </div>

        <Footer active={""}/>
    </div>)
}


export default AreaPhone