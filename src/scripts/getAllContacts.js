import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const contacts = await readContacts();
    if (contacts.length === 0) {
        console.log('❌Контактів не знайдено');
        return;

    }
    console.table(contacts);

};

console.log(await getAllContacts());
