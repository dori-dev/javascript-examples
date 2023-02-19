let clock = document.querySelector("#clock");
let date = document.querySelector("#date");
let myDate = new Date();
let jDate = gregorian_to_jalali(
  myDate.getFullYear(),
  myDate.getMonth() + 1,
  myDate.getDate()
);

function myClock() {
  myDate = new Date();
  let hour = myDate.getHours().toString().padStart(2, "0");
  let minute = myDate.getMinutes().toString().padStart(2, "0");
  let second = myDate.getSeconds().toString().padStart(2, "0");
  clock.textContent = `${hour}:${minute}:${second}`;
  jDate = gregorian_to_jalali(
    myDate.getFullYear(),
    myDate.getMonth() + 1,
    myDate.getDate()
  );
  date.textContent = `${jDate[0]}/${jDate[1]}/${jDate[2]}`;
}

myClock();
setInterval(myClock, 1000);
