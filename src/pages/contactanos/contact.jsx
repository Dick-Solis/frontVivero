import styled from 'styled-components';
import { ComponentFooter } from '../../components/footer/footer';
import macetasPlantas from '../../assets/macetas.jpg';
import cargandoPlanta from '../../assets/cargandoPlanta.jpg';
import bancos from '../../assets/BANCOS-01.png';

//#region Style
  const ContianerPageContact = styled.main `
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const PageContact = styled.main`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 20px;
    min-height:500px;
  `;
  const SectionForm = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `;

  const StyledForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin-bottom: 25px;
    gap: 15px;
    padding: 0 20px;
    @media (max-width:500px) {
      width: 100%;
    }
  `;

  const StyledInput = styled.input`
    width: 100%;
    outline: none;
    border: 2px solid #085b71;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 18px;
  `;

  const StyledButton = styled.button`
    border: none;
    background-color: #075d7cba;
    border-radius: 5px;
    font-size: 25px;
    font-weight: bold;
    padding: 10px;
    color: white;
  `;

  const StyledImage = styled.img`
    width: 100%;
    max-height: 500px;
  `;

  const StyledFormImage = styled.img`
    width: 500px;
    max-height: 500px;
  `;

  const StyledImgFooter = styled.img`
    height: 100px;
    width: 700px;
  `
//#endregion

export function Contact(){
  return (
    <ContianerPageContact>
      <StyledImage src={macetasPlantas} alt='macetas.jpg'/>
      <PageContact>
        <SectionForm>
          <StyledForm>
            <h2>INGRESAR CONSULTA</h2>
            <StyledInput placeholder='Ingresar Nombres'/>
            <StyledInput placeholder='Ingresar Apellidos'/>
            <StyledInput placeholder='Ingresar Dirección'/>
            <StyledInput placeholder='Ingresar Telefono'/>
            <StyledInput placeholder='Ingresar Consulta'/>
            <StyledButton>ENVIAR</StyledButton>
          </StyledForm>
          <StyledFormImage src={cargandoPlanta} alt='planta.jpg'/>
        </SectionForm>
        <StyledImgFooter src={bancos} alt="bancos.jpg" />
      </PageContact>
      <ComponentFooter/>
    </ContianerPageContact>
  )
}