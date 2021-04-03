import React from "react";
import { FontAwesomeIcon as FwIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserTimes, faUserPlus, faUserCheck, faSpinner, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faAmazon , faAngular, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export const App = () => {

  return (
    <>
      <h1>Free Soild</h1>
      {/* tamaños : xs, lg, 1x...10x  */}
      <FwIcon icon={faUser} />
      <FwIcon icon={faUserTimes} />
      <FwIcon icon={faUserPlus} />
      <FwIcon icon={faUserCheck} />
      <FwIcon icon={faUserCheck} />

      <h1>Propiedades</h1>
      <h2>Tamaños:</h2>
      {/* tamaños : xs, lg, 1x...10x  */}
      <FwIcon icon={faAngular} size="xs" />
      <FwIcon icon={faAngular} size="lg" />
      <FwIcon icon={faAngular} size="3x" />
      <FwIcon icon={faAngular} size="6x" />
      <FwIcon icon={faAngular} size="10x" />
      <h2>Rotación:</h2>
      <FwIcon icon={faAmazon} size="3x" rotation={45} />
      <FwIcon icon={faAmazon} size="3x" rotation={90} />
      <FwIcon icon={faAmazon} size="3x" rotation={180} />
      <FwIcon icon={faAmazon} size="3x" rotation={270} />
      <h2>Posicionamiento:</h2>
      <FwIcon icon={faAmazon} size="3x" flip="horizontal" />
      <FwIcon icon={faAmazon} size="3x" flip="vertical" />
      <FwIcon icon={faAmazon} size="3x" flip="both" />
      <h2>Spinner:</h2>
      <FwIcon icon={faSpinner} size="2x" spin/>
      <FwIcon icon={faSpinner} size="2x" pulse />
      <FwIcon icon={faSyncAlt} size="2x" spin />
      <FwIcon icon={faSyncAlt} size="2x" pulse />
      <FwIcon icon={faInstagram} size="2x" spin />
      <FwIcon icon={faInstagram} size="2x" pulse />
      <h2>Color:</h2>
      <FwIcon icon={faFacebook} size="2x" color="yellow" />
      <FwIcon icon={faFacebook} size="2x" color="blue" />
      <FwIcon icon={faFacebook} size="2x" color="red" />
      <FwIcon icon={faFacebook} size="2x" color="#12C5A3 " />
    </>
  );
  
};
