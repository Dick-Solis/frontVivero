import styled from "@emotion/styled";
import cargandoPlanta from "../../assets/p-01.jpg";
import marcoFlores from "../../assets/marcoFlores.jpg";
import arregloRosas from "../../assets/arregloRosas.jpg";
import suculentas from "../../assets/suculentas.jpg";
import plantaJardin from "../../assets/plantaJardin.jpg";
import arbol from "../../assets/Arbol.jpg";
import { RiLockPasswordFill, RiPlantFill } from "react-icons/ri"
import { AiFillTag } from "react-icons/ai";
import { CardPlant } from "../../components/card/cardFlor";
import { Footer } from "../../components/footer/footer";
import category1 from "../../assets/arboles forestales/1.jpg"
import category2 from "../../assets/arboles forestales/2.jpg"
import category3 from "../../assets/arboles forestales/3.jpg"
import category4 from "../../assets/arboles forestales/4.jpg"
import category5 from "../../assets/arboles forestales/5.jpg"
import category6 from "../../assets/arboles forestales/6.jpg"
import category7 from "../../assets/arboles forestales/7.jpg"
import category8 from "../../assets/arboles forestales/8.jpg"
import category9 from "../../assets/arboles forestales/9.jpg"
import category10 from "../../assets/arboles forestales/10.jpg"
import category11 from "../../assets/arboles forestales/11.jpg"
import category12 from "../../assets/arboles forestales/12.jpg"
import category13 from "../../assets/arboles forestales/13.jpg"
import category14 from "../../assets/arboles forestales/1.jpg"
import fondoInfo from "../../assets/fondoInfo.jpg"
import principal1 from "../../assets/principal1.png"
import principal2 from "../../assets/principal2.png"
import principal3 from "../../assets/principal3.png"
import principal4 from "../../assets/principal4.png"



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
    text-align: center;
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
    background-image: url(${props => props.imageUrl});
    /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    align-items: center; */
    width: 300px;
    min-height: 300px;
  `;

const StyledCardDos = styled.article`
    background-image: url(${props => props.imageUrl});
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
StyledFlores

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

  const ContentNososotros = styled.section`
    width: 100%;
    background-image: url(${fondoInfo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 20px;
    padding: 25px;
    color: #ffffff;
    opacity: 1.5;
    font-weight: bold;
    @media (max-width: 1024px){
      flex-wrap: wrap;
    }
  `;

  const TitleDescription = styled.h2`
    width: 100%;
    text-align: center;
  `;

  const ContentCardsDescription = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
    text-align: justify;
    gap: 7px;
  `;

  const StyledImg = styled.img`
    width: 300px;
    min-height: 300px;
  `;

  const CardsCategories = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  `;
//#endregion

export function HomePage() {
  const style = {
    fontSize: "40px",
  }

  function handleClick() {
    const elementoDestino = document.getElementById('destinoNosotros');
    elementoDestino.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <>
      <StyledHeader>
        <StyledContentHeader>
          <TitleContent>Vivero Mundo Verde</TitleContent>
          <ButtonLink onClick={handleClick}>Más</ButtonLink>
        </StyledContentHeader>
      </StyledHeader>

      <StyledFlores>
        <ContentStyledCards>
          

          <StyledCardTres>
            <TitleCard>Mejores</TitleCard>
            <TextCard>Colecciones</TextCard>
          </StyledCardTres>

          <CardsContentFisrt>
            <StyledImg src={category1}/>
            <StyledImg src={category2}/>
          </CardsContentFisrt>

          <CardsContentFisrt>
            <StyledImg src={category3}/>
            <StyledImg src={category4}/>
          </CardsContentFisrt>

          <CardsContentFisrt>
            <StyledImg src={category5}/>
            <StyledImg src={category6}/>
          </CardsContentFisrt>

          <StyledCardCuatro>
            <TitleCard>Mejores</TitleCard>
            <TextCard>Colecciones</TextCard>
          </StyledCardCuatro>
          
            {/* <StyledImg src={category1} alt="" />
            <StyledImg src={category2} alt="" />
            <StyledImg src={category3} alt="" />
            <StyledImg src={category4} alt="" />
            <StyledImg src={category5} alt="" />
            <StyledImg src={category6} alt="" />
            <StyledImg src={category7} alt="" />
            <StyledImg src={category8} alt="" />
            <StyledImg src={category9} alt="" />
            <StyledImg src={category10} alt="" />
            <StyledImg src={category11} alt="" />
            <StyledImg src={category12} alt="" />
            <StyledImg src={category13} alt="" />
            <StyledImg src={category14} alt="" /> */}
        </ContentStyledCards>
        <CardsCategories>
          <StyledImg src={category7} alt="" />
          <StyledImg src={category8} alt="" />
          <StyledImg src={category9} alt="" />
          <StyledImg src={category10} alt="" />
          <StyledImg src={category11} alt="" />
        </CardsCategories>
        <CardsCategories>
          <StyledImg src={category12} alt="" />
          <StyledImg src={category13} alt="" />
          <StyledImg src={category14} alt="" />
        </CardsCategories>
      </StyledFlores >

      <ContentStyledIcons>
        <ContentIcon>
          <RiLockPasswordFill style={style} />
          <h4>Seguridad Garantizada</h4>
        </ContentIcon>

        <ContentIcon>
          <AiFillTag style={style} />
          <h4>Calidad en Nuestros Productos</h4>
        </ContentIcon>

        <ContentIcon>
          <RiPlantFill style={style} />
          <h4>Variedad de Plantas</h4>
        </ContentIcon>
      </ContentStyledIcons>

      <ContentNososotros id="destinoNosotros">
        <ContentCardsDescription>
          <TitleDescription>Vivero Mundo Verde</TitleDescription>
          <p>Es una empresa especializada en la creación de plantas ornamentales y productos afines. Ademas brindan servicios paisajistas profesionales, diseño, habilitación y mantenimiento de jardínes también ofrecen flores y follajes de corte en el mercado Nacional e Internacional.</p>
        </ContentCardsDescription>
        <ContentCardsDescription>
          <TitleDescription>Servicios profesionales en el vivero</TitleDescription>
          <p>✅ Asesoría para el cuidado de sus plantas considerando los factores ambientales (agua, factores edáficos, radiación solar, viento, etc).</p>
          <p>✅ Recomendaciones para una fertilización adecuada.</p>
          <p>✅ Análisis y diagnóstico de problemas fitosanitarios.</p>
          <p>✅ Recomendaciones condiderando los efectos sobre el medio ambiente.</p>
          <p>✅ Cambio de substrato de sus plantas en maceta</p>
        </ContentCardsDescription>
        <ContentCardsDescription>
          <TitleDescription>Historia</TitleDescription>
          <p>Somos una empresa 100% peruana, con 28 años de experiencia y liderazgo en la propagación de plantas frutales con los más altos estándares de calidad genética.</p>
        </ContentCardsDescription>
      </ContentNososotros>

      <ContentProducts>
        <TitleContentProducts>Principales Productos</TitleContentProducts>
        <DescriptionContentProducts>Calidad Garantizada</DescriptionContentProducts>
        <ContentCards>
          <CardPlant imageFoto={principal1}/>
          <CardPlant imageFoto={principal2}/>
          <CardPlant imageFoto={principal3}/>
          <CardPlant imageFoto={principal4}/>
        </ContentCards>
      </ContentProducts>

      <Footer />
    </>
  )
}