import styled from "@emotion/styled";
import { Footer } from "../../components/footer/footer";
import { CardVentaFlor } from "../../components/card/cardVentaFlor";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPlants, getPlantTipos } from "../../services/plantas";
import { Modal } from "../../components/modal/modal";

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
    padding: 5px;
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
    gap: 20px;
    margin-bottom: 25px;
    @media (max-width:768px){
      flex-direction: column;
    }
  `;

  const StyledListen = styled.ul`
    list-style: none;
  `;

  const StyledLis = styled.li`
    /* list-style: none; */
    padding: 7px 10px;
    font-weight: bold;
    :hover{
      color: #3cae1c;
      scale: 1.1;
      cursor: pointer;
    }
  `;

  const ContainerPlantas = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    gap: 20px;
  `;
//#endregion

export function PlantsPage() {
  const [idTipo, setIdTipo] = useState("");
  const [dataPlants, setDataPlants] = useState([]);
  const [handleDataPlants, setHandleDataPlants] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [elementSearch, setElementSearch] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  function clickHandle(event){
    setIdTipo(event.target.id);
  }

  useEffect(()=>{
    if(idTipo){
      getPlantTipos(idTipo)
      .then(data => setDataPlants(data))
      .catch(error => console.log(error));
    }else{
      getAllPlants()
      .then(data => setHandleDataPlants(data))
      .catch(error => console.log(error));
    }
  },[idTipo])

  function inputChange(event){
    setElementSearch([])
    setValueSearch(event.target.value);
  }

  function clickSearch(){
    const searchPlant = handleDataPlants.filter(item => item.nombre_comercial?.toLowerCase().includes(valueSearch.toLowerCase()));
    setIdTipo("");
    setElementSearch(searchPlant);
  }


  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <ContentPage>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        {
          elementSearch.map((element)=>
          (<CardVentaFlor key={element.id_planta} element={element}/>)
        )
        }
      </Modal>
      <SectionSearch>
        <ContentInputSearch>
          <StyledInput type="text" onChange={inputChange}/>
          <StyledButtonSearch onClick={clickSearch}>Buscar</StyledButtonSearch>
        </ContentInputSearch>
        {/* <StyledContentFilter>
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
        </StyledContentFilter> */}
      </SectionSearch>
      <SectionFlores>
        <div>
          <StyledListen>
            <StyledLis id="33" onClick={clickHandle}>Plantas de Interior</StyledLis>
            <StyledLis id="34" onClick={clickHandle}>Plantas de Exterior</StyledLis>
            <StyledLis id="35" onClick={clickHandle}>Suculentas</StyledLis>
            <StyledLis id="36" onClick={clickHandle}>Plantas para Cerco</StyledLis>
            <StyledLis id="37" onClick={clickHandle}>Florales</StyledLis>
            <StyledLis id="38" onClick={clickHandle}>Palmeras</StyledLis>
            <StyledLis id="39" onClick={clickHandle}>Frutales</StyledLis>
          </StyledListen>
        </div>
        <ContainerPlantas>
          {idTipo ? dataPlants.map((element)=>
            (<CardVentaFlor key={element.id_planta} element={element}/>)
          ): elementSearch.length > 0 ? elementSearch.map((element)=>
            (<CardVentaFlor key={element.id_planta} element={element}/>)
           ): handleDataPlants.slice(0,14).map((element)=>
            (<CardVentaFlor key={element.id_planta} element={element}/>)
           )
          }
        </ContainerPlantas>
      </SectionFlores>
      <Footer/>
    </ContentPage>
  )
}