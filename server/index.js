import https from "https";
import express from "express"

const app = express();
app.set('view engine', 'ejs'); 

const options = {
  hostname: "api.schiphol.nl",
  port: 443,
  path: "/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime",
  method: "GET",
  headers: {
    "resourceversion": "v4",
    "app_id": "e49968f7",  
    "app_key": "db10f6ef5d908ade0a48b74a9d2eb2c6", 
    "Accept": "application/json"
  }
};

const req = https.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    try {
      const jsonResponse = JSON.parse(data);
      if (Array.isArray(jsonResponse.flights)) {
        jsonResponse.flights.forEach((flight, index) => {
            //gelen datayı burada ayıklıyorum db.json'a ayıklanmış halini yazıyorum. Bunun için Graphql de kullanılabilir.
            const flightData = {
                flightIndex : index + 1,
                actualLandingTime: flight.actualLandingTime,
                scheduleDateTime: flight.scheduleDateTime,
                flightName: flight.flightName, 
                roughtDestinations: flight.route?.destinations,
                roughtEu: flight.route?.visa,
              };

              writeToJsonServer(flightData);
      }) }
    } catch (error) {
      console.error("Response is not valid JSON:", data);
    }
  });
});

req.on("error", (error) => {
  console.error(`Error with the request: ${error.message}`);
});

req.end();

// gelen datayı db.json dosyama yazıyorum.
  export const post = async (flightData) => {
    const response = await fetch('http://localhost:3000/flights', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flightData),
    });
    if (!response.ok) {
      throw new Error("404 not found");
    }
    const result = await response.json();
    return result;
  };

  const writeToJsonServer = async (flightData) => {
    const addedToJsonServer = await post(flightData);
  };


app.listen(8000, () => console.log('Server started on port 8000'));