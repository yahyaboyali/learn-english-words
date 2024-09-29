import axios from "axios";


export default class FlashCardService {
    getAll() {
        return axios.get("http://ec2-13-61-33-46.eu-north-1.compute.amazonaws.com/api/words/getAll")
    }
}