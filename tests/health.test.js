const request = require("supertest");
const express = require("express");

const app = express();

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

test("health endpoint should return healthy", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
});