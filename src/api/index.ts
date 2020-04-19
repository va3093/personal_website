import { validateJsonSync } from "./../utils/json";
import fetch from "isomorphic-unfetch";
import * as t from "io-ts";
import { JSONified } from "./types";

interface ApiRequestParams<Model> {
  method: "GET";
  url: string;
  parser: t.Type<Model, JSONified<Model>>;
}

export const makeApiRequest = <Model>(
  params: ApiRequestParams<Model>
): Promise<Model> => {
  return fetch(params.url, {
    method: params.method,
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return validateJsonSync(params.parser, json);
    })
    .then((model) => {
      return model;
    });
};
