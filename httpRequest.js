const https = require("https");
const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/users",
  headers: {
    "User-Agent": "node",
  },
};
https
  .get(options, (res) => {
    let data = [];
    res.on("data", (chunk) => {
      data.push(chunk);
    });
    res.on("end", () => {
      console.log("response ended : ");

      var buffer = Buffer.concat(data);
      let stringjson = buffer.toString();
      console.log(JSON.parse(stringjson));
      let parsdResponse = JSON.parse(stringjson);
      console.log("parsdResponse", parsdResponse);
      for (let user of parsdResponse) {
        console.log(`Got user with id: ${user.id}, name: ${user.name}`);
      }
    });
  })
  .on("error", (err) => {
    console.log("Error : ", err.message);
  });
