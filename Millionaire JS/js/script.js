let trueAnswers = ["D. 10", "C. 1", "B. 2", "D. 2", "C. 32"];
let count = 20;
let x;
let gameBtn = document.querySelectorAll(".quests > button");

function hashvel() {
  count--;
  interval.innerHTML = count;
  if (count < 20) {
    time.style.display = "block";
    interval.style.background = "tomato";
  }
  if (count < 4) {
    interval.style.background = "red";
  }
  if (count == 0) {
    looser.style.display = "flex";
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
}
function startInterval() {
  x = setInterval(hashvel, 1000);
}
startInterval();

if ((quest1.style.display = "block")) {
  audience_support.onclick = function () {
    audience_support.setAttribute("disabled", true);
    audience_support.style.backgroundColor = "#e9e9e9";
    audience_support.style.color = "#999999";
    audience_support.style.cursor = "not-allowed";
    audience_support.style.opacity = ".5";
    audience1.style.display = "block";
    setTimeout(() => {
      audience1.style.display = "none";
    }, 5000);
  };

  fifty_support.onclick = function () {
    fifty_support.setAttribute("disabled", true);
    fifty_support.style.backgroundColor = "#e9e9e9";
    fifty_support.style.color = "#999999";
    fifty_support.style.cursor = "not-allowed";
    fifty_support.style.opacity = ".5";
    let delBtn1 = document.querySelectorAll(".patasxan1");

    for (let i = 0; i < delBtn1.length; i++) {
      delBtn1[1].setAttribute("disabled", true);
      delBtn1[2].setAttribute("disabled", true);
    }
  };

  call_support.onclick = function () {
    call_support.setAttribute("disabled", true);
    call_support.style.backgroundColor = "#e9e9e9";
    call_support.style.color = "#999999";
    call_support.style.cursor = "not-allowed";
    call_support.style.opacity = ".5";
    call1.style.display = "block";
    setTimeout(() => {
      call1.style.display = "none";
    }, 5000);
  };
}

game.onclick = function (e) {
  if (e.target.className === "patasxan1") {
    e.target.setAttribute("id", "animated");
    clearInterval(x);

    let questBtn = document.querySelectorAll(".patasxan1")
    for (let i = 0; i < questBtn.length; i++) {
      questBtn[i].setAttribute("disabled", true) 
    }

    setTimeout(() => {
      e.target.removeAttribute("id");

      if (e.target.innerHTML === trueAnswers[0]) {
        e.target.style.background = "green";
        hing.style.background = "green";
        setTimeout(() => {
          quest1.style.display = "none";
          quest2.style.display = "block";
          count = 20;
          startInterval();
          if ((quest2.style.display = "block")) {
            audience_support.onclick = function () {
              audience_support.setAttribute("disabled", true);
              audience_support.style.backgroundColor = "#e9e9e9";
              audience_support.style.color = "#999999";
              audience_support.style.cursor = "not-allowed";
              audience_support.style.opacity = ".5";
              audience2.style.display = "block";
              setTimeout(() => {
                audience2.style.display = "none";
              }, 5000);
            };

            fifty_support.onclick = function () {
              fifty_support.setAttribute("disabled", true);
              fifty_support.style.backgroundColor = "#e9e9e9";
              fifty_support.style.color = "#999999";
              fifty_support.style.cursor = "not-allowed";
              fifty_support.style.opacity = ".5";
              let delBtn1 = document.querySelectorAll(".patasxan2");

              for (let i = 0; i < delBtn1.length; i++) {
                delBtn1[3].setAttribute("disabled", true);
                delBtn1[1].setAttribute("disabled", true);
              }
            };

            call_support.onclick = function () {
              call_support.setAttribute("disabled", true);
              call_support.style.backgroundColor = "#e9e9e9";
              call_support.style.color = "#999999";
              call_support.style.cursor = "not-allowed";
              call_support.style.opacity = ".5";
              call2.style.display = "block";
              setTimeout(() => {
                call2.style.display = "none";
              }, 5000);
            };
          }
        }, 3000);
      } else {
        e.target.style.background = "red";
        setTimeout(() => {
          looser.style.display = "flex";
        }, 3000);
        setTimeout(() => {
          window.location.reload();
        }, 6000);
      }
    }, 3000);
  }

  if (e.target.className === "patasxan2") {
    e.target.setAttribute("id", "animated");
    clearInterval(x);

    let questBtn = document.querySelectorAll(".patasxan2")
    for (let i = 0; i < questBtn.length; i++) {
      questBtn[i].setAttribute("disabled", true) 
    }

    setTimeout(() => {
      e.target.removeAttribute("id");

      if (e.target.innerHTML === trueAnswers[1]) {
        e.target.style.background = "green";
        tas.style.background = "green";
        setTimeout(() => {
          quest2.style.display = "none";
          quest3.style.display = "block";
          count = 20;
          startInterval();
          if ((quest3.style.display = "block")) {
            audience_support.onclick = function () {
              audience_support.setAttribute("disabled", true);
              audience_support.style.backgroundColor = "#e9e9e9";
              audience_support.style.color = "#999999";
              audience_support.style.cursor = "not-allowed";
              audience_support.style.opacity = ".5";
              audience3.style.display = "block";
              setTimeout(() => {
                audience3.style.display = "none";
              }, 5000);
            };

            fifty_support.onclick = function () {
              fifty_support.setAttribute("disabled", true);
              fifty_support.style.backgroundColor = "#e9e9e9";
              fifty_support.style.color = "#999999";
              fifty_support.style.cursor = "not-allowed";
              fifty_support.style.opacity = ".5";
              let delBtn1 = document.querySelectorAll(".patasxan3");

              for (let i = 0; i < delBtn1.length; i++) {
                delBtn1[0].setAttribute("disabled", true);
                delBtn1[2].setAttribute("disabled", true);
              }
            };

            call_support.onclick = function () {
              call_support.setAttribute("disabled", true);
              call_support.style.backgroundColor = "#e9e9e9";
              call_support.style.color = "#999999";
              call_support.style.cursor = "not-allowed";
              call_support.style.opacity = ".5";
              call3.style.display = "block";
              setTimeout(() => {
                call3.style.display = "none";
              }, 5000);
            };
          }
        }, 3000);
      } else {
        setTimeout(() => {
          looser.style.display = "flex";
        }, 3000);
        setTimeout(() => {
          window.location.reload();
        }, 6000);
      }
    }, 3000);
  }

  if (e.target.className === "patasxan3") {
    e.target.setAttribute("id", "animated");
    clearInterval(x);

    let questBtn = document.querySelectorAll(".patasxan3")
    for (let i = 0; i < questBtn.length; i++) {
      questBtn[i].setAttribute("disabled", true) 
    }

    setTimeout(() => {
      e.target.removeAttribute("id");

      if (e.target.innerHTML === trueAnswers[2]) {
        e.target.style.background = "green";
        eresun.style.background = "green";
        setTimeout(() => {
          quest3.style.display = "none";
          quest4.style.display = "block";
          count = 20;
          startInterval();
          if ((quest4.style.display = "block")) {
            audience_support.onclick = function () {
              audience_support.setAttribute("disabled", true);
              audience_support.style.backgroundColor = "#e9e9e9";
              audience_support.style.color = "#999999";
              audience_support.style.cursor = "not-allowed";
              audience_support.style.opacity = ".5";
              audience4.style.display = "block";
              setTimeout(() => {
                audience4.style.display = "none";
              }, 5000);
            };

            fifty_support.onclick = function () {
              fifty_support.setAttribute("disabled", true);
              fifty_support.style.backgroundColor = "#e9e9e9";
              fifty_support.style.color = "#999999";
              fifty_support.style.cursor = "not-allowed";
              fifty_support.style.opacity = ".5";
              let delBtn1 = document.querySelectorAll(".patasxan4");

              for (let i = 0; i < delBtn1.length; i++) {
                delBtn1[1].setAttribute("disabled", true);
                delBtn1[0].setAttribute("disabled", true);
              }
            };

            call_support.onclick = function () {
              call_support.setAttribute("disabled", true);
              call_support.style.backgroundColor = "#e9e9e9";
              call_support.style.color = "#999999";
              call_support.style.cursor = "not-allowed";
              call_support.style.opacity = ".5";
              call4.style.display = "block";
              setTimeout(() => {
                call4.style.display = "none";
              }, 5000);
            };
          }
        }, 3000);
      } else {
        e.target.style.background = "red";
        setTimeout(() => {
          looser.style.display = "flex";
        }, 3000);
        setTimeout(() => {
          window.location.reload();
        }, 6000);
      }
    }, 3000);
  }

  if (e.target.className === "patasxan4") {
    e.target.setAttribute("id", "animated");
    clearInterval(x);

    let questBtn = document.querySelectorAll(".patasxan4")
    for (let i = 0; i < questBtn.length; i++) {
      questBtn[i].setAttribute("disabled", true) 
    }

    setTimeout(() => {
      e.target.removeAttribute("id");

      if (e.target.innerHTML === trueAnswers[3]) {
        e.target.style.background = "green";
        vatsun.style.background = "green";
        setTimeout(() => {
          quest4.style.display = "none";
          quest5.style.display = "block";
          count = 20;
          startInterval();
          if ((quest5.style.display = "block")) {
            audience_support.onclick = function () {
              audience_support.setAttribute("disabled", true);
              audience_support.style.backgroundColor = "#e9e9e9";
              audience_support.style.color = "#999999";
              audience_support.style.cursor = "not-allowed";
              audience_support.style.opacity = ".5";
              audience5.style.display = "block";
              setTimeout(() => {
                audience5.style.display = "none";
              }, 5000);
            };

            fifty_support.onclick = function () {
              fifty_support.setAttribute("disabled", true);
              fifty_support.style.backgroundColor = "#e9e9e9";
              fifty_support.style.color = "#999999";
              fifty_support.style.cursor = "not-allowed";
              fifty_support.style.opacity = ".5";
              let delBtn1 = document.querySelectorAll(".patasxan5");

              for (let i = 0; i < delBtn1.length; i++) {
                delBtn1[1].setAttribute("disabled", true);
                delBtn1[3].setAttribute("disabled", true);
              }
            };

            call_support.onclick = function () {
              call_support.setAttribute("disabled", true);
              call_support.style.backgroundColor = "#e9e9e9";
              call_support.style.color = "#999999";
              call_support.style.cursor = "not-allowed";
              call_support.style.opacity = ".5";
              call5.style.display = "block";
              setTimeout(() => {
                call5.style.display = "none";
              }, 5000);
            };
          }
        }, 3000);
      } else {
        e.target.style.background = "red";
        setTimeout(() => {
          looser.style.display = "flex";
        }, 3000);
        setTimeout(() => {
          window.location.reload();
        }, 6000);
      }
    }, 3000);
  }

  if (e.target.className === "patasxan5") {
    e.target.setAttribute("id", "animated");
    clearInterval(x);

    let questBtn = document.querySelectorAll(".patasxan5")
    for (let i = 0; i < questBtn.length; i++) {
      questBtn[i].setAttribute("disabled", true) 
    }

    setTimeout(() => {
      e.target.removeAttribute("id");

      if (e.target.innerHTML === trueAnswers[4]) {
        e.target.style.background = "green";
        harur.style.background = "green";
        setTimeout(() => {
          winner.style.display = "flex";
        }, 3000);
      } else {
        e.target.style.background = "red";
        setTimeout(() => {
          looser.style.display = "flex";
        }, 3000);
        setTimeout(() => {
          window.location.reload();
        }, 6000);
      }
    }, 3000);
  }
};

again.onclick = function () {
  window.location.reload();
};
