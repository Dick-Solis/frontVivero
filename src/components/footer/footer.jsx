import styled from 'styled-components';
import {BsWhatsapp} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import bancos from '../../assets/BANCOScopia.png'

//#region Style
  const FooterContainer = styled.footer`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    padding: 25px;
    gap: 40px;
    flex-wrap:wrap;
    width: 100%;
    background-color: #66b3c3ed;
  `;

  const FooterContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  const TitleFooter = styled.h3 `
    font-size: 25px;
    font-weight: bold;
    color: #fff;
  `;

  const TextFooter = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  `;

  const ContentSocial = styled.div`
    display: flex;
  `;
//#endregion

export function ComponentFooter(){
  return(
    <FooterContainer>
      <FooterContent>
        <TitleFooter>CONTÁCTANOS</TitleFooter>
        <TextFooter>Dirección: Constitución #461 - Huánuco</TextFooter>
        <TextFooter>Telefono: 938 364 202 - 938 411 530</TextFooter>
        <ContentSocial>
          <BsWhatsapp style={{fontSize: '40px', color:"white"}}/>
          <FaFacebookF style={{fontSize: '40px', color:"white"}}/>
        </ContentSocial>
        
        <TextFooter>PoweredBy: RinoPublisher</TextFooter>
      </FooterContent>

      <FooterContent>
        <TitleFooter>PAGOS</TitleFooter>
        <img src={bancos} alt="bancos.png" />
      </FooterContent>

    </FooterContainer>
  )
}