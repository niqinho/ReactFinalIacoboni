import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
    return (
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>

        <Card.Title>{prod.nombre}</Card.Title>

        <Card.Text>
        {prod.descripcion}
        </Card.Text>

        <Card.Text>
        ${prod.precio}
        </Card.Text>

        <Button as= {Link} to={`/item/${prod.id}`} variant="success">Comprar</Button>

      </Card.Body>
    </Card>
    )
}

export default Item