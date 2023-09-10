let userName = document.getElementById("username");
let userPhone = document.getElementById("userphone");
let userAddress = document.getElementById("useraddress");
let tbody = document.querySelector("tbody");

let i = 1;

function add() {

  if (userName.value == "" || userPhone.value == "" || userAddress.value == "") {
    alert("toliq toldir");
  } else {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    td5.setAttribute("class", "del");
    let tr = document.createElement("tr");
    tr.setAttribute("class", "tr");

    td1.innerHTML = i;
    td2.innerHTML = userName.value;
    td3.innerHTML = userPhone.value;
    td4.innerHTML = userAddress.value;
    td5.innerHTML = "Delete";
    tr.append(td1, td2, td3, td4, td5);
    tbody.appendChild(tr);
    i++;

    let del = document.querySelectorAll(".del");
    let delTr = document.querySelectorAll(".tr");

    for (let k = 0; k < del.length; k++) {
      del[k].addEventListener("click", () => {
        userName.value == '';
        userPhone.value == '';
        userAddress.value == '';
        delTr[k].remove();
        sendtelegram(`deleted\nnmae: ${delTr[k].children[1].innerHTML}\nphone: ${delTr[k].children[2].innerHTML}\naddress: ${delTr[k].children[3].innerHTML}`);
      });
      sendtelegram(`New User\nname: ${delTr[k].children[1].innerHTML}\nphone: ${delTr[k].children[2].innerHTML}\naddress: ${delTr[k].children[3].innerHTML}`);
      // console.log(delTr[k].children[1].innerHTML);
    }
  }

}

// sendtelegram
function sendtelegram(message) {
  let telegram_bot_id = "6243270315:AAHIWu64G4jafCLI-St_drgPicxJ70pbLDo";
  let chat_id = 6034632659;
  let settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({ chat_id: chat_id, text: message }),
  };
  $.ajax(settings).done(function (response) { });
}