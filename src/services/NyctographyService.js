import nyctoTable from "./nyctoTable.json";

class NyctographyService {
  static charToGlyph(char) {
    if (char === " ") return nyctoTable["space"];
    return nyctoTable[char.toLowerCase()];
  }
}

export default NyctographyService;
