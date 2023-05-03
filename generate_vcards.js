const XLSX = require("xlsx");
const fs = require("fs");

const workbook = XLSX.readFile("colombo.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const vcardTemplate = `BEGIN:VCARD
VERSION:3.0
FN:{firstName}
N:{lastName};{prefix} {firstName};
TEL;TYPE=CELL:{phone}
CATEGORIES:myContacts
END:VCARD
`;

let vcardOutput = "";
const prefix = "BS";

XLSX.utils.sheet_to_json(worksheet, { header: 1, range: 1 }).forEach((row) => {
  const [firstName, lastName, phone] = row;
  const vcard = vcardTemplate
    .replace("{firstName}", firstName)
    .replace("{lastName}", lastName)
    .replace("{prefix}", prefix)
    .replace("{firstName}", firstName)
    .replace("{prefix}", prefix)
    .replace("{phone}", phone);
  vcardOutput += vcard + "\n";
});

fs.writeFileSync("output.vcf", vcardOutput);
