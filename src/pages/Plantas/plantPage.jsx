import styled from "@emotion/styled";
import { Footer } from "../../components/footer/footer";
import { CardVentaFlor } from "../../components/card/cardVentaFlor";

//#region
const ContentPage = styled.main`
    padding-top: 100px;
  `;
const SectionSearch = styled.section`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  `;
const ContentInputSearch = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    max-width: 700px;
    padding: 20px;
  `;

const StyledInput = styled.input`
    outline: none;
    font-size: 18px;
    border-radius: 5px;
    border: 2px solid #156D50;
  `;

const StyledButtonSearch = styled.button`
    border: none;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    background-color: #087b54;
    color: #FFFFFF;
    cursor: pointer;
    :hover{
      scale: 1.02;
    }
  `;
  const StyledContentFilter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
    @media (max-width:1024px){
      flex-direction: column;
    }
  `;

  const ContentSelectComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width:768px){
      width: 100%;
    }
  `;

  const StyledSelect = styled.select`
    height: 30px;
    background-color: #f2f2f2;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px;
    outline: none;
    width: 400px;
    @media (max-width:768px){
      width: 100%;
      max-width: 400px;
    }
  `;

  const ButtonFiltrar = styled.button`
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

  const SectionFlores = styled.section`
    min-height: 700px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 25px;
  `;
//#endregion

export function PlantsPage() {
  return (
    <ContentPage>
      <SectionSearch>
        <ContentInputSearch>
          <StyledInput type="text" />
          <StyledButtonSearch>Buscar</StyledButtonSearch>
        </ContentInputSearch>
        <StyledContentFilter>
          <ContentSelectComponent>
            <h3>clasificacion 1</h3>
            <StyledSelect>
              <option value="1">Sol</option>
              <option value="2">Semi Sombra</option>
              <option value="3">Sombra</option>
              <option value="4">Interiores con luz</option>
              <option value="5">Interiores con poca luz</option>
            </StyledSelect>
          </ContentSelectComponent>
          <ContentSelectComponent>
            <h3>clasificacion 2</h3>
            <StyledSelect>
              <option value="1">Sol</option>
              <option value="2">Semi Sombra</option>
              <option value="3">Sombra</option>
              <option value="4">Interiores con luz</option>
              <option value="5">Interiores con poca luz</option>
            </StyledSelect>
          </ContentSelectComponent>
          <ContentSelectComponent>
            <h3>clasificacion 3</h3>
            <StyledSelect>
              <option value="1">Sol</option>
              <option value="2">Semi Sombra</option>
              <option value="3">Sombra</option>
              <option value="4">Interiores con luz</option>
              <option value="5">Interiores con poca luz</option>
            </StyledSelect>
          </ContentSelectComponent>
          <ButtonFiltrar type="button">FILTRAR</ButtonFiltrar>
        </StyledContentFilter>
      </SectionSearch>
      <SectionFlores>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
        <CardVentaFlor/>
      </SectionFlores>
      <Footer/>
    </ContentPage>
  )
}