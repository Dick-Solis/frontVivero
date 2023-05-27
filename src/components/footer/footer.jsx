import styled from "@emotion/styled";
import {GiPlantWatering,GiPlantSeed} from "react-icons/gi";
import {RiPlantFill} from "react-icons/ri"
import {FaFacebook} from "react-icons/fa";
import {AiFillInstagram,AiOutlineTwitter} from "react-icons/ai";
//#region
  const StyledContent = styled.footer`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction:column;
    background-color: #CCCCCC;
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
  `;

  const StyledContentAllDescription = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    @media (max-width:1024px){
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
            <RiPlantFill style={styleIconsLogos}/>
            <StyleTitle>Vivero Vivero</StyleTitle>
            <p>Content Content</p>
          </StyledContentDescription>
          <StyledContentDescription>
            <StyleTitle>Content Description</StyleTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem libero magni explicabo cupiditate, aliquid rerum, perferendis nulla minima doloremque expedita laboriosam veniam ipsam, eos ut alias corrupti pariatur sed itaque.</p>
          </StyledContentDescription>
        </StyledContentFooter>
        <StyledContentFooter>
          <StyledContentDescription>
            <StyleTitle>Content Description</StyleTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem libero magni explicabo cupiditate, aliquid rerum, perferendis nulla minima doloremque expedita laboriosam veniam ipsam, eos ut alias corrupti pariatur sed itaque.</p>
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
        <h3>2023 © todos los derechos reservados Plantasana</h3>
      </SectionFooter>
    </StyledContent>
  )
}