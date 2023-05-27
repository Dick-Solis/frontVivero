import styled from "@emotion/styled";
import { CardContact } from "../../components/card/cardContact";
import { Footer } from "../../components/footer/footer";
import {FaMapMarkerAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {BsTelephoneFill} from "react-icons/bs";
//#region
  const ContentPage = styled.main`
    padding-top: 100px;
  `;

  const ConteinerForm = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    gap: 15px;
    width: 100%;
  `;

  const StyledTitle = styled.h2`
    font-size: 35px;
    font-family: "Caveat";
  `;

  const StyledInput = styled.input`
    border: 2px solid #038c7a;
    border-radius: 5px;
    outline: none;
    padding: 10px;
    width: 100%;
    max-width: 700px;
  `;

  const StyledArea = styled.textarea`
    border: 2px solid #038c7a;
    border-radius: 5px;
    outline: none;
    padding: 10px;
    width: 100%;
    max-width: 700px;
  `;

  const StyledButton = styled.button`
    border: none;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    background-color: #087b54;
    color: #FFFFFF;
    cursor: pointer;
    :hover{
      scale: 1.2;
    }
  `;

  const ContentCardsContact = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
    margin-bottom: 50px;
  `;
//#endregion

export function ContactPage(){
  const style={
    fontSize: "25px",
  }
  return(
    <ContentPage>
      <ConteinerForm>
        <StyledTitle>ENTRA EN CONTACTO CON NOSOTROS</StyledTitle>
        <StyledInput type="text" placeholder="Nombre"/>
        <StyledInput type="text" placeholder="Email"/>
        <StyledInput type="number" placeholder="Teléfono"/>
        <StyledInput type="text" placeholder="Dirección"/>
        <StyledArea placeholder="Ingresar Mensaje"></StyledArea>
        <StyledButton type="submit">ENVIAR</StyledButton>
      </ConteinerForm>
      <ContentCardsContact>
        <CardContact
          image={<FaMapMarkerAlt style={style}/>}
          title={"Direccion"}
          description={"Constitución #461 - Huánuco"}
        />
        <CardContact
          image={<MdEmail style={style}/>}
          title={"Correo"}
          description={"asesoria@planta-de-la-vida.com"}
        />
        <CardContact
          image={<BsTelephoneFill style={style}/>}
          title={"Telefono"}
          description={"938 364 202 - 938 411 530"}
        />
      </ContentCardsContact>
      <Footer/>
    </ContentPage>
  )
}