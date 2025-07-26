import { writeContacts } from "../utils/writeContacts.js";


export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        console.log("Контакти видалено");

    }catch(error) {
        console.log("Помилка",error.message)
    }
};

removeAllContacts();
