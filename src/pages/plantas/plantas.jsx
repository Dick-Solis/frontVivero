import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";

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
    </ContainerPagePlantas>
  )
}