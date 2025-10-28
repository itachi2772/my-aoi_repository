export default async function handler(req, res) {
  const { aadhaar, key } = req.query;

  // 🔑 API key check
  if (key !== "itachi007") {
    return res.status(403).json({ error: "❌ Invalid API key! Use correct key." });
  }

  // 🌐 Original API call
  const apiURL = `https://family-members-n5um.vercel.app/fetch?aadhaar=${aadhaar}&key=paidchx`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    res.status(200).json({
      developer: "By @Mr_Itachi007",
      data,
    });
  } catch (err) {
    res.status(500).json({ error: "⚠️ Server error", details: err.message });
  }
}
