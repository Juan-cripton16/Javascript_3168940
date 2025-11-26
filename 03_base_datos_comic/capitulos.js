//"configuracion ESmodules 2611"

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id= parseInt(params.get('id'));


console.log("ID del capítulo es :", id);