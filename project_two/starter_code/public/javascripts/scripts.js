var friends = [" Jeff " , " Joe " , " Adrian " , " Neel " , " JeffK " , " Sean "];

 var button = document.getElementById("createbutton")

 button.addEventListener("click", function() {

  var div = document.getElementById("friend")
  var addUl = div.querySelector("ul")

  for (var i = 0; i < friends.length; i++) {

    var friend = friends[i]

    var addLi = document.createElement("li")

    var input = document.createElement("input")
    var editbutton = document.createElement("button")
    var deletebutton = document.createElement("button")
    var label = document.createElement('label');

    label.innerText = friend
    editbutton.innerText = "Edit"
    deletebutton.innerText = "Delete"

    addLi.appendChild(label)
    addLi.appendChild(input)
    addLi.appendChild(editbutton)
    addLi.appendChild(deletebutton)
    addUl.appendChild(addLi)

    var ajaxbutton = document.getElementById('ajaxcall')
        ajaxbutton.addEventListener('click', function() {

       var xhr = new XMLHttpRequest();
       xhr.open('GET', 'http://api.randomuser.me', true);
       xhr.send();

        xhr.addEventListener('load', function() {
// debugger
        var response = JSON.parse(xhr.response)

        var img = response.results[0].user.picture.medium

        var image = document.createElement("img")
        document.body.appendChild(image)
         image.src = img;

       });

  });


    deletebutton.addEventListener("click", function(e) {
      var myself = e.target
      var myparent = myself.parentNode
      var addLi = document.querySelector("li")
      var inputToBeDeleted = myparent.querySelector("input")
      var label = myparent.querySelector("label")
      // label.innerText = myparent.value
      var remove = label.innerText = ""
      remove = input.innerText
      console.log("DELETED")

      addLi.removeChild(label)
      addLi.removeChild(inputToBeDeleted)
    });

    editbutton.addEventListener("click", function(e) {
      var myself = e.target
      // Above line of code says that we want e, the event which is click to target the button so wr telling myself to be set to the button itself
      var myparent = myself.parentNode
      // then we set myparent to the parent of button which is the li so we traverse up the dom
      var inputNextToMe = myparent.querySelector("input")
      // Then we set inputnxtome to go back down the dom and grab the buttons sibling or the parents other child which is an input tag.
      var labelNextToMe = myparent.querySelector("label")
      // Then we set labelnxto me to also select another of its kids and another one of buttons siblings, the label tag
      labelNextToMe.innerText = inputNextToMe.value
      // Then we call the innertext method on the label tag and set it to the value that we type in to the label tag effectively replacing the value of the li with the value that is typed in when the edit button is clicked and the event is triggered.
      console.log("EDITED")
    });

  }

});

// Trying below to have names be added dynamically and not hardcoded.

// var addonebutton = document.getElementById("addone")

// addonebutton.addEventListener("click", function(e) {
//   var addUl = document.querySelector("ul")
//   var addLi = document.createElement("li")
//   addUl.appendChild(addLi);

//     var input = document.createElement("input")
//     var addbutton = document.createElement("button")
//     var editbutton = document.createElement("button")
//     var deletebutton = document.createElement("button")
//     var label = document.createElement('label');
//     var friend = ""

//     label.innerText = friend
//     addbutton.innerText = "Add"
//     editbutton.innerText = "Edit"
//     friend.innertext = input.value
//     deletebutton.innerText = "Delete"

//     addLi.appendChild(label)
//     addLi.appendChild(input)
//     addLi.appendChild(addbutton)
//     addLi.appendChild(editbutton)
//     addLi.appendChild(deletebutton)
//     addUl.appendChild(addLi)

//     //Below clicks occur after the first click and are hidden until then along with their values and buttons.

//     addbutton.addEventListener("click", function(e) {
//       var myself = e.target
//       var myparent = myself.parentNode
//       var input = myparent.querySelector("input")
//       var label = myparent.querySelector("label")
//       label.innerText = input.value
//     });

//     editbutton.addEventListener("click", function(e) {
//       var myself = e.target
//       var myparent = myself.parentNode
//       var inputNextToMe = myparent.querySelector("input")
//       var labelNextToMe = myparent.querySelector("label")
//       labelNextToMe.innerText = inputNextToMe.value
//     });

//     deletebutton.addEventListener("click", function(e) {
//       var myself = e.target
//       var myparent = myself.parentNode
//       var inputToBeDeleted = myparent.querySelector("input")
//       var label = myparent.querySelector("label")
//       label.innerText = inputToBeDeleted.value
//       console.log("DELETED")
//     });
// });
