export class HttpResponseModel{

    success: boolean;
    status: number;
    message: string;

    errors: { propertyname: '', error: { errorName: '', message: '' } };

    constructor(){}

}