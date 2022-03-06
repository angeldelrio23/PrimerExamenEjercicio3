import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';

class Ejercicio3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }

  async componentDidMount() {
    fetch(
      'https://www.etnassoft.com/api/v1/get/?category=programacion&num_items=1&lang=spanish'
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          tableData: data,
        })
      );
  }

  render() {
    return (
      <div id="ej3">
        <h2>Ejercicio 3</h2>
        <ol>
          <li>
            Utiliza la API REST de{' '}
            <a href="https://openlibra.com/es/page/public-api">OpenLibra.com</a>{' '}
            para obtener datos acerca de libros. La petición tendrá que incluir
            los siguientes parámetros:<b> - 1,5 puntos</b>
          </li>
          <ul>
            <li>Categoría: Programación</li>
            <li>Número máximo de resultados: 5</li>
            <li>Idioma: español</li>
          </ul>

          <Container>
            <Row>
              <Col lg={8} md={6}>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Titulo</th>
                      <th>Autor</th>
                      <th>Editorial</th>
                      <th>Categoria</th>
                      <th>Idioma</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tableData.map((item) => {
                      return (
                        <tr>
                          <td>{item.ID} </td>
                          <td>{item.title} </td>
                          <td>{item.author} </td>
                          <td>{item.publisher} </td>
                          <td>{item.categories.slice(1).name} </td>
                          <td>{item.language} </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>

          <li>
            Utiliza los resultados devueltos por la consulta para rellenar un
            componente{' '}
            <a href="https://react-bootstrap.github.io/components/carousel/">
              Carrusel
            </a>{' '}
            de React-Bootstrap usando los siguientes campos:<b> - 1,5 puntos</b>
            <ul>
              <li>Imagen: cover</li>
              <li>Título: title</li>
              <li>Autor: author</li>
            </ul>
            Este además se encontrará anidado dentro de un Container de
            React-Bootstrap
          </li>
          <li>
            {' '}
            Modifica los estilos para que se muestre la imagen de portada a la
            izquierda del elemento de carrusel y a la derecha los atributos de
            texto, añadiendo la descripción acortada (content_short){' '}
            <b> - 1 punto</b>
          </li>
        </ol>
      </div>
    );
  }
}

export default Ejercicio3;
