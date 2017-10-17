import {Injectable} from '@angular/core';

declare var $: any;

@Injectable()
export class NotificationService {

  constructor() {
  }

  smallBox(data, cb?) {
    $.smallBox(data, cb)
  }

  bigBox(data, cb?) {
    $.bigBox(data, cb)
  }

  smartMessageBox(data, cb?) {
    $.SmartMessageBox(data, cb)
  }

  SuccessfullMessage(text: string, callBack){
    $.SmartMessageBox({
      title: "Sucesso",
      content: text,
      buttons: '[Ok]'
    }, callBack);
  }

  ErrorMessageBox(text: string, callBack){
    $.SmartMessageBox({
      title: "Attention",
      content: text,
      buttons: '[Ok]'
    }, callBack);
  }

  GenericErroMessage(){
    $.SmartMessageBox({
      title: "Error",
      content: 'Something went wrong! Try again.',
      buttons: '[Ok]'
    });
  }

  ConfirmMessageBox(text: string, yesCallback){
    $.SmartMessageBox({
      title: "Attention",
      content: text,
      buttons: '[Ok][Cancel]'
    }, (ButtonPress) => {
      if(ButtonPress == 'Cancel'){
        return 0;
      }
      else{
        yesCallback();
      }
    });
  }

}
