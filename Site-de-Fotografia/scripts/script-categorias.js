function changeContent(title, images) {
    var contentDiv = document.getElementById('content');
    var html = '<p><h1>' + title + '</h1></p>';
    for (var i = 0; i < images.length; i++) {
      html += '<div class="imagem"><img src="' + images[i] + '" alt="Imagem"></div>';
    }
    contentDiv.innerHTML = html;
  }