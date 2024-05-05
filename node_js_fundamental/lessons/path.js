// import __dirname from "./__dirname.js";
// import __filename from "./__filename.js";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);

//_

// console.log(
//   "Склеить участки путей",
//   path.join(__dirname, "first", "second", "third")
// );

// console.log("Склеить участки путей", path.join(__dirname, ".."));
// console.log("Склеить участки путей", path.join(__filename, ".."));

// console.log(__dirname, "..");
// console.log(__filename, "..");

// console.log(
//   "Получить абсолютный путь",
//   path.resolve("/first", "/second", "/third")
// );

// console.log(
//   "Получить абсолютный путь",
//   path.resolve("/first", "second", "third")
// );

//_

// const fullpath = path.resolve(__dirname, "first", "second", "third");

// console.log("Парсинг пути", path.parse(fullpath));
// console.log("разделитель в ОС", path.sep);
// console.log("Проверка на абсолютный путь", path.isAbsolute("first/second"));
// console.log("Название файла", path.basename(fullpath));
// console.log("расширение файла", path.extname(fullpath));

//_ работа  с url

const siteURL = "http://localhost:8080/users?id=5123";

const myUrl = new URL(siteURL);
console.log(myUrl);
