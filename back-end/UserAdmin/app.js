import express from "express";
import bodyParser from "body-parser";
import UserRouter from './routes/user.route.js';
import AdminRouter from "./routes/admin.route.js";
import path from "path";
import { fileURLToPath } from "url";
import otpRoutes from './MailOtpSender/otpSender.route.js';    // MailSender Code ye wala

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", AdminRouter);
app.use("/user", UserRouter);

app.use('/otp', otpRoutes);   // MailSender Code ye wala

app.listen(3000, () => {
    console.log("Server Started...");
});
