const https = require("https");
const options = {
  hostname: "api.github.com",
  path: "/users/PriyankaBawanna",
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

      console.log(
        `Got user with id: ${parsdResponse.id}, name: ${parsdResponse.login}`
      );
    });
  })
  .on("error", (err) => {
    console.log("Error : ", err.message);
  });
