import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import {  Container,  } from "react-bootstrap";
import NavbarFarmer from "./NavbarFarmer";
import Footer from "./Footer";
import "../styles/UpdateCrop.css";


function UpdateCrop() {
    const [crop, setCrop] = useState({
          id: "",
          cropName: "",
          price:"" ,
          imageUrl:""
       
      });

      const { id } = useParams();

      const navigate = useNavigate();

      
      // const fetchCropById = () => {
      //   axios
      //     .get("http://localhost:9001/crop/crop/"+ id)
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
      

      const handleChange = (event) => {
        event.persist();
        setCrop((crop) => ({ ...crop, [event.target.name]: event.target.value }));
      };
      const [formErrors, setFormErrors] = useState({});

      const handleSubmit = () => {
        let errors = {};
        if (!crop.cropName) {
          errors["cropNameErr"] = "Enter Crop  Name";
        }
        if (!crop.price) {
            errors["priceErr"] = "Enter Price";
          }

        //   if (!crop.imageUrl) {
        //     errors["imageUrlErr"] = "Enter  url of the  crop";
        //   }
        
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
          const palyload = {
            id:crop.id,
            cropName:crop.cropName,
            price:crop.price,
            imageUrl:crop.imageUrl,
           
        };
        axios
          .put("http://localhost:9001/crop/update", palyload)
  
          .then((result) => alert(" Crop  updated successfully:"));
           navigate(-1);
      }
    };
    // background-repeat: no-repeat;
    // background-attachment: fixed;  
    // background-size:cover; 
    //  width: 100%;
    //  height: 800px;
    //  object-fit: fixed
  return (
  <div className="updatecropbg"  >
      
    <Container style={{backgroundColor:"lightcyan"}}>
         <div>
         <NavbarFarmer/>
        <h1>
        
          <b>
            <i>Update Crop</i>
          </b>
        </h1>
        <hr></hr>
        <div
       
        class="row h-100 justify-content-center align-items-center"
      >
        <div className="col-10 col-md-8 col-lg-4  " >
        <div>
          <label><b><i>Crop Name</i></b></label>
          <input
           className="form-control"
            type="text"
            name="cropName"
            value={crop.cropName}
            onChange={handleChange}
          />
          {formErrors.cropNameErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.cropNameErr}
            </div>
          )}
        </div>
        <div>
          <label><b><i>Price</i></b></label>
          <input
           className="form-control"
            type="number"
            name="price"
            value={crop.price}
            onChange={handleChange}
          />
          {formErrors.priceErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.priceErr}
            </div>
          )}
        </div>
        <div>
          <label><b><i>Image Url</i></b></label>
          <input
           className="form-control"
            type="text"
            name="imageurl"
            value={crop.imageUrl}
            onChange={handleChange}
          />
           {/* {formErrors.imageUrlErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.imageUrlErr}
            </div> 
          )} */}
        </div>
     

        </div>
        </div>
        <br></br>
        <div>
          <button className="main" class="btn btn-success" btn- onClick={handleSubmit}>
            Update
          </button>
        </div>
       <Footer/>
      </div>

    </Container>
    </div>
  )
}

export default UpdateCrop