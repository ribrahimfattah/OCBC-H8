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

    static match(controlName: string, checkControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const control = controls.get(controlName);
            const checkControl = controls.get(checkControlName);

            if (checkControl?.errors && !checkControl.errors.matching) {
                return null;
            }

            if (control?.value !== checkControl?.value) {
                controls.get(checkControlName)?.setErrors({ matching: true });
                return { matching: true };
            } else {
                return null;
            }
        };
    }

    static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password')?.value; // get password from our password form control
        const confirmPassword: string = control.get('confirmPassword')?.value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirmPassword')?.setErrors({ NoPassswordMatch: true });
        }
    }

    static checkLimit(min: number, max: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    }

    static min(min: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value && (isNaN(c.value) || c.value < min)) {
                return { 'min': true };
            }
            return null;
        };
    }
}
