import { Given, Then } from "@cucumber/cucumber";
import assert from "assert";
import request from "supertest";

import { aplication } from "./hook.steps";

let _request: request.Test;
let _response: request.Response;

Given("I send a GET request to {string}", (route: string) => {
	_request = request(aplication.httpServer).get(route);
});

Then("the response status should be {int}", async (status: number) => {
	_response = await _request.expect(status);
});

Then("the response content should be:", (response: string) => {
	assert.deepStrictEqual(_response.body, JSON.parse(response));
});
