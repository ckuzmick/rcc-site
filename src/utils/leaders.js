import { google } from "googleapis";
import { unstable_cache } from "next/cache";

const fetchLeaders =
  unstable_cache(
    async () => {
      const sheetId = process.env.SHEET_ID;
      const keys = JSON.parse(process.env.GOOGLE_API_CREDS);

      const auth = await google.auth.getClient({
        projectId: keys.project_id,
        credentials: {
          type: "service_account",
          private_key: keys.private_key,
          client_email: keys.client_email,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: `Leaders!A2:F`, // Adjust the range as needed
      });

      console.log("Fetched leader data from Google Sheets");

      const rows = response.data.values || [];
      const leaders = [];

      for (const row of rows) {
        leaders.push({
          name: row[0],
          title: row[4],
          desc: row[1],
          image: row[2],
          yog: row[3],
          email: row[5],
        });
      }

      return leaders;
    }
    , { tags: ["all"], revalidate: 5000 }
  ); // Revalidate every 5 minutes

export default fetchLeaders;
