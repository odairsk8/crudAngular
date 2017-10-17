export class AddressModel {
    
    address: string;
    additionalInformation: string;
    postcode: string;
    city: string;
    state: string;
    comment: string;

    constructor(data) {
        Object.assign(this, data);
    }
}