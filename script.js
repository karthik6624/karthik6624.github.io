function searchWord() {
    // Get the input word from the search box
    var word = document.getElementById("searchBox").value;
    word = word.toLowerCase();
    var pageContent = document.body.innerHTML;
    var regex = new RegExp(word, 'gi');
    var highlightedContent = pageContent.replace(regex, "<span class='highlight'>$&</span>");
    document.body.innerHTML = highlightedContent;
  }