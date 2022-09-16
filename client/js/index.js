import { createClientHeader } from "./createHeader.js";
import {createClientsSection} from "./createClientsSection.js";

const createApp = () => {
    const header = createClientHeader();
    const clientSection = createClientsSection();
    document.body.append(
        header,
        clientSection.main,
    );
}

createApp()