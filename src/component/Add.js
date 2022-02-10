import React, { useState } from 'react';
import {Modal,Button,Form,Col,Row,} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

const Add = ({show,handleClose,setRate,newRate,addMovie}) => {
  const [newMovie,setnewMovie] = useState({
    Title:"",
    Rate:1,
    Description:"",
    Time:"",
    Poster:"",
  });
  const onStarClick = (nextValue) =>{
    setnewMovie ({...newMovie,Rate:nextValue})
 
  }
    const handleChange = (e)=>{
      setnewMovie({...newMovie,[e.target.name]:e.target.value})
    }
  
  return <div>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" onChange={handleChange} name="Title"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>image url</Form.Label>
      <Form.Control type="password" placeholder="image url" onChange={handleChange} name="img" />
    </Form.Group>
  </Row>

  <Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Description</Form.Label>
  <Form.Control as="textarea" rows={3} onChange={handleChange} name="Description"/>
  <StarRatingComponent 
          name="Rate" 
          starCount={5}
          value={newMovie.Rate}
          onStarClick={onStarClick}
        />
</Form.Group>

<Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Time</Form.Label>
      <Form.Control onChange={handleChange} name="Time"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Genre</Form.Label>
      <Form.Select defaultValue="Choose genre" onChange={handleChange} name="Genre">
        <option>thriller</option>
        <option>action</option>
        <option>romance</option>
      </Form.Select>
    </Form.Group>
  </Row>

  

  
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {addMovie(newMovie); handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
  </div>;
};

export default Add;

