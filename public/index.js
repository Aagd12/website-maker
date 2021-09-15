let addBtn = document.getElementsByClassName("addBtn");
let addBtn1 = document.getElementsByClassName("addBtn");
let inputText = document.getElementById("inputText");
let inputText2 = document.getElementById("inputText2");
let notes = localStorage.getItem("notes");
if (notes == null) {
    notesObj = [];
} else {
    notesObj = JSON.parse(notes);
}

showNotes();
addBtn[0].addEventListener("click", () => {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(inputText.value);
    notesObj.push(inputText2.value);
    inputText.value = "";
    inputText2.value = "";
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // console.log(notesObj);
    showNotes();
});


function delete1(index) {
    let notes = localStorage.getItem("notes");
    console.log(index);
    if (notes == null) {
        notesObj = [];
    } else {

        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

};

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);

    }
    // console.log(notesObj);
    let html = "";
    notesObj.forEach(function(element, index) {

        if (index % 2 == 0) {
            let s = notesObj[index]
            let m = notesObj[index + 1]
            console.log(s, m);
            html += `<div class="card me-2 mb-2 note"  style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">@${s} 

        </h5>
      <p class="card-text"> ${m}</p>
       
    </div>
  </div>`;
        }
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = "For showiing notes you have to first add notes  ";
    }
};
let search = document.getElementById("searchText");
search.addEventListener("input", () => {
    let notes = localStorage.getItem("notes");
    let Text = search.value.toLowerCase();
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);

    }
    let cards = document.getElementsByClassName("note");
    Array.from(cards).forEach(function(element, index) {
        let cardText = document.getElementsByClassName("card-text")[index].innerText;


        if (cardText.includes(Text)) {
            console.log("find");
            console.log(cardText);
            element.style.display = "block";
        } else {
            console.log("notfind");
            console.log(cardText);
            element.style.display = "none";
        }

    })
});