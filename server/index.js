import express from "express";
import bodyParser from "body-parser";    
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import {register} from "./controllers/auth.js"
import {createPost} from "./controllers/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import postRoutes from "./routes/posts.js"
import { verifyToken } from "./middleware/auth.js";

// CONFIGURATION DU SERVEUR

// Permet de decoder les caractère %encoded dans les noms de fichier

const filename = fileURLToPath(import.meta.url);

const _DirectoryName = path.dirname(filename);

dotenv.config();
const app = express();

app.use(express.json());

// rajoute des http headers au requete http

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));

app.use(morgan("common"));
app.use(bodyParser.json({limit:"50mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"50mb", extended:true}));
app.use(cors());
app.use("/assets", express.static(path.join(_DirectoryName, 'public/assets')));

// STOCKAGE FICHIER qui vient du repo github de multer

const storage = multer.diskStorage({
    destination: function(req, file, cb ){
        cb (null, "public/assets");
    },
    filename: function(req, file , cb ){
        cb (null, file.originalname);
    }
});

const upload = multer({storage});

// ROUTE WITH FILES

app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);


// ROUTES WITH FILES

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);


// MONGOOSE SET UP

const PORT =  process.env.PORT || 3004;

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        app.listen(PORT,()=>console.log(`Server ouvert sur: http://localhost/${PORT}`));
    })
    .catch((error)=> console.log(`${error}  Fail to connect`));
