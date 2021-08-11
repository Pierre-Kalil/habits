import {Header, ContainerDesktop, ContainerDesktopTitle, ContainerDesktopDescription, ContainerDescktopButton, ContainerDesktopImages} from "./styles"
import {ContainerMobile, ContainerMobileDescription, ContainerMobileImages, ContainerMobileTitle} from "./styles"
import sleep from "../../images/dormir.png"
import energy from "../../images/energia.png"
import bodybuilding from "../../images/musculacao.png"
import couch from "../../images/sofa.png"

const PhysicalActivity = () => {
    
    const viewport = window.innerWidth;

    return(
        <>
          { viewport < 1000 ?


              <ContainerMobile>
                  <h1>Exercicio Fisico</h1>
                  <ContainerMobileDescription>
                  <div><p>A importância da atividade física para a saúde está diretamente relacionada à melhoria 
                              da qualidade de vida, reduzindo consideravelmente os riscos de desenvolvimento de doenças 
                              cardiovasculares, diabetes, problemas relacionados a baixa imunidade, além dos transtornos 
                              de fundo emocional.</p></div>
                  </ContainerMobileDescription>
                  <button>Iniciar atividades</button>
                  <ContainerMobileImages>
                  <figure><img src = {bodybuilding}></img><figcaption>Aumenta a resistência muscular</figcaption></figure>
                      <figure><img src = {sleep}></img><figcaption>Melhora a qualidade do sono</figcaption></figure>
                      <figure><img src = {energy}></img><figcaption>Mais energia durante o dia</figcaption></figure>
                      <figure><img src = {couch}></img><figcaption>Reduz o extresse e a ansiedade</figcaption></figure>
                  </ContainerMobileImages>
              </ContainerMobile>


              :


              <ContainerDesktop>
                  <Header> MENU </Header>
                  <ContainerDesktopTitle>
                      <h1>Atividades físicas</h1>
                  </ContainerDesktopTitle>
                  <ContainerDesktopDescription>
                      <div><p>A importância da atividade física para a saúde está diretamente relacionada à melhoria 
                              da qualidade de vida, reduzindo consideravelmente os riscos de desenvolvimento de doenças 
                              cardiovasculares, diabetes, problemas relacionados a baixa imunidade, além dos transtornos 
                              de fundo emocional.</p></div>
                  </ContainerDesktopDescription>
                  <ContainerDescktopButton>
                      <button>Iniciar atividades</button>
                  </ContainerDescktopButton>
                  <ContainerDesktopImages>
                      <figure><img src = {bodybuilding}></img><figcaption>Aumenta a resistência muscular</figcaption></figure>
                      <figure><img src = {sleep}></img><figcaption>Melhora a qualidade do sono</figcaption></figure>
                      <figure><img src = {energy}></img><figcaption>Mais energia durante o dia</figcaption></figure>
                      <figure><img src = {couch}></img><figcaption>Reduz o extresse e a ansiedade</figcaption></figure>
                  </ContainerDesktopImages>
              </ContainerDesktop>


          }  
        </>
    )
}

export default PhysicalActivity; 