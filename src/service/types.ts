type FlashCardAddResponse = {
    message: string;
    success: boolean;
}

type User = {
    id: number;
    userName: string;
}

type FlashCardDto = {
    word: string;
    sentence: string;
    translate: string;
    userNumber: number
}

export type { FlashCardAddResponse, User, FlashCardDto };
