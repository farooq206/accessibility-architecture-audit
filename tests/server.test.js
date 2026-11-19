
const test = require("node:test");
const assert = require("node:assert");
const { once } = require("node:events");

const app = require("../server/server");

let server;
let baseUrl;

test.before(async () => {
    server = app.listen(0);

    // Wait until the temporary server is ready
    await once(server, "listening");

    const port = server.address().port;
    baseUrl = `http://127.0.0.1:${port}`;
});

test.after(async () => {
    if (server) {
        await new Promise((resolve, reject) => {
            server.close((error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});

test("GET / should return the API welcome message", async () => {
    const response = await fetch(`${baseUrl}/`);
    const data = await response.json();

    assert.strictEqual(response.status, 200);

    assert.strictEqual(
        data.message,
        "Accessibility Audit API is running successfully!"
    );
});

test("GET /api/health should return healthy status", async () => {
    const response = await fetch(`${baseUrl}/api/health`);
    const data = await response.json();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.status, "success");
    assert.strictEqual(data.message, "Server is healthy");
});
