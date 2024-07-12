import xlsx from "xlsx";
const { readFile, utils } = xlsx;
import { createObjectCsvWriter as createCsvWriter } from "csv-writer";

const inputFile = process.argv[2]; // Take the input file path from command line argument
const outputFile = "output_data.csv";

// Read the Excel file
let workbook = null;

try {
  workbook = readFile(inputFile);
} catch (e) {
  console.error("[Error] Source file not found!");
  console.log("Usage: node create_contacts_csv.js <excel-file-path>");
  process.exit(1);
}

const sheetName = workbook.SheetNames[0]; // Assuming the first sheet
const worksheet = workbook.Sheets[sheetName];
const jsonData = utils.sheet_to_json(worksheet);

// Define the field names for the output CSV
const csvWriter = createCsvWriter({
  path: outputFile,
  header: [
    { id: "Name", title: "Name" },
    { id: "Given Name", title: "Given Name" },
    { id: "Additional Name", title: "Additional Name" },
    { id: "Family Name", title: "Family Name" },
    { id: "Yomi Name", title: "Yomi Name" },
    { id: "Given Name Yomi", title: "Given Name Yomi" },
    { id: "Additional Name Yomi", title: "Additional Name Yomi" },
    { id: "Family Name Yomi", title: "Family Name Yomi" },
    { id: "Name Prefix", title: "Name Prefix" },
    { id: "Name Suffix", title: "Name Suffix" },
    { id: "Initials", title: "Initials" },
    { id: "Nickname", title: "Nickname" },
    { id: "Short Name", title: "Short Name" },
    { id: "Maiden Name", title: "Maiden Name" },
    { id: "File As", title: "File As" },
    { id: "Birthday", title: "Birthday" },
    { id: "Gender", title: "Gender" },
    { id: "Location", title: "Location" },
    { id: "Billing Information", title: "Billing Information" },
    { id: "Directory Server", title: "Directory Server" },
    { id: "Mileage", title: "Mileage" },
    { id: "Occupation", title: "Occupation" },
    { id: "Hobby", title: "Hobby" },
    { id: "Sensitivity", title: "Sensitivity" },
    { id: "Priority", title: "Priority" },
    { id: "Subject", title: "Subject" },
    { id: "Notes", title: "Notes" },
    { id: "Language", title: "Language" },
    { id: "Photo", title: "Photo" },
    { id: "Group Membership", title: "Group Membership" },
    { id: "Phone 1 - Type", title: "Phone 1 - Type" },
    { id: "Phone 1 - Value", title: "Phone 1 - Value" },
  ],
});

const getGroupName = (isTech) => {
  if (
    isTech &&
    (isTech.toLowerCase().startsWith("y") ||
      ["y", "yes", "yes", "yes"].includes(isTech.toLowerCase()))
  ) {
    return `[GoG] (Techie)`;
  } else {
    return `[GoG] (Non-Tech)`;
  }
};

const getIsVerified = (isVerified) => {
  if (
    isVerified &&
    (isVerified.toLowerCase().startsWith("y") ||
      ["y", "yes", "yes", "yes"].includes(isVerified.toLowerCase()))
  ) {
    return true;
  } else {
    return false;
  }
};

let records = jsonData.map((row) => {
  const fullName = row["Full Name"];
  const givenName = fullName.split(" ")[0];
  const familyName = fullName.split(" ").slice(-1).join(" ");
  const phoneNumber = row["Contact Information (WhatsApp Number)"];
  const isVerified = row["Verified"];
  const isTechie = row["isTechie?"];

  if (!getIsVerified(isVerified)) {
    return null;
  }

  return {
    Name: `${fullName} ${getGroupName(isTechie)}`,
    "Given Name": givenName,
    "Additional Name": getGroupName(isTechie),
    "Family Name": familyName,
    "Yomi Name": "",
    "Given Name Yomi": "",
    "Additional Name Yomi": "",
    "Family Name Yomi": "",
    "Name Prefix": "",
    "Name Suffix": "",
    Initials: "",
    Nickname: "",
    "Short Name": "",
    "Maiden Name": "",
    "File As": "",
    Birthday: "",
    Gender: "",
    Location: "",
    "Billing Information": "",
    "Directory Server": "",
    Mileage: "",
    Occupation: "",
    Hobby: "",
    Sensitivity: "",
    Priority: "",
    Subject: "",
    Notes: "",
    Language: "",
    Photo: "",
    "Group Membership": "* myContacts",
    "Phone 1 - Type": "Mobile",
    "Phone 1 - Value": phoneNumber,
  };
});

records = records.filter((record) => record !== null);

// Write the records to the CSV file
csvWriter.writeRecords(records).then(() => {
  console.log("CSV file has been created successfully.");
});
