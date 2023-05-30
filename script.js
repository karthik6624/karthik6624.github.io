function searchWord() {
    var word = document.getElementById("searchBox").value;
    word = word.toLowerCase();
    var pageContent = document.body.innerText.toLowerCase();
    var searchResult = pageContent.indexOf(word);
    if (searchResult !== -1) {
      alert("The word \"" + word + "\" was found on the page.");
    } else {
      alert("The word \"" + word + "\" was not found on the page.");
    }
  }