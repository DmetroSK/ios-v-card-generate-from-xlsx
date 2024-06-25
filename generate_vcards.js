const XLSX = require("xlsx");
const fs = require("fs");
const readlineSync = require("readline-sync");

// Get input from the user
const xlsxFileName =
  readlineSync.question(
    "Enter the name of the XLSX file (without extension): "
  ) + ".xlsx";
const categoryName = readlineSync.question("Enter the category name: ");
const prefix = readlineSync.question("Enter the prefix: ");
const outputVcfName =
  readlineSync.question(
    "Enter the name of the output VCF file (without extension): "
  ) + ".vcf";

// Read the Excel file
const workbook = XLSX.readFile(xlsxFileName);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Define the vCard template
const vcardTemplate = `BEGIN:VCARD
VERSION:3.0
FN:{firstName}
N:{lastName};{prefix} {firstName};
TEL;TYPE=CELL:{phone}
CATEGORIES:${categoryName}
END:VCARD
`;

let vcardOutput = "";

// Convert worksheet to JSON and process each row
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

// Write the output to a VCF file
fs.writeFileSync(outputVcfName, vcardOutput);

console.log(`VCF file '${outputVcfName}' created successfully.`);
