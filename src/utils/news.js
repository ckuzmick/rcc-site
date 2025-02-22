import { google } from "googleapis";
import { unstable_cache } from "next/cache";

const fetchNews = unstable_cache(
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

        // Adjust the range as needed based on your News sheet structure.
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: sheetId,
            range: `News!A2:E`,
        });

        console.log("Fetched news data from Google Sheets");

        const rows = response.data.values || [];
        const newsItems = [];

        // Assuming the columns are:
        // A: Title, B: Summary, C: Image URL, D: Date, E: Link
        for (const row of rows) {
            newsItems.push({
                title: row[0],
                cover: row[1],
                date: row[2],
                content: row[3],
                slug: row[4],
            });
        }

        return newsItems;
    },
    { tags: ["all"], revalidate: 5000 }
); // Revalidate every 5 minutes

export default fetchNews;