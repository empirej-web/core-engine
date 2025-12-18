const fs = require('fs');
const path = require('path');

class Parser {
  constructor(config) {
    this.config = config;
  }

  parseFile(filePath) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return this.parseContent(fileContent);
    } catch (error) {
      throw new Error(`Failed to parse file: ${error.message}`);
    }
  }

  parseContent(content) {
    const parserConfig = this.config.parser;
    const parserType = parserConfig.type;

    switch (parserType) {
      case 'json':
        return JSON.parse(content);
      case 'csv':
        return this.parseCsv(content);
      default:
        throw new Error(`Unsupported parser type: ${parserType}`);
    }
  }

  parseCsv(content) {
    const csvRows = content.split('\n');
    const headers = csvRows.shift().split(',');
    const data = [];

    csvRows.forEach((row) => {
      const rowValues = row.split(',');
      const rowObject = {};

      headers.forEach((header, index) => {
        rowObject[header.trim()] = rowValues[index].trim();
      });

      data.push(rowObject);
    });

    return data;
  }
}

module.exports = Parser;