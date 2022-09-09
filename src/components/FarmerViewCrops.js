import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Col, Container, Row } from 'reactstrap'

import NavbarFarmer from './NavbarFarmer'

export const FarmerViewCrops = () => {

    const [crop, setCrop] = useState([])

    useEffect(() => {

        getAllCrops();
    }, [])

    const getAllCrops = () => {
        fetch("http://localhost:9001/crop/allCrops").then((result) => {

            result.json().then((resp) => {

                setCrop(resp);

            });

        });
    }



    // const deleteCrop = (id) => {
    //     axios.delete('http://localhost:9001/crop/delete/' + id)
    //         .then((response) => {
    //             getAllCrops();

    //         }).catch(error => {
    //             console.log(error);
    //         })

    // }

    return (


        <div>
            <NavbarFarmer />
            <Container fluid>
                <span>
                    <h3>Crops</h3>
                    <hr />
      
               <Link to = "/addcrops" className = "btn btn-primary mb-2" > Add Crops</Link>
                </span>

                <Row>
                    {crop.map((cr) => (
                        <Col sm="4">
                            <div className="card w-55 shadow-lg  mb-5 bg-white rounded" style={{ width: 400 }}>
                                <img className="card-img mx-auto" src={cr.imageUrl} alt="Card image" style={{ width: 220, height: 220 }} />
                                <div className="card-body text-center">
                                    <div className="details">
                                      
                                        <h3>{cr.cropName}</h3>
                                        <p>Price - {cr.price}Rs/TONNE</p>
                                      {/* to={ /'updateProduct/${product.id}` */}
                                       {/* to={`/crop/update`} */}
                                        <Link className="btn btn-success" to={`/crop/update/${cr.id}`} >Update</Link>
                                        {/* <button className="btn btn-danger" onClick={() => deleteCrop(crop.id)}
                                            style={{ marginLeft: "10px" }}> Delete</button> */}

                                     <Link className="btn btn-danger" to={`/crop/delete/${cr.id}`} >Delete</Link>  
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>

    )
}
