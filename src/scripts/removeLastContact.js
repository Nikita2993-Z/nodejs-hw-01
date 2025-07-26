import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const contacts = await readContacts();

    if(contacts.length === 0) {
        console.log("Немає контактів для видалення");
        return;

    }
    contacts.pop();

    await writeContacts(contacts);
    console.log(`Залишилось ${contacts.length} контакта!`);

};

removeLastContact();
