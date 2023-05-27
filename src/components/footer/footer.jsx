import styled from "@emotion/styled";
import {RiPlantFill} from "react-icons/ri"
import {FaFacebook} from "react-icons/fa";
import {AiFillInstagram,AiOutlineTwitter} from "react-icons/ai";
import imageFooter from "../../assets/footerbg.jpg"
import logoCompany from "../../assets/MUNDO-VERDE-01.png"

//#region
  const StyledContent = styled.footer`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction:column;
    background-image: url(${imageFooter});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
  `;

  const StyledContentFooter = styled.article`
    display: flex;
    justify-content: center;
    align-self: flex-start;
    padding: 10px;
    gap: 15px;
    width: 100%;
    @media (max-width:1024px){
      flex-wrap: wrap;
    }
  `;

  const StyledContentDescription = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    padding: 15px;
    border-left:  4px solid #7D9B0E;
    @media (max-width:1024px){
      border-top: 4px solid #7D9B0E;
      border-left: none;
    }
  `;

  const StyledContentAllDescription = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    @media (max-width:1024px){
      padding: 100px 10px;
      flex-wrap: wrap;
    }
  `;

  const StyleTitle = styled.h2`
    text-align: center;
  `;

  const ContentSocial = styled.div`
    width: 150px;
  `;

  const SectionFooter = styled.section`
    background-color: #222222;
    width: 100%;
    color: white;
    text-align: center;
  `;

  const StyledText = styled.p`
    min-width: 100%;
    width: 150px;
    font-size: 15px;
    font-weight: bold;
  `;
//#endregion

export function Footer() {
  const styleIconsLogos={
    fontSize: "200px",
  }

  const styleIconsSocial = {
    fontSize: "40px",
  }

  return (
    <StyledContent>
      <StyledContentAllDescription>
        <StyledContentFooter>
          <StyledContentDescription>
            <img src={logoCompany}/>
            {/* <p>Somos una empresa 100% peruana, con 28 años de experiencia y liderazgo en la propagación de plantas frutales con los más altos estándares de calidad genética.</p> */}
          </StyledContentDescription>
          <StyledContentDescription>
            <StyleTitle>Horario de Atención</StyleTitle>
            <StyledText>LUNES A VIERNES:</StyledText>
            <StyledText>8:00am a 6:00pm</StyledText>
            <StyledText>Sábados: 8:00am a 1:00pm</StyledText>
            <StyledText>Domingos: Cerrado</StyledText>
            <StyledText>MÁS INFORMACIÓN A:</StyledText>
            <StyledText>asesoria@planta-de-la-vida.com</StyledText>
          </StyledContentDescription>
        </StyledContentFooter>
        <StyledContentFooter>
          <StyledContentDescription>
            <StyleTitle>Ubicación</StyleTitle>
            <p>Huánuco - Perú</p>
            <p>Jr. Contitución # 461</p>
          </StyledContentDescription>
          <StyledContentDescription>
            <StyleTitle>Siguenos</StyleTitle>
            <ContentSocial>
              <FaFacebook style={styleIconsSocial}/>
              <AiFillInstagram style={styleIconsSocial}/>
              <AiOutlineTwitter style={styleIconsSocial}/>
            </ContentSocial>
          </StyledContentDescription>
        </StyledContentFooter>
      </StyledContentAllDescription>
      <SectionFooter>
        <h3>2023 © todos los derechos reservados PLANTSANA</h3>
      </SectionFooter>
    </StyledContent>
  )
}