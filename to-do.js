



$(document).ready(function () {
  $("#add-btn").click(function () {
    let name = $("#task-name").val().trim();
    let status = $("#task-option").val();

    if (name === "") {
      alert("Task name is required");
      return;
    }

    let todo = $("<div></div>");

    let text = $("<span></span>").text(name + " - " + status + " ");

    let del = $("<button></button>").text("X");

    del.click(function () {
      todo.remove();
    });

    todo.append(text, del);

    $("#todo-container").append(todo);

    $("#task-name").val("");
  });
});
