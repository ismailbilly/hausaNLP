const fs = require("fs");
const { google } = require("googleapis");
//const sendMail = require('../../utils/mail')
const service = google.sheets("v4");
const credentials = require("./credentials.json");


export default async function saveDataAndSendMail(req, res) {
    console.log(req.body);
    try {
         fs.writeFileSync("answers.json", JSON.stringify(req.body), function (err, file) {
            if (err) throw err;
            console.log("Saved!");
        });
        
    } catch (error) {
        console.log(error);
    }
}

// export default async function googles(req, res) {
    // Configure auth client
    const authClient = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
    );
 try {

        // Authorize the client
        const token = await authClient.authorize();

        // Set the client credentials
        authClient.setCredentials(token);

        // Get the rows
        const res = await service.spreadsheets.values.get({
            auth: authClient,
            spreadsheetId: "Your spreadsheet ID goes here",
            range: "A:B",
        });

        // All of the answers
        const answers = [];

        // Set rows to equal the rows
        const rows = res.data.values;

        // Check if we have any data and if we do add it to our answers array
        if (rows.length) {

            // Remove the headers
            rows.shift()

            // For each row
            for (const row of rows) {
                answers.push({ timeStamp: row[0], answer: row[1] });
            }

        } else {
            console.log("No data found.");  
        }

        // Saved the answers
        fs.writeFileSync("answers.json", JSON.stringify(answers), function (err, file) {
            if (err) throw err;
            console.log("Saved!");
        });

    } catch (error) {

        // Log the error
        console.log(error);

        // Exit the process with error
        process.exit(1);

    }