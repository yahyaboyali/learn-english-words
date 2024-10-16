
// FlashCardService.ts
import axios from 'axios';
import { NoteDto } from './types';

export interface Note {
    word: string;
    sentence: string;
    translate: string;
    userNumber: number
}

class NoteService {
    API_URL = 'http://ec2-16-171-253-65.eu-north-1.compute.amazonaws.com/api/note/';
    API_URL_LOCAL = 'http://localhost:8080/api/note/'


    // FlashCard eklemek için metot
    public async addNote(note: Note): Promise<string> {
        try {
            const response = await axios.post(this.API_URL + 'add', note);
            return response.data.message; // İsteğe bağlı olarak yanıtı dönebilirsiniz
        } catch (error) {
            throw new Error('Note eklenirken bir hata oluştu: ' + error);
        }
    }
    getAll() {
        return axios.get(this.API_URL + "getAll")
    }
    getByUserId(userId: number) {
        return axios.get(`${this.API_URL}getByUserNote/${userId}`);
    }

    public async saveNote(userNote: NoteDto): Promise<string> {
        try {
            const response = await axios.post(this.API_URL + 'add', userNote);
            return response.data.message; // İsteğe bağlı olarak yanıtı dönebilirsiniz
        } catch (error) {
            throw new Error('Yeni not eklenirken bir hata oluştu: ' + error);
        }
    }
}

export default new NoteService(); // Tekil bir örnek oluşturuyoruz
