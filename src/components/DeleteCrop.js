import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import NavbarFarmer from "./NavbarFarmer";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import "../styles/DeleteCrop.css";
function DeleteCrop() {
  const [crop, setCrop] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  // const fetchCropById = () => {
  //   axios
  //     .get("http://localhost:9001/crop/crop/" + id)
  //     .then((resp) => setCrop(resp.data));
  // };
  // useEffect(fetchCropById, []);

  useEffect(()=>{

    fetch("http://localhost:9001/crop/crop/"+id).then(result=>{
        result.json().then(
            resp=>{
              setCrop(resp)
            }
        )
    })
 },[])
  

  const deleteCrop = () => {
    axios
      .delete("http://localhost:9001/crop/delete/" + id)
      .then((resp) => alert(resp.data));
        navigate("/farmerviewcrops")
        alert("Crop Deleted Successfully");
  };
  return (
    <div className="deletecropbg">
    <Container style={{backgroundColor:"lightcyan"}}>
        <NavbarFarmer/>
      <Row>
        <h2>
          <b>
            <i style={{ color: " blue" }}>
              <u> DELETE CROP </u>{" "}
            </i>
          </b>
        </h2>
        <hr />
        <Col>
          <br></br> <br></br>
          
          {crop !== null && (
            <div>
              <p >
                <b> CROP ID : <i style={{ color: " green" }}>{crop.id}</i></b>
              
              </p>
              <p style={{marginRight:"130px"}}>
                <b>
                  CROP NAME:<i style={{ color: " green" }}> {crop.cropName}</i>
                </b>
              </p>
              <p style={{marginRight:"193px"}}>
                <b>
                  PRICE:<i style={{ color: " green" }}>{crop.price}</i>
                </b>
              </p>

              <p style={{marginLeft:"36%"}}>
                <b>
                  IMAGE URL:<i style={{ color: " green" }}> {crop.imageUrl}</i>
                </b>
              </p>
            </div>
          )}
          <br></br>
          <div>
            <button className="delete"  class="btn btn-danger"  onClick={deleteCrop}>
              <b> Delete</b>
            </button>
          </div>
        </Col>
      </Row>
      <Footer/>
    </Container>
    </div>
  );
}

export default DeleteCrop;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router";
// // import { useNavigate } from 'react-router-dom';
// function DeleteCrop() {
//   const [order, setOrder] = useState(null);
//   const { id } = useParams();
//   // const navigate = useNavigate();
//   const fetchOrderById = () => {
//     axios
//       .get("http://localhost:9001/crop/crop/"+id)
//       .then((resp) => setOrder(resp.data));
//   };
//   useEffect(fetchOrderById);
//   const deleteOrder = () => {
//     axios.delete("http://localhost:9001/crop/delete/" + id).then((resp) => {
//       alert(resp.data);
//     });
//   };
//   return (
//     <div>
//       <h2>Order Details</h2>
//       {order !== null && (
//         <div>

  
//           <p> CROP ID : {order.id}</p>
//           <p> CROP NAME : {order.cropName}</p>
//           <p> PRICE : {order.price}</p>
//           <p> IMAGE URL: {order.imageUrl}</p>
//         </div>
//       )}
//       <div>
//         <button onClick={deleteOrder}>Delete</button>
//       </div>
//     </div>
//   );
// }
// export default DeleteCrop;