import path from "path";
import { promises as fs } from "fs";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function getAnswers(req, res) {
    try {
        const jsonDirectory = path.join(process.cwd(), "data");
        //Read the json data file data.json
        if (req.method === 'GET') {
            const fileContents = await fs.readFile(jsonDirectory + "/answers.json", "utf8")
            res.status(200).json({
                message: 'success',
                data: JSON.parse(fileContents)
            })
        }
        if (req.method === 'POST') {
            const { id } = req.body;
            console.log(id);
            // Read the current JSON data from the file
            const jsonData = await fs.readFile(jsonDirectory + "/answers.json", "utf8")
            //JSON.parse(fs.readFileSync(jsonDirectory + '/answers.json', 'utf-8'));
            
            // Filter out the item with the specified ID
            const updatedData = await JSON.parse(jsonData).filter((item) => item.id !== id);

            // Write the updated data back to the JSON file
            fs.writeFile(jsonDirectory + '/answers.json',
            JSON.stringify(updatedData),
            function (err, file) {
            if (err) throw err;
            console.log("Saved!" + " " + file);
         });
           
            // res.status(200).json({
            //     message: 'success',
            //     data: JSON.parse(fileContents)
            // })
        }
    } catch (err) {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    }
}
  
  