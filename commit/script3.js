'use strict';

// $(document).ready(() => {

//     // toutes le balises div
//     const divs = $('div');
//     console.log('divs',divs);
//     //tts balises avec nom de classe
//     console.log('class', $('.js-paragraph'));

//     //la balise avec l'id js-unique-paragraph
//     console.log('js-unique-paragraph', $('#js-unique-paragraph'));

//     //le primier titre h3
//     console.log('first h3', $('h3:first'));

//     //premier th et premier tr
//     console.log('premier th', $('tr:first th:first'));

//     //le premier td de chaque tr
//     console.log('premier td chq tr', $('tr td:first'));
//     //tous les liens

//     //tous les liens externes
//     console.log($('a[target="_blank"]'));
//     //tous les liens internes
//     console.log($('a[target="_blank"]'));
//     //tous les boutons
//     console.log($('form :button'));
// });

// // Récupérez et logguez dans la console le contenu du titre de la page.
// const title = $('h1').text();
// console.log('title',title);

// // Changez le contenu du titre de la page à 'My page title'.
// $('h1').text('My page title');

// // Récupérez et logguez dans la console le HTML de l'article.
// const articleContent = $('#js-article').html();
// console.log('articelContent', articleContent);

// // Changez le contenu de l'article à

// // <h2>This is my article.</h2>
// // <p>This is my article's content.</p>
// // <a href="https://example.com">Read more</a>
// $('#js-article').html(`
//  <h2>This is my article.</h2>
//  <p>This is my article's content.</p>
//  <a href="https://example.com">Read more</a>
// `)
// // Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
// const inputValue = $('#js-search').val();
// console.log('inputValue',inputValue);

// // Changez la valeur du champ de saisie à 'Beagles'
// $('#js-search').val('Beagles');

//SEARCH
// $('#js-search-form')[0].addEventListener('submit', (event) => {
//     event.preventDefault();
//     if () {

//     } else {

//     }
// });
// // Ajoutez la classe 'alert-primary' au <div>.
// $('#js-alert').addClass('alert-primary');

// // Supprimez la classe 'alert' du <div>. Supprimez la classe 'alert-primary' du <div>.
// $('#js-alert').removeClass('alert-primary');


// // Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>.
// $('#js-alert').addClass('alert alert-primary');


// // Vérifiez si le <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la.
// if ($('#js-alert').hasClass('alert-warning')) {
//     $('#js-alert').removeClass('alert-warning');
// };

// // En cliquant sur le bouton #js-btn, basculez la classe 'alert-success': premier clique ajoute la classe, deuxième clique l'enlève, troisième l'ajoute de nouveau, etc.
// $('#js-btn')[0].addEventListener('click', () => {
//     $('#js-alert').toggleClass('alert-success');
// });

// // Récupérez et logguez dans la console la couleur du fond du bouton.
// console.log($('#js-btn').css('background-color'));

// // Passez la couleur du fond du bouton en #71b8af.
// $('#js-btn').css('background-color', '#71b8af');

// // Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px.
// $('#js-btn').css({
//     color: '#fff2d5',
//     'border-radius': '100%'
// })

// if ($('#js-danger-alert').hasClass('alert-danger')) {
//     $('p').addClass('text-danger');
//     $('#js-danger-alert-btn').removeClass('btn-success');
// };

// Créez un bouton. Si ce bouton est cliqué, logguez dans la console 'Clicked!'. Si ce bouton est cliqué plus de 5 fois, enlevez son écouteur d'événement 'click'.
// document.querySelector('#btn').addEventListener('click', () => {});
// $('#btn').click(() => {});
// $('#btn').on('click', () => {});

// let counter = 0;
// $('js-btn').click(() => {
//     counter++;
//     if(counter > 5) {
//         $('#js-btn').off('click')
//     }
//     console.log('counter', counter);
// })

// Créez un div bleu. Si on le survole, il passe en vert. Si on sort 
// le curseur du div, il redevient bleu. Utilisez les méthodes mouseenter, mouseleave ou hover.
// $('#js-hovered').mouseenter(() => {
//     $('#js-hovered').css('background-color', 'green');
// });
// $('#js-hovered').mouseleave(() => {
//     $('#js-hovered').css('background-color', 'blue');
// });

// $('#js-tooltip-wrapper').mouseenter(() => {
//     $('.tooltip').css('display', 'block');
// });
// $('#js-tooltip-wrapper').mouseleave(() => {
//     $('.tooltip').css('display', 'none');
// });

// Utilisez le HTML ci-dessus. Affichez l'alerte si le bouton #js-show-alert est cliqué. Cachez-la si le bouton #js-hide-alert est cliqué.
// $('#js-show-alert').click(() =>{
//     // $('#js-alert').toggle();
//     // $('#js-alert').slideDown();
//     $('#js-alert').fadeIn();
// });
// $('#js-hide-alert').click(() =>{
//     // $('#js-alert').hide();
//     // $('#js-alert').slideUp();
//     $('#js-alert').fadeOut();
// });

// Utilisez les méthodes slideUp, slideDown ou slideToggle pour afficher/cacher la bannière
//  .js-slide-example-links sous le paragraphe #js-slide-example-1 si celui-ci est cliqué.
$('#js-btn-fade-in').click(() =>{
    $('#js-div-fade-in-out').fadeIn();
});
$('#js-btn-fade-out').click(() =>{
    $('#js-div-fade-in-out').fadeOut();
});

$('#js-animation-1')
  .delay(1000)
  .animate({
    left: '300px'
  },700)
  .animation({
      width: '200px'
  }500)
  .animate({
      height: '700px'
  })