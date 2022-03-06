import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Libro from './Libro';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
    this.listaLibros = [];
  }
  anadir() {
    this.listaLibros = this.listaLibros.concat(
      <Libro
        titulo={this.valorInputTitulo.value}
        autor={this.valorInputAutor.value}
        fecha={this.valorInputFecha.value}
        paginas={this.valorInputPaginas.value}
        portada={this.valorInputPortada.value}
        idioma={this.valorInputIdioma.value}
      />
    );
    this.setState({ lista: this.listaLibros });
  }

  render() {
    return (
      <div id="ej2">
        <h2>Ejercicio 2</h2>
        <ul>
          <li>
            Crea un formulario para añadir información sobre libros a una lista.
            Ha de tener los siguientes campos:<b> - 1,25 puntos</b>
            <ul>
              <li>Título</li>
              <li>Autor</li>
              <li>Fecha de publicación (selector de fecha) </li>
              <li>Número de paginas (input numérico)</li>
              <li>Portada (URL de imagen)</li>
              <li>Idioma </li>
            </ul>
            Los elementos añadidos se irán introduciendo dentro de un Container
            de React-Bootstrap
            <li>
              Crea un componente <i>Libro</i> para mostar los elementos que
              vayas añadiendo. El componente ha de implementar{' '}
              <a href="https://react-bootstrap.github.io/components/cards/">
                Card
              </a>{' '}
              de React-Bootstrap y mostrar todos los campos añadidos
              <b> - 1,75 puntos</b>
            </li>
          </li>
        </ul>
        <ul>
          <Container>
            <Row>
              <Col>
                <li>
                  <input
                    ref={(vIT) => (this.valorInputTitulo = vIT)}
                    type="text"
                    placeholder="Titulo"
                  />
                </li>
                <li>
                  <input
                    ref={(vIA) => (this.valorInputAutor = vIA)}
                    type="text"
                    placeholder="Autor"
                  />
                </li>
                <li>
                  <input
                    ref={(vIF) => (this.valorInputFecha = vIF)}
                    type="date"
                    placeholder="Fecha de publicacion"
                  />
                </li>
                <li>
                  <input
                    ref={(vIP) => (this.valorInputPaginas = vIP)}
                    type="number"
                    placeholder="Numero de paginas"
                  />
                </li>
                <li>
                  <input
                    ref={(vIP) => (this.valorInputPortada = vIP)}
                    type="url"
                    placeholder="Portada (URL)"
                  />
                </li>
                <li>
                  <input
                    ref={(vII) => (this.valorInputIdioma = vII)}
                    type="text"
                    placeholder="Idioma"
                  />
                </li>
              </Col>
            </Row>
            <br />
            <button onClick={() => this.anadir()}>Añadir</button>
            <br />
            {this.listaLibros}
          </Container>
        </ul>
      </div>
    );
  }
}

export default Ejercicio2;
