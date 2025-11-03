import path from 'path';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// middleware
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

// routes import 
import userRouter from "./routes/user.router.js";


//routes declaration
app.use("/api/v1/users", userRouter);







app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(400).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});


// export
export { app };
