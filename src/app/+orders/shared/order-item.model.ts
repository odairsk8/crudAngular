import { BagModel } from './../../+bags/shared/bag.model';

export class OrderItem {
    
    bag: BagModel;
    amount: number;
    price: number

    constructor(data) {
        Object.assign(this, data);
    }
}