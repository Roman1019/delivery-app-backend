import "dotenv/config"; // обов'язково на початку
import app from "./src/app.js";
import { connectDB } from "./src/db.js";

const PORT = process.env.PORT || 3000;

connectDB(); // підключаємо MongoDB

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
