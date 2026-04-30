// api/onboarding.js

import Airtable from "airtable";

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    restaurant,
    owner,
    phone,
    email,
    pos,
    foodCost,
    laborCost,
    hours,
    employees,
    issues
  } = req.body;

  try {
    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY,
    }).base(process.env.AIRTABLE_BASE_ID);

    await base("Clients").create([
      {
        fields: {
          "Restaurant Name": restaurant,
          "Owner Name": owner,
          Phone: phone,
          Email: email,
          "POS System": pos,
          "Food Cost %": Number(foodCost) || null,
          "Labor Cost %": Number(laborCost) || null,
          Hours: hours,
          Employees: Number(employees) || null,
          "Known Issues": issues,
          Status: "New",
        },
      },
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Airtable Error:", err);
    return res.status(500).json({ error: "Airtable write failed" });
  }
}
