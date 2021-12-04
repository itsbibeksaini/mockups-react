import Status from "../constants/status";
import Address from "../data/address";
import Client from "../data/client";

interface IInvoice {
    id: string;
    client: Client;
    address: Address;
    issueDate: string;
    amount: number;
    status: Status;
}

export default IInvoice;