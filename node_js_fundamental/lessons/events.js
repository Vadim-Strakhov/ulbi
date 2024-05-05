import Emitter from "events";

const emitter = new Emitter();

// console.log(emitter);

//_

// emitter.on("message", (data, second, third) => {
//   console.log("Вы прислали сообщение " + data);
//   console.log("Второй аргумент " + second);
// });

//_

// emitter.once("message", (data, second, third) => {
//   console.log("Вы прислали сообщение " + data);
//   console.log("Второй аргумент " + second);
// });

// const MESSAGE = process.env.message || "";

// if (MESSAGE) {
//   emitter.emit("message", MESSAGE, 123);
// } else {
//   emitter.emit("message", "Вы не указали сообщение");
// }

// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");

//_

// const callback = (data, second, third) => {
//   console.log("Вы прислали сообщение " + data);
//   console.log("Второй аргумент " + second);
// };

// emitter.once("message", callback);

// const MESSAGE = process.env.message || "";

// if (MESSAGE) {
//   emitter.emit("message", MESSAGE, 123);
// } else {
//   emitter.emit("message", "Вы не указали сообщение");
// }

// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");

// emitter.removeAllListeners();
// emitter.removeListener("message", callback);

//_ Когда удобно использовать?

//* http
//* websockets
//* long pulling
//* cluster
