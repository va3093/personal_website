import * as t from "io-ts";
import { JSONified } from "../api/types";

export const validateJsonSync = <T, O, I>(
  validator: t.Type<T, O, I>,
  input: I
): T => {
  const result = validator.decode(input);
  if (result._tag === "Left") {
    throw new Error("json_parsing_error");
  } else {
    return result.right;
  }
};

export const listResponse = <Model>(
  validator: t.Type<Model, JSONified<Model>>
) => {
  return t.type({
    data: t.array(validator),
  });
};
