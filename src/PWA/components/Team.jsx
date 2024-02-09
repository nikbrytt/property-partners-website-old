import DynamicTruncatedText from "../../components/DynamicTruncatedText.jsx";
import {useState} from "react";
import alexLogachevName from "../../assets/teams/alex-logachev-min.jpg";
import qrAlex from "../../assets/teams/qr/qr-alex.svg";
import alekseiShyianName from "../../assets/teams/aleksei-shyian-min.jpg";
import alekseiShyian from "../../assets/teams/qr/aleksei-shyian.png";
import tykhovaTatianaName from "../../assets/teams/tykhova-tatiana-min.jpg";
import tykhovaTatiana from "../../assets/teams/qr/tykhova-tatiana.png";
import kristinaSokolovskayaName from "../../assets/teams/kristina-sokolovskaya-min.jpg";
import kristinaSokolovskaya from "../../assets/teams/qr/kristina-sokolovskaya.png";
import pavelDyninName from "../../assets/teams/pavel-dynin-min.jpg";
import propertyPartnersDynin from "../../assets/teams/qr/property-partners-dynin.png";
import annaHorshunovaName from "../../assets/teams/anna-horshunova-min.jpg";
import annaHorshunova from "../../assets/teams/qr/anna-horshunova.png";
import allaGerassimovaName from "../../assets/teams/alla-gerassimova-min.jpg";
import allaGerassimova from "../../assets/teams/qr/alla-gerassimova.png";
import dmitriyKoltsovName from "../../assets/teams/dmitriy-koltsov-min.jpg";
import dmitriyKoltsov from "../../assets/teams/qr/dmitriy-koltsov.png";
import ruslanGeisha from "../../assets/teams/ruslan-geisha.png";
import {useTranslation} from "react-i18next";
import '../styles/team.scss'

const Team = () => {
    const [visibleTeam,setVisibleTeam] = useState(2);
    const {t} = useTranslation();
    const team = [
        {
            "image": alexLogachevName, "name": t("Lohachov Oleksandr"), "position": t("Owner & CEO Property Partners Real Estate"), "qr": qrAlex,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Lohachov.vcf", "email": "lohachov@propart.ae",
            "social": {
                "telegram": "https://t.me/oleksandr_logachev",
                "instagram": "https://instagram.com/logachev_alexsandr?igshid=MzRlODBiNWFlZA==",
                "whatsapp": "https://wa.me/971588395135",
                "facebook": "https://www.facebook.com/logachev.alexsandr?mibextid=LQQJ4d",
                "youtube": "https://www.youtube.com/@logachev_alexsandr"
            }
        },
        {
            "image": alekseiShyianName, "name": t("Aleksei Shyian"), "position": t("Business Developer"), "qr": alekseiShyian,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Shyian.vcf", "email": "info@kristalexperts.com",
            "social": {
                "instagram": "https://instagram.com/dubai_oleksii_shyian?igshid=MzRlODBiNWFlZA==",
                "telegram": "https://t.me/brodubai",
                "whatsapp": "https://wa.me/971585952108",
                "linkedin": "https://www.linkedin.com/in/oleksii-shyian-86348b5b/"


            }
        },
        {
            "image": tykhovaTatianaName, "name": t("Tykhova Tatiana"), "position": t("Real estate broker"), "qr": tykhovaTatiana,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Tykhova.vcf", "email": "tykhova@propart.ae",
            "social": {
                "instagram": "https://instagram.com/taffeeta?igshid=NTc4MTIwNjQ2YQ==",
                "telegram": "https://t.me/+971522419898",
                "whatsapp": "https://wa.me/971522419898",
                "facebook": "https://www.facebook.com/profile.php?id=100090630440600&mibextid=LQQJ4d",
                "linkedin": "https://www.linkedin.com/in/tatiana-tykhova-2a7325135?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            }
        }
        ,
        {
            "image": kristinaSokolovskayaName, "name": t("Kristina Sokolovskaya"), "position": t("Owner & CEO Kristal Business Experts"), "qr": kristinaSokolovskaya,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Sokolovskaya.vcf", "email": "info@kristalexperts.com",
            "social": {
                "telegram": "https://t.me/+971529568390",
                "whatsapp": "https://wa.me/971529568390"
            }
        },
        {
            "image": pavelDyninName, "name": t("Pavel Dynin"), "position": t("Real estate broker"), "qr": propertyPartnersDynin,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/dynin.vcf", "email": "dynin@propart.ae",
            "social": {
                "telegram": "https://t.me/pavel_dynin",
                "instagram": "https://instagram.com/pavel.dynin?igshid=OGQ5ZDc2ODk2ZA==",
                "whatsapp": "https://wa.me/971585622362",
                "facebook": "https://www.facebook.com/csdus?mibextid=LQQJ4d"
            }
        },
        {
            "image": annaHorshunovaName, "name": t("Anna Horshunova"), "position": t("Real estate broker"), "qr": annaHorshunova,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Horshunova.vcf", "email": "Horshunova@propart.ae",
            "social": {
                "facebook": "https://www.facebook.com/annagorshunova?mibextid=LQQJ4d",
                "telegram": "https://t.me/annagorshunova",
                "whatsapp": "https://wa.me/971506585962",
                "instagram": "https://instagram.com/annagorshunova?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr",
            }
        },
        {
            "image": allaGerassimovaName, "name": t("Alla Gerassimova"), "position": t("Marketing specialist, content creator"), "qr": allaGerassimova,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Gerassimova.vcf", "email": "gerassimova@propart.ae",
            "social": {
                "telegram": "https://t.me/alla_gerassimova",
                "instagram": "https://instagram.com/a11gep?igshid=NTc4MTIwNjQ2YQ==",
                "whatsapp": "https://wa.me/971555728933",
            }
        },
        {
            "image": dmitriyKoltsovName, "name": t("Dmitriy Koltsov"), "position": t("Real estate broker"), "qr": dmitriyKoltsov,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Koltsov.vcf", "email": "koltsov@propart.ae",
            "social": {
                "telegram": "https://t.me/brokervdubae",
                "instagram": "https://instagram.com/brokervdubae",
                "whatsapp": "https://wa.me/971585589938",
            }
        },
        // {
        //     "image": aleksandraBobrova, "name": "Aleksandra Bobrova", "position": "Sales manager secondary market","qr":qrAlex,
        //     "social": {
        //         "telegram": "https://t.me/alexandraa_ab",
        //         "instagram":"https://www.instagram.com/alexandraa_ab?igsh=NTl0NTNiaHk5em9w",
        //         "whatsapp":"https://wa.me/971566510053",
        //     }
        // },
        {
            "image": ruslanGeisha, "name": t("Ruslan Geisha"), "position": t("Real estate broker"), "qr": qrAlex,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Geisha.vcf", "email": "geisha@propart.ae",
            "social": {
                "telegram": "https://t.me/ruslan_geisha",
                "instagram": "https://www.instagram.com/mister_geisha?igsh=eWs3aTluNmN0NXdq",
                "whatsapp": "https://wa.me/971503886822",
            }
        },
    ]

    return (
        <div className="team-pwa">
            <div className="prompt">
                <div className="tittle">Our team</div>
                <div onClick={() => setVisibleTeam(9)} className="see-more">See more</div>
            </div>
            <div className="content">
                {team.slice(0, visibleTeam).map((team, index) => (
                    <div className={"member"}>
                        <div className="image-container">
                            <img src={team.image}/>
                        </div>
                        <div className="information">

                            <div className="name"><DynamicTruncatedText text={team.name} customBreakpoints={{
                                600: 15,
                            }}/></div>
                            <div className="position"><DynamicTruncatedText text={team.position} customBreakpoints={{
                                600: 15,
                            }}/></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team
