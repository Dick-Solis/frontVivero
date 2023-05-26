import styled from "@emotion/styled";
import flor from "../../assets/flor2.jpg";
import { useState } from "react";
import {FaShoppingCart,FaSearch} from "react-icons/fa";
import {AiFillHeart} from "react-icons/ai"

//#region
  const CardContainer = styled.div`
    position: relative;
    width: 344px;
    border-radius: 16px;
    overflow: hidden;

    img {
      display: block;
      opacity: 1;
      width: 100%;
      height: auto;
      transition: 0.5s;
      border-radius: 16px;
    }

    &:hover img {
      opacity: 1.5;
      scale: 1.5;
    }
  `;

  const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: ${props => (props.show ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.35);
    transition: 0.5s;
    cursor: pointer;
  `;

  const OverlayButton = styled.button`
    /* color: white;
    background-color: black;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    z-index: 2; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #136047;
    border-radius: 50%;
    color: white;
    border: none;
    padding: 20px;
    cursor: pointer;
    :hover{
      background-color: #0f9068;
    }
  `;

  const ContentButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `;
//#endregion

export function CardPlant() {
  const style = {
    fontSize: "25px",
  }
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  return (
    <CardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={flor} alt="planta" />
      <Overlay show={showOverlay}>
        <ContentButtons>
          <OverlayButton><FaShoppingCart style={style}/></OverlayButton>
          <OverlayButton><FaSearch style={style}/></OverlayButton>
          <OverlayButton><AiFillHeart style={style}/></OverlayButton>
        </ContentButtons>
      </Overlay>
    </CardContainer>
  );
}





