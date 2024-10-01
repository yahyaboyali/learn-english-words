
// FlashCardService.ts
import axios from 'axios';

export type getByUserIdRequest = {
    userId: number
}

class UserService {
    API_URL = 'http://ec2-13-61-33-46.eu-north-1.compute.amazonaws.com/api/users/';
    API_URL_LOCAL = 'http://localhost:8080/api/users/'

    getAll() {
        return axios.get(this.API_URL + "getAll")
    }
    getById(userId: number) {
        return axios.get(this.API_URL + "getByUserId/" + userId)
    }
}

export default new UserService(); // Tekil bir örnek oluşturuyoruz
