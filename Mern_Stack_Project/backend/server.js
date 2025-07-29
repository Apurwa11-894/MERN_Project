// import app from "./app.js";


// app.listen(process.env.PORT, () => {
//     console.log(`Server Running On Port ${process.env.PORT}`);
// })


import dotenv from "dotenv";
dotenv.config({ path: "..backend/config/config.env" }); // ✅ Load your env vars first


import app from "./app.js";
import {dbConnection} from   "../backend/database/dbConnection.js";


dbConnection();

const PORT = process.env.PORT || 3000;
console.log("✅ MONGO_URI =", process.env.MONGO_URI); // Debug log
console.log("✅ PORT =", process.env.PORT); // Debug log

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});



