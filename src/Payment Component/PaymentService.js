import axios from "axios";

const CAR_API_BASE_URL = "http://localhost:9005/razorpayment";

class PaymentService {

    createOrder(Data){
        return axios.post(CAR_API_BASE_URL +"/create_order", Data);
    }
}

export default new PaymentService()