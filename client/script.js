
const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

// Existing welcome button functionality
welcomeButton.addEventListener("click", function () {
    message.textContent = "Welcome! Your accessible project is working.";
});

// Create backend connection section
const backendSection = document.createElement("section");
backendSection.className = "backend-section";

const backendHeading = document.createElement("h2");
backendHeading.textContent = "Backend Connection";

const backendButton = document.createElement("button");
backendButton.type = "button";
backendButton.textContent = "Check Backend Connection";

const backendStatus = document.createElement("p");
backendStatus.textContent = "Click the button to check the server.";
backendStatus.setAttribute("role", "status");
backendStatus.setAttribute("aria-live", "polite");

backendSection.appendChild(backendHeading);
backendSection.appendChild(backendButton);
backendSection.appendChild(backendStatus);

// Add the section to the webpage
message.insertAdjacentElement("afterend", backendSection);

// Check backend connection
backendButton.addEventListener("click", async function () {
    backendStatus.textContent = "Connecting to backend...";
    backendButton.disabled = true;

    try {
        const response = await fetch("http://localhost:5000/api/health");

        if (!response.ok) {
            throw new Error("Server returned an error.");
        }

        const data = await response.json();

        backendStatus.textContent =
            "Backend connected successfully! " + data.message;

    } catch (error) {
        backendStatus.textContent =
            "Backend connection failed. Please check whether the server is running.";

        console.error("Backend error:", error);

    } finally {
        backendButton.disabled = false;
    }
});
