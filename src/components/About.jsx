import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <span className="hash-span" id="about"></span>
      <div className="flex sm:flex-row flex-col w-full h-full mx-auto sm:mt-10">
        <div className="flex sm:flex-row  items-center flex-col w-full mx-auto sm:items-end ">
          <h1 className=" text-[#915eff] font-black uppercase   lg:text-[200px] sm:text-[90px] xs:text-[60px] text-[60px] sm:leading-[.75] lg:leading-[.75] mt-2">
            Nous
          </h1>
          <h4 className="text-[#dfd9ff]   font-medium lg:text-[40px]  sm:text-[25px]  xs:text-[30px] text-[26px] sm:leading-[1] lg:leading-[1]  sm:items-end sm:ml-3 sm:tracking-widest tracking-wide	uppercase">
            NE VENDS PAS DE FILM, <br /> DONNER DES
            <span className=" px-2 ml-2 inline-block relative w-max sm:px-2   after:content-[''] after:absolute after:w-full after:h-[40%] after:left-0 after:bottom-0 after:skew-x-[20deg] after:z-[-1] after:bg-[#915eff]  ">
              ÉMOTIONS
            </span>
          </h4>
        </div>
      </div>
      <div>
        <div
          className={`${styles.padding}  flex flex-row sm:mt-10 justify-center`}
        >
          <div className="flex flex-col flex-grow-0 h-full w-full sm:max-w-[30%]">
            <p className="sm:mt-5 text-[#dfd9ff]   font-medium lg:text-[18px]  sm:text-[15px]  xs:text-[15px]  text-[26px] tracking-wide ">
              Custom Wrap Design est l'une des meilleures entreprises
              d'habillage de véhicules à Miami. Nous nous sommes fait un nom en
              raison de la qualité inégalée de l'emballage, des prix abordables
              et des commentaires incroyables de nos clients.
            </p>
            <p className="sm:mt-5 text-[#dfd9ff]   font-medium lg:text-[18px]  sm:text-[15px]  xs:text-[15px] sm:block hidden">
              Nous croyons sincèrement que nos habillages de véhicules apportent
              chaque jour joie et satisfaction à nos clients. Nous créons les
              designs d'habillage de voiture les plus vifs et les plus
              accrocheurs à Miami qui sont vraiment incroyables.
            </p>
            <p className="sm:mt-5 text-[#dfd9ff]   font-medium lg:text-[18px]  sm:text-[15px]  xs:text-[15px] sm:block hidden">
              Nous utilisons les meilleurs matériaux de l'industrie et tous les
              services que nous fournissons sont certifiés et sous licence.
              L'équipe CWD de professionnels formés à l'habillage de véhicules
              travaille dur chaque jour pour réaliser les projets personnalisés
              les plus complexes.
            </p>
          </div>
          <div className="sm:ml-3 flex flex-col flex-grow h-full sm:max-w-[60%]">
            <p className="sm:mt-5 text-[#dfd9ff]   font-medium lg:text-[18px]  sm:text-[15px]  xs:text-[15px] sm:block hidden">
              Nous sommes là pour vous aider à faire le bon choix pour votre
              véhicule et votre budget, et sommes fiers d'offrir des résultats
              de haute qualité dans un court délai d'exécution.
            </p>
            <p className="sm:mt-5 text-[#dfd9ff]   font-medium lg:text-[18px]  sm:text-[15px]  xs:text-[15px] sm:block hidden">
              Chez Custom Wrap Design, nous proposons des habillages de
              véhicules complets pour les véhicules personnels ou les véhicules
              de flotte à usage commercial et publicitaire.
            </p>
            <p className="sm:mt-5 text-[#dfd9ff]   font-medium lg:text-[18px]  sm:text-[15px]  xs:text-[15px] sm:block hidden">
              Custom Wrap Design utilise fièrement les vinyles 3M, Arlon,
              Oracal, Hexis et Avery Dennison.
            </p>
            <p className="sm:mt-5 text-[#dfd9ff]   font-medium lg:text-[18px]  sm:text-[15px]  xs:text-[15px] sm:block hidden">
              Nous pouvons envelopper votre véhicule dans n'importe quelle
              couleur ou finition, y compris les finitions chromées, mates,
              satinées, en fibre de carbone ou en métal brossé, le tout avec une
              garantie d'un an et une satisfaction garantie à 100 %.
            </p>
            <p className="sm:mt-5 text-[#dfd9ff]   font-medium lg:text-[18px]  sm:text-[15px]  xs:text-[15px] sm:block hidden">
              Chez Custom Wrap Design, nous fournissons les meilleurs services
              d'habillage de voiture à Miami tout en proposant des impressions
              graphiques personnalisées et des décalcomanies de voiture pour
              tous les types de véhicules et des habillages de jambage de porte
              pour un changement de couleur complet.
            </p>
            <p className="sm:mt-5 text-[#dfd9ff]   font-medium lg:text-[18px]  sm:text-[15px]  xs:text-[15px] sm:block hidden">
              Nos habillages de véhicules complets de haute qualité donnent aux
              clients l'émotion d'avoir une toute nouvelle voiture. C'est un
              moyen efficace de faire de la publicité et de créer votre propre
              marque, et vous pouvez toujours être sûr que la peinture de votre
              voiture est en sécurité sous le film.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
