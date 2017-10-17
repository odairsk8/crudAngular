import { OrderItem } from './order-item.model';
import { AddressModel } from './../../shared/model/address/address.model';
import { CustomerModel } from './../../+customer/shared/customer.model';

export class OrderModel {

    customer: CustomerModel;
    address: AddressModel;
    comment: number;
    total: number;
    discount: number;
    invoiceNumber: string;
    items: OrderItem[];

    constructor(data) {
        Object.assign(this, data);

        if (this.customer == null)
            this.customer = new CustomerModel({});

        if (this.address == null)
            this.address = new AddressModel({});

        if (this.items == null)
            this.items = [];
    }
}