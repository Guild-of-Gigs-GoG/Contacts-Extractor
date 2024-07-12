# Contacts Extractor

Contacts Extractor is a tool that reads contact information from an Excel sheet and generates a CSV file formatted for use with various contact management systems. The generated CSV includes fields such as name, phone number, email, and other personal details.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Guild-of-Gigs-GoG/Contacts-Extractor.git
cd Contacts-Extractor
```

2. **Install dependencies**

This project requires Node.js. If you don't have Node.js installed, you can download it from [here](https://nodejs.org/).

Once Node.js is installed, run:

```bash
npm install
```

## Usage

1. **Prepare your Excel file**

   Ensure your Excel file (e.g., `contacts.xlsx`) has the following columns:
   - Timestamp
   - Full Name
   - Email Address
   - LinkedIn Profile
   - Portfolio/Website (if available)
   - How many years of freelancing experience do you have?
   - What are your primary areas of expertise? (Check all that apply)
   - What platforms do you primarily use for freelancing? (Check all that apply)
   - Please describe a recent project you worked on and your role in it. (150-200 words)
   - What industries have you worked in? (Check all that apply)
   - Can you describe a challenging project you have worked on and how you overcame the challenges? (200-300 words)
   - What is your preferred type of client or project, and why? (150-200 words)
   - Have you ever managed a team or mentored other freelancers?
   - Would you be interested in mentoring or guiding other freelancers?
   - If yes, in what areas do you feel confident mentoring others? (Check all that apply)
   - Please describe your previous experience in mentoring or guiding others. What was the outcome? (200-300 words)
   - How many hours per week could you dedicate to mentoring or community activities?
   - What motivates you to mentor or guide others? (150-200 words)
   - What topics would you like to see covered in our community? (Check all that apply)
   - How do you prefer to participate in community activities? (Check all that apply)
   - What tools or resources would you find most helpful as a member of this community? (Check all that apply)
   - Can you share an experience where being part of a community helped you in your freelancing career? (200-300 words)
   - Do you have any specific skills or knowledge that you would be willing to share with the community? (150-200 words)
   - Do you have any other suggestions or comments for our freelancer community?
   - Would you be interested in taking on a leadership role within the community?
   - Please explain why you would like to take on a leadership role and what you hope to achieve. (150-200 words)
   - How did you hear about our freelancer community?
   - What do you hope to gain from joining this community? (150-200 words)
   - Email Address
   - Contact Information (WhatsApp Number)
   - Verified
   - isTechie?

2. **Run the script**

```bash
node script.js
```

This will read the `contacts.xlsx` file, process the data, and generate a `contacts.csv` file in the same directory.

## Configuration

The script is configured to read specific columns from the Excel file and format them into the CSV file with the following columns:

- Name
- Given Name
- Additional Name
- Family Name
- Yomi Name
- Given Name Yomi
- Additional Name Yomi
- Family Name Yomi
- Name Prefix
- Name Suffix
- Initials
- Nickname
- Short Name
- Maiden Name
- File As
- Birthday
- Gender
- Location
- Billing Information
- Directory Server
- Mileage
- Occupation
- Hobby
- Sensitivity
- Priority
- Subject
- Notes
- Language
- Photo
- Group Membership
- Phone 1 - Type
- Phone 1 - Value

You can modify the script if your input or output format requirements differ.

## Example

Here is an example of how the data is processed:

1. **Input (Excel file)**:

| Timestamp   | Full Name    | Email Address     | ... | Contact Information (WhatsApp Number) | Verified | isTechie? |
|-------------|--------------|-------------------|-----|---------------------------------------|----------|-----------|
| 2022-01-01  | John Doe     | john@example.com  | ... | +1234567890                            | Yes      | Yes       |

2. **Output (CSV file)**:

```csv
Name,Given Name,Additional Name,Family Name,Yomi Name,Given Name Yomi,Additional Name Yomi,Family Name Yomi,Name Prefix,Name Suffix,Initials,Nickname,Short Name,Maiden Name,File As,Birthday,Gender,Location,Billing Information,Directory Server,Mileage,Occupation,Hobby,Sensitivity,Priority,Subject,Notes,Language,Photo,Group Membership,Phone 1 - Type,Phone 1 - Value
John Doe,John,,Doe,,,,,,,,,,,,,,,,,,,,,,,,,* myContacts,Mobile,+1234567890
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
