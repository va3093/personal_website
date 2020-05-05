import { validateJsonSync } from "./../utils/json";
import fetch from "isomorphic-unfetch";
import * as t from "io-ts";
import { JSONified } from "./types";

interface BaseApiRequest {
  method: "GET";
  url: string;
}

interface JSONApiRequestParams<Model> extends BaseApiRequest {
  parser: t.Type<Model, JSONified<Model>>;
}

export const fetchJsonContent = <Model>(
  params: JSONApiRequestParams<Model>
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

export const fetchRawContent = (params: BaseApiRequest): Promise<string> => {
  return fetch(params.url, {
    method: params.method,
  }).then((response) => {
    return response.text();
  });
};
