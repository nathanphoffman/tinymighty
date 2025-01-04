import { stringify } from "querystring";

const NUMBER = 'number' as const;

function TYPE_ERROR(type: string) {
    return `type ${type} could not be converted to internal JS type`;
}

export type UnsignedInteger = number & 'untypeable' | INVALID_TYPE<number>;

type INVALID_VALUE = unknown;
type INVALID_TYPE<T> = {
    value: INVALID_VALUE,
    errors: string[]
};

export function NotType<T>(value: any, ...errors: string[]): INVALID_TYPE<T> {
    return {
        value,
        // the assumption for not passing in an error is that the underlining type is not valid, ie converting string to number
        // as compared to a number being the value of 2 when it shouldn't be (this is not an internal JS issue)
        errors: errors || []
    }
}

// IsType is one of the only places in this entire code base where any and `as` is allowed
// What we are doing here is validating an invalid type to prevent others from being able to merely rely on the type being
export function IsType<T>(value: any) {
    return value as T;
}

export function UnsignedInteger(candidate: number) : UnsignedInteger | INVALID_TYPE<UnsignedInteger> {
    if(typeof candidate !== NUMBER) return NotType<UnsignedInteger>(candidate, TYPE_ERROR('UnsignedInteger'));
    else if(candidate < 0) return NotType(candidate, "Unsigned types cannot be less than 0");
    else return IsType<UnsignedInteger>(candidate);
}