let username = document.getElementById("todolist");
let userbtn = document.getElementById("userbtn");
let userarry = [];

let objstr = localStorage.getItem("user");
let edit_id = null;

if (objstr != null) {
  userarry = JSON.parse(objstr);
}
display();
userbtn.onclick = () => {
  let name = username.value;
  if (name !== "") {
    if (edit_id != null) {
      userarry.splice(edit_id, 1, { name: name });
      edit_id = null;
      userbtn.innerHTML = "Add";
    } else {
      userarry.push({ name: name });
    }
    username.value = "";
  } else {
    username.placeholder = "Box is Empty";
  }
  saveinfo(userarry);
  display();
};

function saveinfo(userarry) {
  let str = JSON.stringify(userarry);
  localStorage.setItem("user", str);
  display();
}

function display() {
  let statement = "";
  userarry.forEach((data, index) => {
    statement += `<tr>
    <td>${index + 1}</td>
    <td>${data.name}</td>
    <td><i class="fa-solid fa-trash" onclick='DeleteRecord(${index})'></i></td>
    <td><i class="fa-solid fa-pen-to-square" onclick='UpdateRecord(${index})'></i></td>
    </tr>`;
  });

  document.getElementById("record").innerHTML = statement;
}

function DeleteRecord(id) {
  userarry.splice(id, 1);
  saveinfo(userarry);
}

function UpdateRecord(id) {
  edit_id = id;
  username.value = userarry[id].name;
  userbtn.innerText = "Save Changes";
}
