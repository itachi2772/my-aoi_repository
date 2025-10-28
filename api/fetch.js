// api/fetch.js
export default async function handler(req, res) {
  try {
    const { aadhaar, key } = req.query;

    // Basic validation
    if (!aadhaar) {
      return res.status(400).json({ error: "Missing 'aadhaar' parameter" });
    }

    if (!key || key !== "itachi007") {
      return res.status(401).json({ error: "Invalid or missing key. Use key=itachi007" });
    }

    // Original source API (the real one)
    const upstreamUrl = `https://family-members-n5um.vercel.app/fetch?aadhaar=${encodeURIComponent(
      aadhaar
    )}&key=paidchx`;

    // Fetch from the original source
    const response = await fetch(upstreamUrl);
    if (!response.ok) {
      return res.status(502).json({
        error: "Upstream API Error",
        status: response.status,
      });
    }

    const data = await response.json();

    // Final output (customized)
    const finalResponse = {
      name: "Itachi",
      ...data,
      credit: "by @Mr_Itachi007",
    };

    // Allow CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    res.status(200).json(finalResponse);
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}
