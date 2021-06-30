import React , {useState} from 'react'
import {Modal,Button,Form,Col, Row} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const Add = ({show, handleClose, addMovie}) => {
  const [newMovie, setNewMovie] = useState({
title:"",
rate:1,
duration:"",
genre:"",
main_img:""

  })

  const handleChange = (e) => {
    setNewMovie({...newMovie, [e.target.name]: e.target.value});
  };
  

  const onStarClick=(nextValue,prevValue,name)=>{
    setNewMovie({...newMovie,rate:nextValue})
    
  };
  /*const onStarClick=(nextValue, prevValue, name, setRate) => {
    setRate(nextValue);
  }*/

  const handleAddMovie=()=>{

    addMovie(newMovie)
    handleClose()
  }
    

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };




    return (
        <div>


            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        


        <Form>
  <Row className="mb-3">
  <Form.Label>Title</Form.Label>
  <Form.Control type="text" placeholder="Title" onChange={handleChange} name="title"/>
  <Form.Label>Duration</Form.Label>
  <Form.Control type="text" placeholder="Duration" onChange={handleChange} name="Duration"/>
    
    
    <Form.Label>Image Cover</Form.Label>
    <Form.Control type="file" size="sm" onChange={handleChange} name="main_img"/>
    </Row>
    
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          //value={newRate}
          //onStarClick={onStarClick}
        />

<Form.Group controlId="exampleForm.contolTextArea1">
<Form.Label>description</Form.Label>
<Form.Control as="textarea" rows={3} onChange={handleChange} name="description"/>
</Form.Group>






    <Form.Row>
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" placeholder="Date" />
    <Form.Group as={Col} controlId= "formGridState">
      <Form.Label>Genre</Form.Label>
<Form.Control as="select" defaultValue="Choose genre" onChange={handleChange} name="genre">
<option>thriller</option>
<option>action</option>
<option>romance</option>

</Form.Control>

    </Form.Group>



    </Form.Row>
  
    



  
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{ addMovie(newMovie);handleClose()}} >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Add
