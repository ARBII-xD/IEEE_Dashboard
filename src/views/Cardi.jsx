import React from "react";
import ChartistGraph from "react-chartist";
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
  } from "react-bootstrap";


function Cardi(props) {
    return(
        <Card>
            <Card.Header className="blockquote mb-0">{props.name}</Card.Header>
            <Card.Body>
            <Card.Title className="mb-2 text-muted">{props.university}</Card.Title>
                
                
                <Card.Text>
                   {props.description}
    </Card.Text>
                <Button variant="primary">Accept</Button>
            </Card.Body>
        </Card>
    )
}

export default Cardi