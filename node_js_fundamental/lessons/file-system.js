import fs from "fs";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);

//_ Создание файлов

// fs.mkdirSync(path.resolve(__dirname, "dir1", "dir2", "dir3"), {
//   recursive: true,
// });

//_ Обработка ошибок

// console.log("START");

// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Папка создана");
// });

// console.log("END");

//_ Удаление файлов

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
// });

//_ Создание файла и запись данных

// fs.writeFile(path.resolve(__dirname, "test.txt"), "5 qwerty 583", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Файл записан");
// });

//_ Добавление текста в конец файла

// fs.appendFile(
//   path.resolve(__dirname, "test.txt"),
//   " Добавили в конец",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Файл записан");
//   }
// );

//_ Запись данных и добавление новых данных в конец файла

// fs.writeFile(path.resolve(__dirname, "test.txt"), "5 qwerty 583", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Файл записан");

//   fs.appendFile(
//     path.resolve(__dirname, "test.txt"),
//     " Добавили в конец",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       fs.appendFile(
//         path.resolve(__dirname, "test.txt"),
//         " Добавили в конец",
//         (err) => {
//           if (err) {
//             throw err;
//           }
//           console.log("Файл записан");
//         }
//       );
//       console.log("Файл записан");
//     }
//   );
// });

//_ Колбэки в промисы

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    })
  );
};

// writeFileAsync(path.resolve(__dirname, "test.txt"), "data")
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "123"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "456"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "789"))
//   .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//_ Удаление файла

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

// removeFileAsync(path.resolve(__dirname, "test.txt")).then(() =>
//   console.log("file was removed")
// );

//* Через переменную окружения передать строку, записать ее в файл прочитать файл, посчитать кол-во слов в файле и записать их в новый файл count.txt, затем удалить первый файл

const text = process.env.TEXT || "sdfa s sdd sdf s fsdf";

writeFileAsync(path.resolve(__dirname, "text.txt"), text)
  .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
  .then((data) => data.split(" ").length)
  .then((count) =>
    writeFileAsync(path.resolve(__dirname, "count.txt"), `Кол-вл слов ${count}`)
  )
  .then(() => removeFileAsync(path.resolve(__dirname, "text.txt")));

//*   cross-env TEXT="1 2 3 4 5 6 7 8 9 vadim" node file-system.js
