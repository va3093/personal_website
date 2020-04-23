import * as t from "io-ts";

export const validateJsonSync = <T, O, I>(
  validator: t.Type<T, O, I>,
  input: I
): T => {
  const result = validator.decode(input);
  if (result._tag === "Left") {
    // console.log(result);
    throw new Error("json_parsing_error");
  } else {
    return result.right;
  }
};
