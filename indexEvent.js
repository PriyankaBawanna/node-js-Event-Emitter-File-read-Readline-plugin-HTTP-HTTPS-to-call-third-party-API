//try to open file
var fileSystem = require("fs");
var requestfile = fileSystem.createWriteStream("./UserData.js");
requestfile.on("open", function () {
  console.log("the file is open");
});
/*hello event
const EventEmitter = require("events");
const event = new EventEmitter();
event.on("say hello Event ", () => {
  console.log("hello new Event ");
});
event.emit(" say hello event ");
/*read file event
const FS = require("fs");
 
FS.readFile("Priyanka.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
/*readline event */
//const FS = require("fs");
/*const readline = require("readline");

// When we should use Sync vs Async

console.log("Reading File Sync started");
const currentFileInSync = FS.readFileSync("./note.txt");

console.log("Reading File Sync completed", currentFileInSync);

if (currentFileInSync) {
  console.log("File Sync Data: ", currentFileInSync.toString());
}

console.log("Reading File ASync Started");
let item;*/

// Check if it's a promise

/*FS.readFile("Priyanka.txt", (err, data) => {
  console.log("Reading File ASync completed");
  if (err) return;
  console.log("Reading file async", data);
  item = data;
  return data;
});

console.log("Reading File ASync ended - item", item);

setTimeout(() => {
  console.log("Reading File ASync ended - item", item);
}, 2000);*/
