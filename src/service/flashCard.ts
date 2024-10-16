
// FlashCardService.ts
import axios from 'axios';
import { FlashCardDto } from './types';


class FlashCardService {
    API_URL = 'http://ec2-16-171-253-65.eu-north-1.compute.amazonaws.com/api/words/';
    API_URL_LOCAL = 'http://localhost:8080/api/words/'


    // FlashCard eklemek için metot
    public async addFlashCard(flashCard: FlashCardDto): Promise<string> {
        try {
            const response = await axios.post(this.API_URL + 'add', flashCard);
            return response.data.message; // İsteğe bağlı olarak yanıtı dönebilirsiniz
        } catch (error) {
            throw new Error('FlashCard eklenirken bir hata oluştu: ' + error);
        }
    }
    getAll() {
        return axios.get(this.API_URL + "getAll")
    }
    getByUserId(userId: number) {
        return axios.get(`${this.API_URL}getUserFlashCards/${userId}`);
    }
}

export default new FlashCardService(); // Tekil bir örnek oluşturuyoruz
