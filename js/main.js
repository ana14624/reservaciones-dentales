import prodb, {
  bulkcreate,
  createEle,
  getData,
  SortObj
} from "./module.js";


let db = prodb("Productdb", {
  products: `++id, name, edad, num, horaf`
});

// input tags
const userid = document.getElementById("userid");
const proname = document.getElementById("proname");
const edad = document.getElementById("edad");
const num = document.getElementById("num");
const horaf = document.getElementById("horaf");

// create button
const btncreate = document.getElementById("btn-create");

// event listerner for create button
btncreate.onclick = event => {
  // insert values
  let flag = bulkcreate(db.products, {
    name: proname.value,
    edad: edad.value,
    num: num.value,
    horaf: horaf.value
  });
  proname.value = edad.value = num.value = horaf.value = "";

  // establecer el valor del cuadro de texto de identificación
  getData(db.products, data => {
    userid.value = data.id + 1 || 1;
  });

  let insertmsg = document.querySelector(".insertmsg");
  getMsg(flag, insertmsg);
};

window.onload = event => {
  // set id textbox value
  textID(userid);
};

// textbox id
function textID(textboxid) {
  getData(db.products, data => {
    textboxid.value = data.id + 1 || 1;
  });
}
