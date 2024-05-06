import { v4 as uuid } from "uuid";
import * as path from "path";
import fs from "fs";

class FileService {
  saveFile(file) {
    try {
      const fileName = uuid() + ".jpg";
      const staticDir = path.resolve("static");
      if (!fs.existsSync(staticDir)) {
        fs.mkdirSync(staticDir);
      }
      const filePath = path.resolve("static", fileName);
      file.mv(filePath);
      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FileService();
