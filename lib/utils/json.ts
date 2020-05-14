import * as t from "io-ts";
import { either } from "fp-ts/lib/Either";

export const validateJsonSync = <T, O, I>(validator: t.Type<T, O, I>, input: I): T => {
  const result = validator.decode(input);
  if (result._tag === "Left") {
    throw new Error("json_parsing_error");
  } else {
    return result.right;
  }
};

export const listResponse = <Model>(validator: t.Type<Model, JSONified<Model>>) => {
  return t.type({
    data: t.array(validator),
  });
};

/** This type takes a type and tranlates it to what the type would be in JSON.
 *
 *  It converts the types of non JSON compatible types to json compatible types.
 *  - Dates become strings
 *  - Typeof is a io-ts types and indicates that it can be recursively JSONified
 *  - Otherwise just take the type as is
 *
 *  If T is an array do the same thing but return an array
 */
export type JSONified<T> = T extends Array<infer E>
  ? {
      [Key in keyof E]: E[Key] extends Date
        ? string
        : E[Key] extends t.TypeOf<any> // eslint-disable-line @typescript-eslint/no-explicit-any
        ? JSONified<E[Key]>
        : E[Key];
    }[]
  : {
      [Key in keyof T]: T[Key] extends Date
        ? string
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        T[Key] extends t.TypeOf<any>
        ? JSONified<T[Key]>
        : T[Key];
    };

export const DateType = new t.Type<Date, string, unknown>(
  "DateFromString",
  (date): date is Date => date instanceof Date,
  (dateString, context) =>
    either.chain(t.string.validate(dateString, context), (str) => {
      const date = new Date(str);
      return isNaN(date.getTime()) ? t.failure(dateString, context) : t.success(date);
    }),
  (date) => date.toISOString()
);

export interface ListResponse<Resource> {
  data: Resource[];
}
