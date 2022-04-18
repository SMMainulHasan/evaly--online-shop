import Product from "components/common/Product";
import { Row } from "react-bootstrap";

const Products = () => (
  <div>
    <h2>Latest Products</h2>
    <Row lg={4} className="align-items-stretch">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Row>
  </div>
);

export default Products;
