import { CustomerAddress } from './customer-address.model';
export class CustomerModel {

    customerId: number;
    name: string;
    email: string;
    cpfCnpj: string;
    phone1: string;
    phone2: string;
    comment: string;

    address: CustomerAddress;

    constructor(data){
        Object.assign(this, data);
        if(data.address != null)
            this.address = new CustomerAddress(data.address);
    }


}
