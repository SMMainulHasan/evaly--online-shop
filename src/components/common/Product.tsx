import { Card, Col } from "react-bootstrap";

const Product = () => (
  <Col md={3} className="mb-2 h-100">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
  </Col>
);

export default Product;
