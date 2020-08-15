var $Bouton = $(".wrapper button");
var $LienP = $(".btnScroll");
var $ProfJs = $(".profJs");
var $LienP1 = $("#Profil");
var $ExpJs = $(".expJs");
var $LienP2 = $("#Experiences");
var $CapJs = $(".capJs");
var $LienP3 = $("#Capacites");
var $ProjJs = $(".projJs");
var $LienP4 = $("#Projets");
var $ContJs = $(".contJs");
var $LienP5 = $("#Contact");
var $Section = $("section");
var $Menu = $(".navbar-nav");
var speed = 650; // Durée de l'animation (en ms)

// deplacement animé des ancres
var ancres = function () {
  $(".wrapper button").click(function () {
    $("html, body").animate({ scrollTop: $(".btnScroll").offset().top }, speed); // Go
    return false;
  });

  $(".profJs").click(function () {
    $("html, body").animate({ scrollTop: $("#Profil").offset().top }, speed); // Go
    return false;
  });

  $(".expJs").click(function () {
    $("html, body").animate(
      { scrollTop: $("#Experiences").offset().top },
      speed
    );
    return false;
  });

  $(".capJs").click(function () {
    $("html, body").animate({ scrollTop: $("#Capacites").offset().top }, speed);
    return false;
  });

  $(".projJs").click(function () {
    $("html, body").animate({ scrollTop: $("#Projets").offset().top }, speed);
    return false;
  });

  $(".contJs").click(function () {
    $("html, body").animate({ scrollTop: $("#Contact").offset().top }, speed);
    return false;
  });
};

// animation background menu en fonction du scroll
var scro = function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 700) {
      $(".menu").addClass("scrolling");
    } else {
      $(".menu").removeClass("scrolling");
    }
  });
};

// animation texte page accueil

var largEcran = window.innerWidth;
var hautEcran = window.innerHeight;

var position = 0;
var msg =
  "Vous recherchez un talent en programmation ? ... Vous êtes au bon endroit !";
var msg = " " + msg;
var long = msg.length;
var fois = 76 / msg.length + 1;
for (i = 0; i <= fois; i++) {
  msg += msg;
}
function textdefil() {
  document.form1.deftext.value = msg.substring(position, position + 76);
  position++;
  if (position == long) position = 0;
  setTimeout("textdefil()", 250);
}
//window.onload = textdefil;

// animation du background des projets
var ecrans = function () {
  var $EcranP = $(".proAJs figure figcaption");
  var $EcranP1 = $(".proBJs figure figcaption");
  var $EcranP2 = $(".proAJs1 figure figcaption");
  var $EcranP3 = $(".proBJs1 figure figcaption");

  $(".proAJs img").mouseover(function () {
    $EcranP.css("display", "block");
  });

  $(".proAJs img").mouseout(function () {
    $EcranP.css("display", "none");
  });

  $(".proBJs img").mouseover(function () {
    $EcranP1.css("display", "block");
  });

  $(".proBJs img").mouseout(function () {
    $EcranP1.css("display", "none");
  });

  $(".proAJs1 img").mouseover(function () {
    $EcranP2.css("display", "block");
  });

  $(".proAJs1 img").mouseout(function () {
    $EcranP2.css("display", "none");
  });

  $(".proBJs1 img").mouseover(function () {
    $EcranP3.css("display", "block");
  });

  $(".proBJs1 img").mouseout(function () {
    $EcranP3.css("display", "none");
  });
};

$(function () {
  ancres();
  scro();
  textdefil();
  ecrans();
});
