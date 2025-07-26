import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const countContact = 5;

const generateContacts = async (countContact) => {

    const existingContacts = await readContacts();

    const newContacts = Array.from({length: countContact}, () => createFakeContact());

    const updateContacts = [...existingContacts, ...newContacts];

    await writeContacts(updateContacts);
    console.log(`✔ Додано ${countContact} контактів. Загальна кількість контактів: ${updateContacts.length}`);

};

generateContacts(countContact);
