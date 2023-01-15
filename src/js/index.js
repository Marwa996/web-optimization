import { title,description,answer,btn } from "./variables.js";
import { show } from "./script.js";
import images from "../images/images.jpg";

btn.addEventListener("click",show(title,description,answer));

