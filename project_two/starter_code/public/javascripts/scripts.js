var friends = [" Jeff " , " Joe " , " Adrian " , " Neel " , " JeffK " , " Sean " , " Tess "];

var family = [" Victor Cruz " , " Eli Manning " , " Henrik Lundqvist " , " Lebron James " ]

var work = [" Mark Cuban " , " Google dudes " , " Zucks "]

var button = document.getElementById("createbutton");

addAllFriends(friends);


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

var buttontwo = document.getElementById("createbuttontwo");

addAllFamily(family);

buttontwo.addEventListener("click", function() {

  var div = document.getElementById("family");
  // console.log(div)
  div.innerHTML = "";
  var familyNameLabel = document.createElement("label");
  // debugger;
  var familyNameSpan = document.createElement("span");
  familyNameSpan.innerText = "Enter a Name: ";
  console.log(familyNameSpan)
  familyNameLabel.appendChild(familyNameSpan);
  console.log(familyNameLabel)
  var familyNameInput = document.createElement("input");
  familyNameInput.type = "text";
  familyNameInput.id = "name_input_fam";
  familyNameInput.name = "name";
  familyNameLabel.appendChild(familyNameInput);
  // console.log(familyNameInput)
  div.appendChild(familyNameLabel);
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit Family Member";
  console.log(submitButton)
  submitButton.addEventListener("click", function() {
    var familyNameInput = document.querySelector("#name_input_fam");
    var newName = familyNameInput.value;
    // debugger;
    // console.log(newName)
    family.push(newName);
    // console.log(family)
    div.innerHTML = "";
    addAllFamily(family);

  });
  div.appendChild(submitButton);

});

var buttonthree = document.getElementById("createbuttonthree");

addAllCoworkers(work);

buttonthree.addEventListener("click", function() {

  var div = document.getElementById("coworker");
  // console.log(div)
  div.innerHTML = "";
  var coworkerNameLabel = document.createElement("label");
  // debugger;
  var coworkerNameSpan = document.createElement("span");
  coworkerNameSpan.innerText = "Enter a Name: ";
  // console.log(familyNameSpan)
  coworkerNameLabel.appendChild(coworkerNameSpan);
  // console.log(familyNameLabel)
  var coworkerNameInput = document.createElement("input");
  coworkerNameInput.type = "text";
  coworkerNameInput.id = "name_input_coworker";
  coworkerNameInput.name = "name";
  coworkerNameLabel.appendChild(coworkerNameInput);
  // console.log(familyNameInput)
  div.appendChild(coworkerNameLabel);
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit Coworker";
  // console.log(submitButton)
  submitButton.addEventListener("click", function() {
    var coworkerNameInput = document.querySelector("#name_input_coworker");
    var newName = coworkerNameInput.value;
    // debugger;
    // console.log(newName)
    work.push(newName);
    // console.log(family)
    div.innerHTML = "";
    addAllCoworkers(work);

   });

  div.appendChild(submitButton);

});

function addAllCoworkers(arr) {
  var div = document.getElementById("coworker");
  var header = document.createElement("h2");
  header.innerText = "Coworkers List";
  div.appendChild(header);
  var addUl = document.createElement("ul");
  div.appendChild(addUl);

  arr.forEach(function(work) {

    var addLi = document.createElement("li");

    var input = document.createElement("input");
    var editbutton = document.createElement("button");
    var deletebutton = document.createElement("button");
    var label = document.createElement('label');
    var image = document.createElement('img');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.randomuser.me', true);
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.response);
      var imgurl = response.results[0].user.picture.medium;

      image.src = imgurl;
    });
    xhr.send();


    label.innerText = work;
    editbutton.innerText = "Edit";
    deletebutton.innerText = "Delete";

    addLi.appendChild(label);
    addLi.appendChild(input);
    addLi.appendChild(editbutton);
    addLi.appendChild(deletebutton);
    addLi.appendChild(image);
    addUl.appendChild(addLi);


    deletebutton.addEventListener("click", function(e) {
      var myself = e.target;
      var myparent = myself.parentNode;
      var mygrandparent = myparent.parentNode;
      mygrandparent.removeChild(myparent);
      console.log("DELETED");
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

  });
}


// var ajaxbutton = document.getElementById('ajaxcall');
// ajaxbutton.addEventListener('click', function() {
//   console.log('in button click')
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://api.randomuser.me', true);
//   xhr.addEventListener('load', function() {
//     var response = JSON.parse(xhr.response);
//     var img = response.results[0].user.picture.medium;
//     var image = document.createElement("img");
//     document.body.appendChild(image);
//     image.src = img;
//   });
//   xhr.send();
// });

function addAllFriends(arr) {
  var div = document.getElementById("friend");
  var header = document.createElement("h2");
  header.innerText = "Friends List";
  div.appendChild(header);
  var addUl = document.createElement("ul");
  div.appendChild(addUl);

  arr.forEach(function(friend) {

    var addLi = document.createElement("li");

    var input = document.createElement("input");
    var editbutton = document.createElement("button");
    var deletebutton = document.createElement("button");
    var label = document.createElement('label');
    var image = document.createElement('img');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.randomuser.me', true);
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.response);
      var imgurl = response.results[0].user.picture.medium;

      image.src = imgurl;
    });
    xhr.send();


    label.innerText = friend;
    editbutton.innerText = "Edit";
    deletebutton.innerText = "Delete";



    addLi.appendChild(label);
    addLi.appendChild(input);
    addLi.appendChild(editbutton);
    addLi.appendChild(deletebutton);
    addLi.appendChild(image);
    addUl.appendChild(addLi);


    deletebutton.addEventListener("click", function(e) {
      var myself = e.target;
      var myparent = myself.parentNode;
      var mygrandparent = myparent.parentNode;
      mygrandparent.removeChild(myparent);
      console.log("DELETED");
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

  });
}

function addAllFamily(arr) {
  var div = document.getElementById("family");
  var header = document.createElement("h2");
  header.innerText = "Family Members";
  div.appendChild(header);
  var addUl = document.createElement("ul");
  div.appendChild(addUl);

  arr.forEach(function(family) {

    var addLi = document.createElement("li");

    var input = document.createElement("input");
    var editbutton = document.createElement("button");
    var deletebutton = document.createElement("button");
    var label = document.createElement('label');
    var image = document.createElement('img');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.randomuser.me', true);
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.response);
      var imgurl = response.results[0].user.picture.medium;

      image.src = imgurl;
    });
    xhr.send();


    label.innerText = family;
    editbutton.innerText = "Edit";
    deletebutton.innerText = "Delete";

    addLi.appendChild(label);
    addLi.appendChild(input);
    addLi.appendChild(editbutton);
    addLi.appendChild(deletebutton);
    addLi.appendChild(image);
    addUl.appendChild(addLi);


    deletebutton.addEventListener("click", function(e) {
      var myself = e.target;
      var myparent = myself.parentNode;
      var mygrandparent = myparent.parentNode;
      mygrandparent.removeChild(myparent);
      console.log("DELETED");
    });

    editbutton.addEventListener("click", function(e) {
      var myself = e.target;
      var myparent = myself.parentNode;

      var inputNextToMe = myparent.querySelector("input");

      var labelNextToMe = myparent.querySelector("label");

      labelNextToMe.innerText = inputNextToMe.value
      console.log("EDITED");
    });

  });
}