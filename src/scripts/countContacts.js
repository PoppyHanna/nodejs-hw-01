import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
   
        const contactsList = await readContacts();

        return (`Total contacts: ${ contactsList.length}`);
   
};

console.log(await countContacts());
