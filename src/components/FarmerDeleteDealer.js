// import React from 'react'
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function FarmerDeleteDealer() {
    const[dealer,setDealer] = useState(null)
    const navigate = useNavigate();
    const {dealerId } = useParams();


    // const fetchDealerById = () => {
    //     axios.get("http://localhost:9002/dealer/get/"+ dealerId).then(resp => setDealer(resp.data))
        
    // }
    // useEffect(fetchDealerById, []);


    useEffect(()=>{

       fetch("http://localhost:9002/dealer/get/" +dealerId).then(result=>{
            result.json().then(
                resp=>{
                    setDealer(resp)
                }
            )
        })
     },[])
      


    const deleteDealer  = () => {
        axios.delete("http://localhost:9002/dealer/delete/" + dealerId).then(resp => alert(resp.data));
        
        alert("Dealer  Deleted Successfully")
        navigate(-1);
    }
  return (
    <Container >
           
            <Row>
                
            <h2 ><b><i style={{ color:' blue'}}> DELETE DEALER</i></b></h2><hr></hr>
                <Col>
                <br></br> <br></br><br></br> <br></br><br></br> <br></br>
       
        
            {
                dealer !== null &&


                
                <div>
                    <p><b > DEALER ID : <i style={{ color:' green'}}>{dealer.dealerId}</i></b> </p>
                    <p><b >FIRST NAME:<i style={{ color:' green'}}> {dealer.firstName}</i></b></p>
                    <p><b >LAST NAME:<i style={{ color:' green'}}> {dealer.lastName}</i></b></p>


                    <p><b >PHONE NUMBER:<i style={{ color:' green'}}>{dealer.phoneNumber}</i></b></p>
                    <p><b >EMAIL :<i style={{ color:' green'}}>{dealer.email}</i></b></p>
                              
                </div>
            }<br></br>
            <div><button className='delete' onClick={deleteDealer}><b> Delete</b></button></div>
           
       
        </Col>
        {/* <Col >
            <div className='deletepage' ></div>
        </Col> */}
        </Row>
        </Container>
  )
}

export default FarmerDeleteDealer