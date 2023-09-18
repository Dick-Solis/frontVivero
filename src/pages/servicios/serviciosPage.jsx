import styled from "@emotion/styled";
import { CardServices } from "../../components/card/cardServices";
import servicio1 from "../../assets/servicio1.webp";
import { Footer } from "../../components/footer/footer";
import { SERVICES } from "../../data/services";

//#region
  const ContentPage = styled.main`
    padding-top: 100px;
  `;

  const SectionServices = styled.section`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  `;
//#endregion

export function ServiciosPage(){
  return(
    <ContentPage>
      <SectionServices>
        {SERVICES.map((element)=>(
          <CardServices
            image={servicio1}
            title={element.nameService}
            // description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, odio."}
          />
        ))}
      </SectionServices>
      <Footer/>
    </ContentPage>
  )
}