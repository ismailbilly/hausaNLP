
const fs = require('fs');
let contributionData = require('../../data/answers.json')

export default async function saveDataAndSendMail(req, res) {
  const newData = req.body;
    
  try {
   
    contributionData.push(newData)
      fs.writeFileSync("data/answers.json", JSON.stringify(contributionData, null, 2), function (err, file) {
            if (err) throw err;
            console.log("Saved!");
         });
    res.status(200).json({ message: 'sent successfully' })
        
    } catch (error) {
        console.log(error);
    }
}

