const xlsx = require('xlsx');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Define input and output file names
const inputFile = 'D:/Projects/GoG-CSV-Data/GoG Entries.xlsx'; // Replace with your input file name
const outputFile = 'output_data.csv';

// Read the Excel file
const workbook = xlsx.readFile(inputFile);
const sheetName = workbook.SheetNames[0]; // Assuming the first sheet
const worksheet = workbook.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(worksheet);

// Define the fieldnames for the output CSV
const csvWriter = createCsvWriter({
  path: outputFile,
  header: [
    { id: 'Name', title: 'Name' },
    { id: 'Given Name', title: 'Given Name' },
    { id: 'Additional Name', title: 'Additional Name' },
    { id: 'Family Name', title: 'Family Name' },
    { id: 'Yomi Name', title: 'Yomi Name' },
    { id: 'Given Name Yomi', title: 'Given Name Yomi' },
    { id: 'Additional Name Yomi', title: 'Additional Name Yomi' },
    { id: 'Family Name Yomi', title: 'Family Name Yomi' },
    { id: 'Name Prefix', title: 'Name Prefix' },
    { id: 'Name Suffix', title: 'Name Suffix' },
    { id: 'Initials', title: 'Initials' },
    { id: 'Nickname', title: 'Nickname' },
    { id: 'Short Name', title: 'Short Name' },
    { id: 'Maiden Name', title: 'Maiden Name' },
    { id: 'File As', title: 'File As' },
    { id: 'Birthday', title: 'Birthday' },
    { id: 'Gender', title: 'Gender' },
    { id: 'Location', title: 'Location' },
    { id: 'Billing Information', title: 'Billing Information' },
    { id: 'Directory Server', title: 'Directory Server' },
    { id: 'Mileage', title: 'Mileage' },
    { id: 'Occupation', title: 'Occupation' },
    { id: 'Hobby', title: 'Hobby' },
    { id: 'Sensitivity', title: 'Sensitivity' },
    { id: 'Priority', title: 'Priority' },
    { id: 'Subject', title: 'Subject' },
    { id: 'Notes', title: 'Notes' },
    { id: 'Language', title: 'Language' },
    { id: 'Photo', title: 'Photo' },
    { id: 'Group Membership', title: 'Group Membership' },
    { id: 'Phone 1 - Type', title: 'Phone 1 - Type' },
    { id: 'Phone 1 - Value', title: 'Phone 1 - Value' },
  ],
});

const records = jsonData.map(row => {
  const fullName = row["Full Name"];
  const givenName = fullName.split(' ')[0];
  const familyName = fullName.split(' ').slice(-1).join(' ');
  const phoneNumber = row["Contact Information (WhatsApp Number)"];

  return {
    "Name": fullName,
    "Given Name": givenName,
    "Additional Name": "",
    "Family Name": familyName,
    "Yomi Name": "",
    "Given Name Yomi": "",
    "Additional Name Yomi": "",
    "Family Name Yomi": "",
    "Name Prefix": "",
    "Name Suffix": "",
    "Initials": "",
    "Nickname": "",
    "Short Name": "",
    "Maiden Name": "",
    "File As": "",
    "Birthday": "",
    "Gender": "",
    "Location": "",
    "Billing Information": "",
    "Directory Server": "",
    "Mileage": "",
    "Occupation": "",
    "Hobby": "",
    "Sensitivity": "",
    "Priority": "",
    "Subject": "",
    "Notes": "",
    "Language": "",
    "Photo": "",
    "Group Membership": "* myContacts",
    "Phone 1 - Type": "Mobile",
    "Phone 1 - Value": phoneNumber,
  };
});

// Write the records to the CSV file
csvWriter.writeRecords(records)
  .then(() => {
    console.log('CSV file has been created successfully.');
  });
