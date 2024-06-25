# VCF Generator from XLSX

This script converts contact information stored in an XLSX file into a VCF file, which can be used to import contacts into various applications.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. **Clone the Repository**

```sh
   git clone git@github.com:DmetroSK/ios-v-card-generate-from-xlsx.git
```

2. **Navigate to the Project Directory**

```sh
   cd ios-v-card-generate-from-xlsx
```

3. **Install Dependencies**

```sh
    npm install
```

## Preparing Your Input XLSX File

1. **Create an XLSX File**

   Create an XLSX file with the following columns **without header.**

   - First Name
   - Last Name
   - Phone

   Example:

   | First Name | Last Name | Phone      |
   | ---------- | --------- | ---------- |
   | John       | Doe       | 1234567890 |
   | Jane       | Smith     | 0987654321 |

2. **Save the File**

   Save the XLSX file in the same directory as the script.

## How to Use

1. **Run the Script**

```sh
   node generate_vcards.js
```

2. **Provide Input When Prompted**

The script will prompt you to enter the following details:

- The name of the input XLSX file (without the .xlsx extension).
- The category name for the contacts.
- The prefix to be added before the first names in the VCF file.
- The name of the output VCF file (without the .vcf extension).

3. **Output**

After running the script and providing the necessary inputs, a VCF file will be generated in the same directory.
