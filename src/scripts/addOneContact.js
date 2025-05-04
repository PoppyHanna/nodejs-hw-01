import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async (number) => {

    try {
         const contactsList = await readContacts();
               
               const addNewContacts = Array.from({ length: number }, () => createFakeContact());
       
               const updatedContacts = [...contactsList, ...addNewContacts];
       
               await writeContacts(updatedContacts);
    } catch (err) {
        console.error('Error:', err);
       throw err;
    }
};

addOneContact(1);
