//* Readable - чтение
//* Writable - Запись
//* Duplex - Для чтения и записи Readable + Writable
//* Transform - Такой же как Duplex, но может изменить данные по мере чтения

import fs from "fs";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);

//_

// fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

//_

// const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });
// stream.on("end", () => console.log("Закончили читать"));
// stream.on("open", () => console.log("Начали читать"));
// stream.on("error", (e) => console.log(e));

//_

// const writableStream = fs.createWriteStream(
//   path.resolve(__dirname, "test2.txt")
// );
// for (let i = 0; i < 20; i++) {
//   writableStream.write(i + "\n");
// }

// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on("error");

//_

http.createServer((req, res) => {
  //* req - readable stream
  //* res - writable stream
  const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));

  //* Стрим закончит читать раньше чем пользователь скачает
  // ?  stream.on("data", (chunk) => res.write(chunk));
  // ?  stream.on("end", (chunk) => res.end());

  stream.pipe(res);
});
