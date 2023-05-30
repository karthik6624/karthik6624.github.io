function searchWord() {
    // Get the input word from the search box
    var word = document.getElementById("searchBox").value;
    word = word.toLowerCase();
    var pageContent = document.body.innerText.toLowerCase();
    var searchResult = pageContent.indexOf(word);
    var startIndex = 0;
    while (searchResult !== -1) {
      var element = document.body;
      var textNode = element.childNodes[0];
      var prefix = textNode.textContent.substr(0, searchResult + startIndex);
      var highlighted = document.createElement("span");
      highlighted.className = "highlight";
      var matchedWord = textNode.textContent.substr(searchResult + startIndex, word.length);
      highlighted.appendChild(document.createTextNode(matchedWord));
      var suffix = textNode.textContent.substr(searchResult + startIndex + word.length);
       element.replaceChild(document.createTextNode(prefix), textNode);
       element.insertBefore(highlighted, textNode.nextSibling);
       element.insertBefore(document.createTextNode(suffix), highlighted.nextSibling);
       startIndex += searchResult + word.length;
       pageContent = pageContent.substr(startIndex);
       searchResult = pageContent.indexOf(word);
     }
   }