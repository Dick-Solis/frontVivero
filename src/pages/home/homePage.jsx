import styled from "@emotion/styled";
import cargandoPlanta from "../../assets/p-01.jpg";
import marcoFlores from "../../assets/marcoFlores.jpg";
import arregloRosas from "../../assets/arregloRosas.jpg";
import suculentas from "../../assets/suculentas.jpg";
import plantaJardin from "../../assets/plantaJardin.jpg";
import arbol from  "../../assets/Arbol.jpg";
import {RiLockPasswordFill,RiPlantFill} from "react-icons/ri"
import {AiFillTag} from "react-icons/ai";
import { CardPlant } from "../../components/card/cardFlor";
import { Footer } from "../../components/footer/footer";


//#region
const StyledHeader = styled.header`
    /* width: 100vw; */
    height: calc(100vh + 80px);
    background-image: url(${cargandoPlanta});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-flow: row nowrap; */
    padding: 20px;
    margin-bottom: 10px;
    font-family: "Caveat";
  `;
const StyledContentHeader = styled.div`
    border: 5px solid rgba(255, 255, 255, 0.8);
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    width: 100%;
    max-width: 500px;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    padding: 10px;
    backdrop-filter: blur(5px);
  `;

const TitleContent = styled.h1`
    font-size: 70px;
    color: white;
  `;

const ButtonLink = styled.a`
    width: 175px;
    height: 45px;
    border: none;
    border-radius: 20px;
    padding: 10px 25px;
    margin-top: 25px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s;
    text-align: center;
    background: #fff;
    color: #22ad7f;
    :hover{
      transform: scale(1.1);
    }
  `;

  const StyledFlores = styled.section`
    background-image: url(${marcoFlores});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    padding: 0 10px;
    gap: 10px;
    font-family: "Caveat";
    margin-bottom: 20px;
  `;

  const ContentStyledCards = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    gap: 15px;
  `;

  const CardsContentFisrt = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `;

  const StyledCardUno = styled.article`
    background-image: url(${arregloRosas});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    align-items: center;
    width: 300px;
    min-height: 300px;
  `;

  const StyledCardDos = styled.article`
    background-image: url(${suculentas});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    width: 300px;
    min-height: 300px;
  `;

  const StyledCardTres = styled.article`
    background-image: url(${plantaJardin});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    align-items: center;
    width: 350px;
    height: 615px;
  `;

  const StyledCardCuatro = styled.article`
    background-image: url(${arbol});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    width: 350px;
    height: 615px;
  `;


  const TitleCard = styled.h2`
    font-size: 60px;
    color: white;
  `;
  
  const TextCard = styled.p`
    font-size: 25px;
    color: white;
  `;

  const ContentStyledIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: monospace;
    flex-wrap: wrap;
    gap: 70px;
  `;

  const ContentIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const ContentProducts = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Caveat";
    text-align: center;
    margin: 50px;
  `;

  const TitleContentProducts = styled.h2`
    font-size: 50px;
  `;

  const DescriptionContentProducts = styled.span`
    font-size: 25px;
  `;

  const ContentCards = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    @media (max-width: 1024px){
      flex-wrap: wrap;
    }
  `;
//#endregion

export function HomePage() {
  const style = {
    fontSize: "40px",
  }
  return (
    <>
      <StyledHeader>
        <StyledContentHeader>
          <TitleContent>Vivero</TitleContent>
          <ButtonLink>Más</ButtonLink>
        </StyledContentHeader>
      </StyledHeader>

      <StyledFlores>
        <ContentStyledCards>
          <CardsContentFisrt>
            <StyledCardUno>
              <TitleCard>Mejores</TitleCard>
              <TextCard>Colecciones</TextCard>
            </StyledCardUno>
            <StyledCardDos>
              <TitleCard>Mejores</TitleCard>
              <TextCard>Colecciones</TextCard>
            </StyledCardDos>
          </CardsContentFisrt>

          <StyledCardTres>
            <TitleCard>Mejores</TitleCard>
            <TextCard>Colecciones</TextCard>
          </StyledCardTres>
          <StyledCardCuatro>
            <TitleCard>Mejores</TitleCard>
            <TextCard>Colecciones</TextCard>
          </StyledCardCuatro>
        </ContentStyledCards>
      </StyledFlores >

      <ContentStyledIcons>
          <ContentIcon>
            <RiLockPasswordFill style={style}/>
            <h4>Seguridad Garantizada</h4>
          </ContentIcon>

          <ContentIcon>
            <AiFillTag style={style}/>
            <h4>Calidad en Nuestros Productos</h4>
          </ContentIcon>

          <ContentIcon>
            <RiPlantFill style={style}/>
            <h4>Variedad de Plantas</h4>
          </ContentIcon>
      </ContentStyledIcons>

      <ContentProducts>
        <TitleContentProducts>Principales Productos</TitleContentProducts>
        <DescriptionContentProducts>Calidad Garantizada</DescriptionContentProducts>
        <ContentCards>
          <CardPlant/>
          <CardPlant/>
          <CardPlant/>
          <CardPlant/>
        </ContentCards>
      </ContentProducts>

      <Footer/>
    </>
  )
}