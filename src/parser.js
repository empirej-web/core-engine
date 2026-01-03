const fs = require('fs');
const path = require('path');

class Parser {
  constructor(file_path) {
    this.file_path = file_path;
    this.data = null;
  }

  async read_file() {
    try {
      const content = await fs.promises.readFile(this.file_path, 'utf8');
      return content;
    } catch (error) {
      throw new Error(`Error reading file: ${error}`);
    }
  }

  parse_data(content) {
    try {
      const json_data = JSON.parse(content);
      return json_data;
    } catch (error) {
      throw new Error(`Error parsing data: ${error}`);
    }
  }

  async parse_file() {
    const content = await this.read_file();
    const data = this.parse_data(content);
    this.data = data;
    return data;
  }
}

module.exports = Parser;