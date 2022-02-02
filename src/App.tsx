import { Col, Row } from 'antd';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import './App.css';
import { Gif } from './components/gif/Gif';
import { SearchInput } from './components/search_input/SearchInput';
import { gif } from './models/GifModel';
import imgBanana from './assets/gif/banana.gif';
import GetGifRandom from './services/GetGifRandom';
import useNearScreen from './hooks/useLazyLoad';

function App() {

  const [value, setValue] = useState<gif[]>();
  // Guardaremos la referencia 
  const elementRef = useRef() as MutableRefObject<HTMLInputElement>;

  // datos para el Lazy Load
  const isNearScreen = useNearScreen(elementRef)


  // Cuando el observer coloca el state como true, se realiza la peticion a la Api
  useEffect(() => {
    if (isNearScreen) {
      const request = async () => {
        const response: gif[] = await GetGifRandom();
        setValue(response);
      }
      request();
    }
  }, [isNearScreen])

  return (
    <div className="App">
      <section className="App-content">
        <h1 className='title'>GIPHY CLON</h1>
        <img src={imgBanana} alt="banana dance" className='banana' />
        <br />
        <h3 className='title'>Página que ofrece los mejores Gif del mundo</h3>
        <br />
        <h4 className='subtitle'>Esta pagina fue desarrollada en React haciendo uso de Ant Design para utilizar estilos
          y también hacer uso de sus componentes y sus mediaQuery quedando así una pagina responsive
          también se instalo Axios para realizar las peticiones a la API de Giphy y por ultimo
          se esta haciendo uso de Lazy Load para entender su funcionamiento y de esa manera mejorar
          el performance de futuras paginas, cargando solamente los componentes bajo demanda y no
          todo junto como se venia realizando para complementar se uso TypeScript para un mejor desarrollo el Lazy Load se creo en un hooks personalizado.
        </h4>
        <br />

        <Row gutter={[8, 8]} justify='center'>
          <SearchInput setData={setValue} />
        </Row>
        <br />
        <br />
        <br />


        <div ref={elementRef as React.RefObject<HTMLDivElement>}>
          {isNearScreen &&
            <Row className='row-gif'>
              {value?.map((gif: gif, index: number) =>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} key={index} className='col-gif'>
                  <Gif images={gif.images} />
                </Col>
              )}

            </Row>
          }
        </div>


      </section>
    </div>
  );
}

export default App;
