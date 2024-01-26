import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`${chalk.green("✓")} ${chalk.blue("MongoDB Connected!")}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


export default connectDB