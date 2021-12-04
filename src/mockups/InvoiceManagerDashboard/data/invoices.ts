import Status from "../constants/status";
import IInvoice from "../state/IInvoice";

const INVOICES:IInvoice[]  = [{
    id: "1",
    client: {
        name: "K. Ltd.",
        initials: "K",
        website: "www.k.com",
    },
    address: {
        street: "123 Main St.",
        city: "Anytown",
        state: "CA",
        zip: "12345",
        country: "USA"
    },
    issueDate: "01/01/2019",
    amount: 1000000000,
    status: Status.PAID
}, {
    id: "1",
    client: {
        name: "K. Ltd.",
        initials: "K",
        website: "www.k.com",
    },
    address: {
        street: "123 Main St.",
        city: "Anytown",
        state: "CA",
        zip: "12345",
        country: "USA"
    },
    issueDate: "01/01/2019",
    amount: 1000000000,
    status: Status.PAID
}]

export default INVOICES;