$(document).ready(function () {
    setTime();
    // $("#modal").hide();
    $("#theme2").hide();
    // $("#theme1").hide();
    $("#theme3").hide();
});

function setTime() {
    $(".hr").empty();
    $(".min").empty();
    $(".type").empty();
    var currDate = new Date();
    var currHour = currDate.getHours();
    var currMin = currDate.getMinutes();
    var type = currHour >= 12 ? "PM" : "AM";
    currHour = currHour > 12 ? currHour % 12 : currHour;
    currMin = currMin.toString().length == 1 ? "0" + currMin : currMin;

    $(".hr").append(currHour);
    $(".min").append(currMin);
    $(".type").append(type);
    setInterval(setTime, 1000);
}

var index = 1;
function changeMood() {
    if (index == 0) {
        $("#theme1").show();
        $("#theme2").hide();
        $("#theme3").hide();
        index++;
    } else if (index == 1) {
        $("#theme1").hide();
        $("#theme2").show();
        $("#theme3").hide();
        index++;
    } else {
        $("#theme1").hide();
        $("#theme2").hide();
        $("#theme3").show();
        index = 0;
    }
    alert("MoodChanged! 😉");
}

function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
}

var theme1 = ["#181818", "#f4f4f6", "#e6e6e9", "#fff"];
var theme2 = ["#84dcc6", "#81d0d6", "#aed9e0", "#ffa69e"];
var theme3 = ["#CACACA", "#D7C5B0", "#F5F1EE", "#E3E3E3"];
var i = 0;
function changeBg(name, theme) {
    alert("Theme changed!😁");
    if (name == "theme2") {
        $("#" + name + " .page1").css({
            "background-color": `${theme[i]}`,
        });
        $("#" + name + " .page2").css({
            "background-color": `${theme[i + 1]}`,
        });
        $("#" + name + " .page3").css({
            "background-color": `${theme[i]}`,
        });
        i++;
        i = i + 1 == theme.length ? 0 : i;
    } else {
        if (theme[i] == "#181818") {
            $("#" + name).css({
                color: "#ebebeb",
            });
        } else {
            $("#" + name).css({
                color: "#181818",
            });
        }
        $("#" + name).css({
            "background-color": `${theme[i]}`,
        });
        i++;
        i = i == theme.length ? 0 : i;
    }
    // console.log(i);
    // console.log(theme[i]);
}

function hideModal() {
    $("#modal").hide();
}
