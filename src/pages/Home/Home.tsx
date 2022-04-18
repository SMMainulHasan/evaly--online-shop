import Banner from "components/home/Banner";
import Products from "components/home/Products";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Banner />
      <Products />
    </Container>
  );
}

export default Home;
