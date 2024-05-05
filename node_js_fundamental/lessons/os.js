import os from "os";
import cluster from "cluster";

//_

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

//_

// if (cluster.isPrimary) {
//   for (let i = 0; i < os.cpus().length - 2; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`Воркер с pid = ${worker.process.pid} умер`);
//     if (code === 4294967295) {
//       cluster.fork();
//     } else {
//       console.log("Воркер умер");
//     }
//   });
// } else {
//   console.log(`Воркер с pid= ${process.pid} запущен`);
//   setInterval(() => {}, 5000);
// }

//_

// const cpus = os.cpus();

// console.log(process.pid);

// while (true) {}
