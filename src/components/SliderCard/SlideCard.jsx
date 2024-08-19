import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./slidercard.css";
import { Link, useNavigate } from "react-router-dom";

const SlideCard = ({title,desc,cover}) => {

  const navigate =useNavigate();
  const visit = () => {
    navigate('/shop')
  }

  return (
      <Container className='box' >
        <Row>
          <Col md={6}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button onClick={visit}  className='visitbtn btn-primary'>Visit Collections 
            {/* <i className="bi bi-arrow-right"></i> */}
            </button>
          </Col>
          <Col md={6}>
            <img className="slideimage" src={cover} alt="#" />
          </Col>
        </Row>

    </Container>
  )
}

export default SlideCard
