import { Given, Then } from "@cucumber/cucumber";
import assert from "assert";
import request from "supertest";

import { aplication } from "./hook.steps";

let _request: request.Test;
let _response: request.Response;

Given("I send a GET request to pokeapi {string}", (route: string) => {
	_request = request(aplication.httpServer).get(route);
});

Then("I receive a {int} status code", async (status: number) => {
	_response = await _request.expect(status);
});

Then("the response content should be like:", (response: string) => {
	assert.deepStrictEqual(_response.body, JSON.parse(response));
});

Given("I send a bad GET request to pokeapi {string}", (route: string) => {
	_request = request(aplication.httpServer).post(route);
});

Then("the response status should throw {int}", async (status: number) => {
	_response = await _request.expect(status);
});

Then("the response content should throw an error:", (response: string) => {
	assert.deepStrictEqual(_response.body, JSON.parse(response));
});
