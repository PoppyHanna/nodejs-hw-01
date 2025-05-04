

import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


const generateContacts = async (number) => { 

    try {
      const contactsList = await readContacts();
        
        const addNewContacts = Array.from({ length: number }, () => createFakeContact());

        const updatedContacts = [...contactsList, ...addNewContacts];

      await writeContacts(updatedContacts);
      console.log(`New contacts added, total: ${contactsList.length}`);

      
  } catch (err) {
    console.error('Error...', err);
  }

};

generateContacts(5);

