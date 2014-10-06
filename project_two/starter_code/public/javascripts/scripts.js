var friends = [" Jeff " , " Joe " , " Adrian " , " Neel " , " JeffK " , " Sean "]

var button = document.getElementById("createbutton")

button.addEventListener("click", function() {

  var div = document.getElementById("friend")
  var addUl = div.querySelector("ul")

  for (var i = 0; i < friends.length; i++) {

    var friend = friends[i]

    var addLi = document.createElement("li")

    var input = document.createElement("input")
    var button = document.createElement("button")
    var deletebutton = document.createElement("button")
    var label = document.createElement('label');

    label.innerText = friend
    button.innerText = "Edit"

    addLi.appendChild(label)
    addLi.appendChild(input)
    addLi.appendChild(button)
    addUl.appendChild(addLi)

    button.addEventListener("click", function(e) {
      var myself = e.target
      var myparent = myself.parentNode
      var inputNextToMe = myparent.querySelector("input")
      var labelNextToMe = myparent.querySelector("label")
      labelNextToMe.innerText = inputNextToMe.value
    });
  }
});

var addonebutton = document.getElementById("addone")
addonebutton.addEventListener("click", function(e) {
  var addUl = document.querySelector("ul")
  var addLi = document.createElement("li")
  addUl.appendChild(addLi);

var friend = "dummy"
      var input = document.createElement("input")
    var button = document.createElement("button")
    var deletebutton = document.createElement("button")
    var label = document.createElement('label');

    label.innerText = friend
    button.innerText = "Edit"

    addLi.appendChild(label)
    addLi.appendChild(input)
    addLi.appendChild(button)
    addUl.appendChild(addLi)

    button.addEventListener("click", function(e) {
      var myself = e.target
      var myparent = myself.parentNode
      var inputNextToMe = myparent.querySelector("input")
      var labelNextToMe = myparent.querySelector("label")
      labelNextToMe.innerText = inputNextToMe.value
    });
});