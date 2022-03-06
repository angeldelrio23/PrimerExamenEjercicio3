import React from 'react';
import { Card } from 'react-bootstrap';

class Libro extends React.Component {
  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.autor = props.autor;
    this.fecha = props.fecha;
    this.paginas = props.paginas;
    this.portada = props.portada;
    this.idioma = props.idioma;
  }

  render() {
    return (
      <div id="libro">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.portada} />
          <Card.Body>
            <Card.Title>Libro</Card.Title>
            <Card.Text>Titulo: {this.titulo}</Card.Text>
            <Card.Text>Autor: {this.autor}</Card.Text>
            <Card.Text>Fecha: {this.fecha}</Card.Text>
            <Card.Text>Paginas: {this.paginas}</Card.Text>
            <Card.Text>Idioma: {this.idioma}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Libro;
