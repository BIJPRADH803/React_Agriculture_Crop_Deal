import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/UpdateCrop.css";
const UpdateCrops = () => {

    const [cropName, setCropName] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const [formErrors, setFormErrors] = useState({});
   
    const navigate = useNavigate();
   
    const { id } = useParams();

    const saveOrUpdateCrop = (e) => {
        e.preventDefault();
        

        const crop = { cropName, price, imageUrl }

        let errors = {};

        if (!crop.cropName) {
            errors["cropNameErr"] = "Crop  Name is required";
        }
        if (!crop.price) {
            errors["priceErr"] = "Price is required";
        }
        if (!crop.imageUrl) {
            errors["imageUrlErr"] = "Image is required";
        }

        setFormErrors(errors);

        if (id) {
            axios.put("http://localhost:9001/crop/update/" +id, crop).then((response) => {
                navigate('-1');
            }).catch(error => {
                console.log(error)
            })

        } else {
            axios.post("http://localhost:9001/crop/addCrop", crop).then((response) => {

                console.log(response.data)

                navigate('-1');

            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        axios.get("http://localhost:9001/crop/crop/" +id).then((response) => {
            setCropName(response.data.cropName)
            setPrice(response.data.price)
            setImageUrl(response.data.imageUrl)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Crop</h2>
        } else {
            return <h2 className="text-center">Add Crop</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Crop Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter crop name"
                                        name="cropName"
                                        className="form-control"
                                        value={cropName}
                                        onChange={(e) => setCropName(e.target.value)}
                                    >
                                        
                                    </input>
                                    {formErrors.cropNameErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.cropNameErr}
                                    </div>
                                )}
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Price :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter price"
                                        name="price"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Image Url :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter image url"
                                        name="imageUrl"
                                        className="form-control"
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateCrop(e)} >Submit </button>
                                <Link to="/farmerviewcrops" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UpdateCrops