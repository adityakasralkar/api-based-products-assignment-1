const API_URL = "http://localhost:8000/api/books";

async function testRateLimit() {
  console.log("Testing Kong rate limiting...\n");

  for (let i = 1; i <= 6; i++) {
    const response = await fetch(API_URL);

    console.log(`Request ${i}: Status ${response.status}`);

    if (response.status === 429) {
      console.warn("⚠️ Rate limit reached. Kong blocked this request.");
    }

    const text = await response.text();
    console.log(text);
    console.log("--------------------------------");
  }
}

testRateLimit().catch((error) => {
  console.error("Error while testing rate limit:", error.message);
});