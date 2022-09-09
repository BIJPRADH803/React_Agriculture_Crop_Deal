import axios from "axios";

let dlr={
    dealerId: "1001",
    firstName: "jiten",
    lastName: "kumar",
    phoneNumber: "9087654321",
      email: "jitu@gmail.com"
}

test("Testing Dealer By Id function.", async () => {
    axios.get("http://localhost:9002/dealer/get/" +1001).then((resp) =>{
        let dealer = result.data;
        expect(dealer).toBe(dealer);       
    });
});

test("Testing Add Dealer funciton.", async () => {
    axios.post("http://localhost:9002/dealer/save",dlr).then((resp) =>{
        let dealer = result.data;
        expect(dealer).toBe(crop);        
    });
});

test("Testing List all Dealer  funciton.", async () => {
    axios.get("http://localhost:9002/dealer/allDealers").then((resp) =>  {
        let dealer = result.data;
        expect(dealer).toBe(dealer);        
    });
});

test("Testing Update Dealer funciton.", async () => {
    axios.get("http://localhost:9002/dealer/update/"+1001).then(resp => {
        let dealer = result.data;
        expect(dealer).toBe(dealer);        
    });
});
test("Testing Delete Crop funciton.", async () => {
    axios.get("http://localhost:9002/dealer/delete/"+1001).then(resp => {
        let dealer = result.data;
        expect(dealer).toBe(dealer);        
    });scrollBy
});

