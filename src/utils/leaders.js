import { google } from "googleapis";
import { unstable_cache } from "next/cache";

const fetchLeaders =
  unstable_cache(
    async () => {
      const sheetId = process.env.SHEET_ID;
      
      // Fix: Handle the credentials parsing more safely
      let keys;
      try {
        // Remove any escaped characters and parse
        const credsString = process.env.GOOGLE_API_CREDS.replace(/\\n/g, '\n');
        keys = JSON.parse(credsString);
      } catch (error) {
        console.error('Error parsing credentials:', error);
        throw new Error('Invalid credentials format');
      }

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
        range: `Leaders!A2:F`,
        valueRenderOption: 'FORMATTED_VALUE',
        dateTimeRenderOption: 'FORMATTED_STRING'
      });

      console.log("Fetched leader data from Google Sheets");

      const rows = response.data.values || [];
      const leaders = [];

      for (const row of rows) {
        if (row.length >= 6) {
          leaders.push({
            name: row[0] || 'Unknown',
            title: row[4] || 'No Title',
            desc: row[1] || '',
            image: row[2] || '',
            yog: row[3] || '',
            email: row[5] || ''
          });
        }
      }

      return leaders;
    },
    { tags: ["all"], revalidate: 5000 }
  );

export default fetchLeaders;
