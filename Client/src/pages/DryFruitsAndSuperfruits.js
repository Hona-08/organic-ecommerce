import React, { useEffect, useState } from 'react'
// import Products from '../components/Products/Products';
import axios from 'axios';
import './Style.css'
import { Card, Row , Container, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsPage = () => {
  const [product, SetProduct] = useState([]);
  useEffect(() => {

    const fetchPosts = async () =>{
      const res = await axios.get("http://localhost:5000/api/allProduct");
      SetProduct(res.data)
    }
    fetchPosts();
  },[]);

  return (
    <>
<Container className='mt-3 cooking'>
  <h1 className='text-center'>Cooking Essential</h1>
     
      {product.map((item)=>{
        if(item.product_category=="fruits"){
        
        return(
        
        <>
        
          
          <Card>
          <Row >
          <Col md={4}>
            <Card.Img src={`http://localhost:5000/uploads/${item.product_img}`} />
            </Col>
            <Col md={8}>
              <Card.Title>{item.product_name}</Card.Title>
              <Card.Text>{item.product_disc}</Card.Text>
              <br></br>
              <Card.Text>{item.product_disc}</Card.Text>
            </Col>
            </Row>
          </Card>
          

      </>)}
      })}

</Container>
    </>
  )
};

export default ProductsPage;