import express from "express";
import chalk from "chalk";
import cors from "cors";
import connectDB from "./config/db.js";
import profileRoute from "./routes/profleRoute.js";
import authRoute from "./routes/authRoute.js";
import ReviewRouter from "./routes/reviewRouter.js";
import BrandRouter from "./routes/brandRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cartRouter from "./routes/cartRoutes.js";
import CategoryRouter from "./routes/categoryRoute.js"
import cloudinaryConnect from "./config/cloudinary.js";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB();
cloudinaryConnect();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);
// routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/profile", profileRoute);
app.use("/api/v1/review", ReviewRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/brand", BrandRouter);
app.use("/api/v1/category", CategoryRouter);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(port, () => {
  console.log(
    `${chalk.green("✓")} ${chalk.blue(
      `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )}`
  );
});
