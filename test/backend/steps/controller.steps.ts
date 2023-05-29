import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";
import path from "path";
import request from "supertest";

import { aplication } from "./hook.steps";

let _request: request.Test;
let _response: request.Response;
let username: string;
let password: string;

Given("I send a GET request to {string}", (route: string) => {
	_request = request(aplication.httpServer).get(route);
});

Then("the response status should be {int}", async (status: number) => {
	_response = await _request.expect(status);
});

Then("the response content should be:", (response: string) => {
	assert.deepStrictEqual(_response.body, JSON.parse(response));
});

Given("I send a POST request to {string} with a jpg file", (route: string) => {
	const file = path.join(__dirname, "../test-img/nodeShirt.jpg");
	_request = request(aplication.httpServer).post(route).attach("image", file);
});

Given("I send a POST request to {string}", (route: string) => {
	_request = request(aplication.httpServer).post(route);
});

Given("the auth credentials are {string} and {string}", (user: string, pass: string) => {
	username = user;
	password = pass;
});

When(
	"I send a POST request to {string} with the following body:",
	(route: string, body: string) => {
		const jsonBody: JSON = JSON.parse(body);
		_request = request(aplication.httpServer).post(route).auth(username, password).send(jsonBody);
	}
);

Then("the response should have a field {string}", (expectedField: string) => {
	assert.ok(_response.body[expectedField]);
});

Then(
	"the response header {string} should be {string}",
	(header: string, expectedContentType: string) => {
		const contentType = _response.header[header];
		assert.deepStrictEqual(contentType, expectedContentType);
	}
);
