var tasks = {};

//edit task name/description     CAN MAYBE DELETE THIS?
$(".hour-list").on("click", "p", function() {
    // get current text of task
    var text = $(this).text().trim();

    console.log(text);
});
//
$(".saveBtn").on("click", function() {
    let taskText = $(this).parent().find('p').text().trim();
    //get current value of text area

    var taskTime = $(this).parent("li").attr("id");
    //store task value so that it can be added to local storage

    tasks[taskTime] = taskText;

    //update task array
    console.log(tasks);
    saveTasks();

    var x = tasks[12];
    console.log(x);
});

// save tasks to local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(localStorage);
};

//load tasks from local storage
var loadTasks = function() {
    var savedTasks = localStorage.getItem("tasks");
    savedTasks = JSON.parse(savedTasks);
    console.log(savedTasks);
    
    if (savedTasks){
        if (savedTasks[9]){
            document.getElementById("9text").textContent = savedTasks[9];
        }
        if (savedTasks[10]) {
            console.log("yes");
            document.getElementById("10text").textContent = savedTasks[10];
        }
        if (savedTasks[11]) {
            console.log("yes");
            document.getElementById("11text").textContent = savedTasks[11];
        }
        if (savedTasks[12]) {
            console.log("yes");
            document.getElementById("12text").textContent = savedTasks[12];
        }
        if (savedTasks[1]){
            document.getElementById("1text").textContent = savedTasks[1];
        }
        if (savedTasks[2]){
            document.getElementById("2text").textContent = savedTasks[2];
        }
        if (savedTasks[3]){
            document.getElementById("3text").textContent = savedTasks[3];
        }
        if (savedTasks[4]){
            document.getElementById("4text").textContent = savedTasks[4];
        }
        if (savedTasks[5]){
            document.getElementById("5text").textContent = savedTasks[5];
        }
    }
}
loadTasks();


//time display in header function
var time = function() {
    var time = new Date();
    document.getElementById("currentDay").innerHTML = time.toLocaleString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'});
}

var checkTime = function() {setInterval(function() {
    time();
    }, 1000 * 60);}

time();
checkTime();

//change task color based on time of day
function getDayTime() {
    var hrs = new Date().getHours();
    if (hrs < 9) {
        $("#9, #10, #11, #12, #1, #2, #3, #4, #5").addClass("future");
    } else if (hrs === 9 ) {
        $("#9").addClass("present");
        $("#10, #11, #12, #1, #2, #3, #4, #5").addClass("future");
    }  else if (hrs === 10 ) {
        $("#9").addClass("past");
        $("#10").addClass("present");
        $("#11, #12, #1, #2, #3, #4, #5").addClass("future");
    } else if (hrs === 11 ) {
        $("#9, #10").addClass("past");
        $("#11").addClass("present");
        $("#12, #1, #2, #3, #4, #5").addClass("future");
    }  else if (hrs === 12 ) {
        $("#9, #10, #11").addClass("past");
        $("#12").addClass("present");
        $("#1, #2, #3, #4, #5").addClass("future");
    }  else if (hrs === 13 ) {
        $("#9, #10, #11, #12").addClass("past");
        $("#1").addClass("present");
        $("#2, #3, #4, #5").addClass("future");
    }  else if (hrs === 14 ) {
        $("#9, #10, #11, #12, #1").addClass("past");
        $("#2").addClass("present");
        $("#3, #4, #5").addClass("future");
    }  else if (hrs === 15 ) {
        $("#9, #10, #11, #12, #1, #2").addClass("past");
        $("#3").addClass("present");
        $("#4, #5").addClass("future");
    }  else if (hrs === 16 ) {
        $("#9, #10, #11, #12, #1, #2, #3").addClass("past");
        $("#4").addClass("present");
        $("#5").addClass("future");
    }  else if (hrs === 17 ) {
        $("#9, #10, #11, #12, #1, #2, #3, #4").addClass("past");
        $("#5").addClass("present");
    } else {
        $("#9, #10, #11, #12, #1, #2, #3, #4, #5").addClass("past");
    }
};


var checkHrs = function() {setInterval(function() {
    $("#9, #10, #11, #12, #1, #2, #3, #4, #5").removeClass("past present future");
    getDayTime();
}, 1000 * 60);}


getDayTime();
checkHrs();