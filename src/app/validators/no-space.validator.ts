import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function noSpaceValidator() : ValidatorFn {

    return (control : AbstractControl) : ValidationErrors | null  => {
        const value = control.value;
        if(value && value.includes(' ')){
            return { noSpaceError : true };
        }
        return null;
    }
}


