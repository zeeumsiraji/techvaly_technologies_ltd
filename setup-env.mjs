import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyPath = path.join(__dirname, "service-account.json");
const keyData = JSON.parse(fs.readFileSync(keyPath, "utf8"));

let sheetId = "PASTE_YOUR_SHEET_ID_HERE";
const envPath = path.join(__dirname, ".env.local");

if (fs.existsSync(envPath)) {
  const existing = fs.readFileSync(envPath, "utf8");
  const match = existing.match(/GOOGLE_SHEET_ID=(.+)/);
  if (match && match[1].trim() !== "PASTE_YOUR_SHEET_ID_HERE") {
    sheetId = match[1].trim();
  }
}

const envContent = `GOOGLE_SHEET_ID=${sheetId}
GOOGLE_SERVICE_ACCOUNT_EMAIL=${keyData.client_email}
GOOGLE_PRIVATE_KEY="${keyData.private_key.replace(/\n/g, "\\n")}"
`;

fs.writeFileSync(envPath, envContent, "utf8");

console.log("✅ .env.local created successfully!");
console.log(envContent.substring(0, 200) + "...");