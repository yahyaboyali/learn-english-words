
// FlashCardService.ts
import axios from 'axios';

export interface FlashCard {
    word: string;
    sentence: string;
}

class FlashCardService {
    API_URL = 'http://ec2-13-61-33-46.eu-north-1.compute.amazonaws.com/api/words/';


    // FlashCard eklemek için metot
    public async addFlashCard(flashCard: FlashCard): Promise<void> {
        try {
            const response = await axios.post(this.API_URL + 'add', flashCard);
            return response.data; // İsteğe bağlı olarak yanıtı dönebilirsiniz
        } catch (error) {
            throw new Error('FlashCard eklenirken bir hata oluştu: ' + error);
        }
    }
    getAll() {
        return axios.get(this.API_URL + "getAll")
    }
}

export default new FlashCardService(); // Tekil bir örnek oluşturuyoruz
