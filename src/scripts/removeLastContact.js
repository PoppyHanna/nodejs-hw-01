import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contactsList = await readContacts();
    
        if (contactsList.length === 0) {

            return ('Contact list is empty!');

        } else {
            contactsList.pop();
            await writeContacts(contactsList);
            console.log(`Last contact removed, total contacts left: ${contactsList.length}`);
        }
    } catch (error) {
        console.error('Error...', error);
    }
};

removeLastContact();
