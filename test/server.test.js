const request = require("supertest");
const app = require("../src/server");

describe("Project 49 API", () => {

    test("GET / should return 200", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe(
            "Project 49 CI/CD Pipeline is Working!"
        );
    });

    test("GET /health should return healthy status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

});