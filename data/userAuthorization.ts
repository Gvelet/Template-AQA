import { Users } from "@/types/data/userAuthorization";

export const usersAuth: Users = {
    validUser: {
        email: 'lemeshev.m@spectrumdata.ru',
        password: '123123',
    },
    wrongPassword: {
        email: 'lemeshev.m@spectrumdata.ru',
        password: 'sdfklsd1233333232dd',
    },
    emptyField: {
        email: '',
        password: ''
    }
};