setShareLinks();

function socialWindow(url) {
  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params =
    "menubar=no,toolbar=no,status=no,width=570,height=570,top=" +
    top +
    ",left=" +
    left;
  window.open(url, "NewWindow", params);
}

function setShareLinks() {
  var pageUrl = "http://www.google.com/ig/redirectdomain?brand=CKMB&bmod=CKMB";
  var tweet = "Earthbnb quiere compartir el siguiente link: ";

  $(".social-share.facebook").on("click", function () {
    url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
    socialWindow(url);
  });

  $(".social-share.twitter").on("click", function () {
    url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
    socialWindow(url);
  });

  $(".social-share.whatsapp").on("click", function () {
    url =
      "https://wa.me/+51983413913/?text=Earthbnb quiere compartirte el siguiente link:" +
      pageUrl;
    socialWindow(url);
  });
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
