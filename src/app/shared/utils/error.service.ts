import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

Injectable()
export class ErrorService{

    getModelStateErrors(response){

        let errors: any = [];
        let propertyError = {};

        // handle validation error
        let validationErrorDictionary = response.json().ModelState;
        for (var fieldName in validationErrorDictionary) {
          if (validationErrorDictionary.hasOwnProperty(fieldName)) {

            propertyError = {fieldname : fieldName.substr(fieldName.indexOf('.') + 1), error : validationErrorDictionary[fieldName] };

            //const error = validationErrorDictionary[fieldName];
            errors.push(propertyError);
            // const propName = fieldName.substr(fieldName.indexOf('.') + 1);
            // if (this.bagForm.controls[propName] != null)
            //   this.bagForm.controls[propName].setErrors({ 'CustomError': error });
          }
        }

        return errors;
    }

    validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
      });
    }

    disabledAllFormFields(formGroup: FormGroup, enable: boolean) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          if (enable)
            control.enable();
          else
            control.disable();
        } else if (control instanceof FormGroup) {
          this.disabledAllFormFields(control, enable);
        }
      });
  
    }
}