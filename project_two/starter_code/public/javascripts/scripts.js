var friends = [" Jeff " , " Joe " , " Adrian " , " Neel " , " JeffK " , " Sean "];

var button = document.getElementById("createbutton");

button.addEventListener("click", function() {
  addAllFriends(friends);
  button.innerText = "Create a New Friend";
  button.addEventListener("click", function() {
    var div = document.getElementById("friend");
    div.innerHTML = "";
    var friendNameLabel = document.createElement("label");
    var friendNameSpan = document.createElement("span");
    friendNameSpan.innerText = "Enter a Name: ";
    friendNameLabel.appendChild(friendNameSpan);
    var friendNameInput = document.createElement("input");
    friendNameInput.type = "text";
    friendNameInput.id = "name_input";
    friendNameInput.name = "name";
    friendNameLabel.appendChild(friendNameInput);
    div.appendChild(friendNameLabel);
    var submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit Friend";
    submitButton.addEventListener("click", function() {
      var friendNameInput = document.querySelector("#name_input");
      var newName = friendNameInput.value;
      friends.push(newName);
      div.innerHTML = "";
      addAllFriends(friends);

    });
    div.appendChild(submitButton);
  });
});



function addAllFriends(arr) {
  var div = document.getElementById("friend");
  var header = document.createElement("h2");
  header.innerText = "friend";
  div.appendChild(header);
  var addUl = document.createElement("ul");
  div.appendChild(addUl);


  for (var i = 0; i < arr.length; i++) {
    var friend = arr[i];

    var addLi = document.createElement("li");

    var input = document.createElement("input");
    var editbutton = document.createElement("button");
    var deletebutton = document.createElement("button");
    var label = document.createElement('label');

    label.innerText = friend;
    editbutton.innerText = "Edit";
    deletebutton.innerText = "Delete";

    addLi.appendChild(label);
    addLi.appendChild(input);
    addLi.appendChild(editbutton);
    addLi.appendChild(deletebutton);
    addUl.appendChild(addLi);

    var ajaxbutton = document.getElementById('ajaxcall');
    ajaxbutton.addEventListener('click', function() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://api.randomuser.me', true);
      xhr.addEventListener('load', function() {
        var response = JSON.parse(xhr.response);
        var img = response.results[0].user.picture.medium;
        var image = document.createElement("img");
        document.body.appendChild(image);
        image.src = img;
      });
      xhr.send();
    });

    deletebutton.addEventListener("click", function(e) {
      var myself = e.target;
      var myparent = myself.parentNode;
      var addLi = document.querySelector("li");
      var inputToBeDeleted = myparent.querySelector("input");
      var label = myparent.querySelector("label");
      var remove = label.innerText = "";
      remove = input.innerText;
      console.log("DELETED");
      addLi.removeChild(label);
      addLi.removeChild(inputToBeDeleted);
    });

    editbutton.addEventListener("click", function(e) {
      var myself = e.target;
      // Above line of code says that we want e, the event which is click to target the button so wr telling myself to be set to the button itself
      var myparent = myself.parentNode;
      // then we set myparent to the parent of button which is the li so we traverse up the dom
      var inputNextToMe = myparent.querySelector("input");
      // Then we set inputnxtome to go back down the dom and grab the buttons sibling or the parents other child which is an input tag.
      var labelNextToMe = myparent.querySelector("label");
      // Then we set labelnxto me to also select another of its kids and another one of buttons siblings, the label tag
      labelNextToMe.innerText = inputNextToMe.value
      // Then we call the innertext method on the label tag and set it to the value that we type in to the label tag effectively replacing the value of the li with the value that is typed in when the edit button is clicked and the event is triggered.
      console.log("EDITED");
    });
  }
}