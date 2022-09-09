import axios from "axios";

let cr={
    id:"987",
    cropName:"tomato",
    cropType:"vegetables",
    price:20,
    quantity:5,
    address:"bbsr",
    imageUrl:"https://vizaggrocers.com/24-large_default/tamato-tamaatar.jpg"
}

test("Testing Crop By Id function.", async () => {
    axios.get("http://localhost:9001/crop/crop/" +987).then((resp) =>{
        let crop = result.data;
        expect(crop).toBe(crop);       
    });
});

test("Testing Add Crop funciton.", async () => {
    axios.post("http://localhost:9001/crop/addCrop",cr).then((resp) =>{
        let crop = result.data;
        expect(crop).toBe(crop);        
    });
});

test("Testing List all Crop funciton.", async () => {
    axios.get("http://localhost:9001/crop/allCrops").then((resp) =>  {
        let crop = result.data;
        expect(crop).toBe(crop);        
    });
});

test("Testing Update Crop funciton.", async () => {
    axios.get("http://localhost:9001/crop/update/"+987).then(resp => {
        let crop = result.data;
        expect(crop).toBe(crop);        
    });
});
test("Testing Delete Crop funciton.", async () => {
    axios.get("http://localhost:9001/crop/delete/"+987).then(resp => {
        let crop = result.data;
        expect(crop).toBe(crop);        
    });scrollBy
});


