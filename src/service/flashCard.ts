
// FlashCardService.ts
import axios from 'axios';

export interface FlashCard {
    word: string;
    sentence: string;
    translate: string;
    userNumber: number
}

class FlashCardService {
    API_URL = 'http://ec2-13-61-33-46.eu-north-1.compute.amazonaws.com/api/words/';
    API_URL_LOCAL = 'http://localhost:8080/api/words/'


    // FlashCard eklemek için metot
    public async addFlashCard(flashCard: FlashCard): Promise<string> {
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
