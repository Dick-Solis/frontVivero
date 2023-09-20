import styled from "@emotion/styled";
import {FaFacebook} from "react-icons/fa";
import {AiFillInstagram,AiOutlineTwitter} from "react-icons/ai";
import imageFooter from "../../assets/footerbg.jpg"
import logoCompany from "../../assets/logoCompany.png"

//#region
  const StyledContent = styled.footer`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-image: url(${imageFooter});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    z-index: -8;
    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${imageFooter});
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(2px); 
    opacity: 1.5; 
    z-index: -1;
  }
  `;

  const StyledContentFooter = styled.article`
    display: flex;
    justify-content: center;
    align-self: flex-start;
    padding: 10px;
    gap: 15px;
    width: 100%;
    z-index:10000;
    @media (max-width:1024px){
      flex-wrap: wrap;
    }
  `;
  const StyledContentContacts = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  const StyledContentFooterDescription = styled.article`
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    padding: 10px;
    gap: 15px;
    width: 100%;
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
    /* text-align: center; */
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
  const styleIconsSocial = {
    fontSize: "40px",
  }

  return (
    <StyledContent>
      <StyledContentAllDescription>
        <StyledContentFooter>
          <StyledContentDescription>
            <img src={logoCompany}/>
          </StyledContentDescription>
          
        </StyledContentFooter>
        <StyledContentFooterDescription >
          <StyledContentContacts>
            <StyledContentDescription>
              <StyleTitle>Ubicación</StyleTitle>
              <p>Huaral- Lima - Perú</p>
            </StyledContentDescription>
            <StyledContentDescription>
              <StyleTitle>Siguenos</StyleTitle>
              <ContentSocial>
                <FaFacebook style={styleIconsSocial}/>
                <AiFillInstagram style={styleIconsSocial}/>
                <AiOutlineTwitter style={styleIconsSocial}/>
              </ContentSocial>
            </StyledContentDescription>
            <StyledContentDescription>
              <StyleTitle>Contáctanos</StyleTitle>
              <p>Tel. 938 364 202</p>
            </StyledContentDescription>
          </StyledContentContacts>
          <div>
            <StyledContentDescription>
              <StyleTitle>Horario de Atención</StyleTitle>
              <StyledText>LUNES A SÁBADO || 8:00am a 6:00pm</StyledText>
              <StyledText>MÁS INFORMACIÓN A || vivero@rino101.com</StyledText>
            </StyledContentDescription>
          </div>
        </StyledContentFooterDescription>
      </StyledContentAllDescription>
      <SectionFooter>
        <h3>© 2023 <strong>Grupo Rino</strong>• All Rights Reserved</h3>
      </SectionFooter>
    </StyledContent>
  )
}