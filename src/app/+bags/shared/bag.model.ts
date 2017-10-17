export class BagModel {

    public bagId: number;
    public name: string;
    public shortDescription: string;
    public longDescription: string;

    constructor(data){
        Object.assign(this, data);
    }

}
