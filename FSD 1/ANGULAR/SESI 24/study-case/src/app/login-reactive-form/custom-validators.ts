import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {
    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let result: boolean | string | any
            if (!control.value) {
                // if control is empty return no error
                // return null;
                result = null
            }

            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);

            // if true, return no error (no error), else return error passed in the second parameter
            if (valid == null)
                result = error

            return result;
        };
    }

    static patterValidatorNumeric(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            const value = control.value;

            if (!value) {
                return null;
            }

            const hasNumeric = /[0-9]+/.test(value);

            const passwordValid = hasNumeric;

            return !passwordValid ? { passHasNum: true } : null;
        }
    }

    static patterValidatorUpperCase(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            const value = control.value;

            if (!value) {
                return null;
            }

            const hasUpperCase = /[A-Z]+/.test(value);


            const passwordValid = hasUpperCase;

            return !passwordValid ? { passHasCap: true } : null;
        }
    }

    static patterValidatorLowerCase(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            const value = control.value;

            if (!value) {
                return null;
            }

            const hasLowerCase = /[a-z]+/.test(value);


            const passwordValid = hasLowerCase;

            return !passwordValid ? { passHasSmall: true } : null;
        }
    }

    static patterValidatorSymbol(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            const value = control.value;

            if (!value) {
                return null;
            }

            const hasSymbol = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);


            const passwordValid = hasSymbol;

            return !passwordValid ? { passHasSymbol: true } : null;
        }
    }
}
