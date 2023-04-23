import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";
import { ComponentFooter } from "../../components/footer/footer";
import { DataPlants } from '../../data/dbPlantas';
import { CardPlant } from "../../components/cards/cardsPlant";


//#region Style
  const ContainerPagePlantas = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const ContainerSections = styled.section`
    display: flex;
    justify-content: center;
    /* background-color:red; */
    gap: 5px;
    width: 100%;
    padding: 0 20px;
  `;

  const StyledInput = styled.input`
    width: 700px;
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
    font-weight: bold;
    color: white;
  `;

  const ContainerOptionsFilter = styled.section`
    display: flex;
    justify-content: center;
    gap: 10px 30px;
    flex-wrap: wrap;
  `;

  const StyledSelect =styled.select`
    width: 300px;
    border-radius: 5px;
    border: none;
    background-color:#075d7cba;
    font-size: 18px;
    color: #ffffff;
    outline: none;
  `;

  const ContainerPlantas = styled.section`
   display: flex;
   justify-content: center;
   align-items:center;
   flex-wrap: wrap;
   gap: 30px;
  `;

//#endregion Style


export function Plantas(){
  return(
    <ContainerPagePlantas>
      <ContainerSections>
        <StyledInput type="text" />
        <StyledButton>
          <AiOutlineSearch style={{color:'white',fontSize:"27px",fontWeight: "bold"}}/>
        </StyledButton>
      </ContainerSections>
      <ContainerOptionsFilter>
        <StyledSelect>
          <option value="">Tipo de Planta</option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </StyledSelect>
        <StyledSelect>
          <option value="">Tipo de Crecimiento</option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </StyledSelect>
        <StyledSelect>
          <option value="">Variedad de Planta</option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </StyledSelect>
        <StyledButton>Filtrar</StyledButton>
      </ContainerOptionsFilter>
      <ContainerPlantas>
        {
          DataPlants.map(planta => (
            <CardPlant key={planta.id} plant={planta}/>
          ))
        }
      </ContainerPlantas>
      <ComponentFooter/>
    </ContainerPagePlantas>
  )
}