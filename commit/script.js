'use script';

// let 
// const user = {
//     name: 'Toto'
// }

// //user = {
// //   name: 'Tata'
// //}
// // user.name = 'Tata'
// //const EARTH_MASS

// let myString = "Hello World";
// let myNumber = 1.5;
// let myBoolean = true; //false
// let myNull = null;
// let myUndefined = undefined

// const myObject = {
//     name:'Toto',
//     car: {
//         color: 'red'
//     }
// }

// let MyArray = [1,2,3];
// let MyNesteArray = [1,2,3,[3],4,'Hello'];

// // if 20/2 >= 10;
// // 'yes'
// // else 'false'

// isPrivate = false 
// isPrivate = false

// if (isPrivate = false || (isPrivate = true && isMember = true)){ ; // if (!isPrivate || (isPrivate && isMember))
// 'ok'}

// const username =prompt ('What is your name?')
// console.log('username',username);
// alert('your value here');

// const today = new Date();
// const todayDay = today.getDate

// const clientId = 1;

// //(condition) ? ... = ...
// (typeof clientId === 'number') ? console.log('Saved') : console.log('Cancel')


// // fonction en java

// function myFunc() {
//     console.log('Hello World');
//     // return undifined
// }

// function returnFunc(text= ' ') {
//     HTMLFormControlsCollection.log('text',text)
//     return text.toUpperCase();
// }

// console.log(returnFunc('Hello World'))

// const sum = (param1, param2) => {
//     console.log('param1', param1);
//     console.log('param2',param2);
//     return param1 + param2;
// }

// console.log('sum', sum(2,4))

// const sum = (p1,p2) => p1, p2;
// console.log('sum', sum(2,4));


// const truncate = (str, length, trail= '...') => {
//  str.substring(0,length)
// }

// const res1 = truncate('I will be truncated',15,'->')
// console.log ('res1' , res1)
// const res2 = truncate('I will be truncated',5)
// console.log ('res2',res2)


// //tableau 

// const myArr = [1,'Hello', true];
// console.log(myArr[0]);
// console.log(myArr[myArr.lenght -1]);

// const myArr1 = myArr;
// myArr1[0] = 'World';

// console.log('myArr',myArr);
// console.log('myArr1',myArr1);

// myArr2 = [...myArr];
// myArr2[0] = 'test';

// const myArr3 = [1,2,3,4,5,6,7]
// myArr3.shift
// myArr3.unshift



// // Trouvez toutes les balises div du document. Loggez le deuxième élément s'il est présent.
// const myDivs = document.getElementsByTagName('div')
// console.log('myDivs',myDivs);
// const myDivs2 = document.querySelectorAll('div');
// console.log('myDivs2',myDivs2);


// // Trouvez toutes les balises p avec la classe 'my-paragraph' du document. Loggez le premier élément s'il est présent.
// const myParagraphs = document.getElementsByClassName
// ('my-paragraphs');
// console.log('myParagraphs',myParagraphs);
// const myParagraphs2 = document.querySelectorAll('.my-paragraph');
// console.log('myParagraphs2', myParagraphs2);

// // Trouvez la balise span avec l'id 'js-unique-el'. Loggez-là. Inspéctez les propriétés de cet objet Element
// // const myUniqueEl = document.getElementsById('js-unique-el');
// const myUniqueEl2 = document.querySelector('#js-unique-el');

// // Trouvez toutes les balises p qui se trouvent dans un div.
// const myParagraphsInDivs = document.querySelectorAll('div p');
// console.log('myParagraphsInDivs', myParagraphsInDivs);

// // Trouvez toutes les balises span qui sont précédées par un div
// const spansPreceededByDivs = document.querySelectorAll('div~span');
// console.log('spansPreceededByDivs', spansPreceededByDivs);

// // Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.
// const firstP = document.querySelector('p');
// firstP.innerText = 'I am the first paragraph';
// console.log('firstP > text', firstP.innerText);

// // Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.
// const secondP = document.querySelectorAll('.second-p');
// secondP[0].innerHTML = '<span>Hello</span>';
// console.log('secondP >html',secondP[0].innerHTML);

// // Modifiez les attributs width à 50% et height à 'auto' de l'image.
// const myImg = document.querySelector('img');
// myImg.setAttribute('width', '50%')
// myImg.setAttribute('height', 'auto')

// // Ajoutez un attribut alt non vide à l'image.
// myImg.setAttribute('alt','Random image');

// // Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.
// firstP.style.color = 'blue';
// firstP.style.fontSize = '1.5rem';

// // Ajoutez la classe img à l'image.
// myImg.className = 'my-img';
// myImg.classList.add('my-img');

// const parent = document.getElementsByTagName('div');
// const nodeToDelete = document.querySelector('div p');
// parent[0].removeChild(nodeToDelete);

// const myBody = document.querySelector('body');
// const newDiv = document.createElement('div');
// newDiv.innerText  ='Hello!';
// myBody.appendChild(newDiv);

// const anotherDiv = document.createElement('div');
// anotherDiv.innerText = 'First child';
// anotherDiv.style.color = 'red';
// myBody.prepend(anotherDiv);


// const titre1 = document.createElement('h1');
// titre1.innerText = 'Browser Object Model';
// .prepend(titre1);

// const paragraphe = document.getElementById('paragraphe');
// const ajout = document.createElement('p');
// ajout.innerText = 'Nom de Navigateur: ' + window.navigator.userAgent;
// paragraphe.prepend(ajout);

// const paragraphe2 = document.getElementById('paragraphe2');
// const ajout2 = document.createElement('p');
// const ajout3 = document.createElement('p');
// ajout2.innerText = 'hauteur de lecran: ' + window.outerHeight;
// ajout3.innerText = 'largeur de lecran: ' + window.outerWidth;
// paragraphe2.prepend(ajout2);
// paragraphe2.prepend(ajout3);

// const btn = document.querySelector('#js-btn');
// btn.addEventListener('click', (event)=>{
//     console.log('Cliked',event);
// });

// window.addEventListener('contextmenu', (event) =>{
//     event.preventDefault();
// });
// let isClickTwice = false; 
// const grayBtn = document.querySelector('#js-gray-btn');
// grayBtn.addEventListener('click', () => {
//     isClickTwice = !isClickTwice;
//     if (isClickTwice) {
//     grayBtn.style.backgroundColor = 'green';
//     } else {
//     grayBtn.style.backgroundColor = 'gray';
//     }
// });

// const hoveredBtn = document.querySelector('#hovered-btn');
// console.log(hoveredBtn)
// hoveredBtn.addEventListener('mouseenter', () => {
//     hoveredBtn.style.backgroundColor = 'red';
// });
// hoveredBtn.addEventListener('mouseleave', () => {
//     hoveredBtn.style.backgroundColor = 'inherit';
// });

// const myForm = document.querySelector('#js-form');
// const myInput = document.querySelector('#js-text');

// myInput.addEventListener('keyup', () => {
//     console.log('input value : ',myInput.value);
// });

// myForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     alert(myInput.value);
// });

// Créez un cookie lang égal à 'fr'.
document.cookie = 'lang-fr';

// Créez un cookie previewSeen égal à true qui va expirer le lendement.
document.cookie = `lang-fr:expires=${new Date('2019-02-12')}`;

// Créez un cookie test égal à 'test' qui va expirer le 31 décembre 2019.
docCookies.setItem('test','test',new Date('2019/12/31'));

// Créez un cookie userId égal à 123
docCookies.setItem('userId',123);
console.log(docCookies.getItem('userId'));

// Modifiez la valeur du cookie userId à 321.
docCookies.setItem('userId',321);

// Récupérez et loggez les valeurs des cookies lang, previewSeen et userId
console.log(docCookies.getItem('lang'));
console.log(docCookies.getItem('previewSeen'));
console.log(docCookies.getItem('userId'));

// Store an object
docCookies.setItem('testObject', JSON.stringify({ id:1}));
// Get an Object
const myObj = docCookies.getItem('testObject');
console.log('myObj', myObj);
console.log('myObj parsed', JSON.parse(myObj));

// Supprimez le cookie test.
docCookies.removeItem('test');
docCookies.setItem('test','',new Date('2000-01-01'));

// LOCAL STORAGE

// Vérifiez si l'objet SessionStorage est supporté par le navigateur.

if(localStorage) {
    // Créez une entrée greeting égale à 'Hello World'. 
    localStorage.setItem('greeting', 'Hello World');
    // Créez une entrée adIds égale à l'objet {top: 1, bottom: 2}. 
    localStorage.setItem('adIds', JSON.stringify({top: 1, bottom: 2}));
};
// Récupérez greeting.
console.log(localStorage.getItem('greeting'));
// Modifiez cette entrée à 'Welcome'.
localStorage.setItem('greeting','Welcome');
// Supprimez greeting du LocalStorage.
localStorage.removeItem('greeting');
// delete all
localStorage.clear();



// Créez une entrée posts égale à [{id: 0}, {id: 1}, {id: 2}].

// Créez une entrée userId égale au nombre 123.

// Récupérez posts.

// Modifiez cette entrée à [{id: 321}, {id: 1}, {id: 2}].

// Supprimez userId du SessionStorage.


// GEOLOCALITION
// if (navigator.geolocation) {

//     const successCallback = (position) => {
//         console.log('position',position);
//         const link = document.createElement('a');
//         link.href = `https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`;
//         link.innerText = 'Click here to see your position'
//         document.querySelector('body').appendChild(link);
//     }

//     const errorCallback = (error) => {
//         console.log('error',error);
//     }

//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
//     }