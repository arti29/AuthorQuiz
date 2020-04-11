import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle,sample } from 'underscore';
import AddAuthorForm from './AddAuthorForm';

const authors = [
  {
    name:"Mark Twain",
    imageUrl: 'images/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventure of Huckleberry Finn',"Life on the Mississippi","Roughing"]

  },
  {
    name:"Charles Dickens",
    imageUrl: 'images/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield','A Tale of Two cities','A Christmas Carol']

  },
  {
    name:"William Shakespeare",
    imageUrl: 'images/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Macbeth','Romeo and Juliet','Hamlet']

  },
  {
    name:"J. K. Rowling",
    imageUrl: 'images/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Harry Potter','Lethel Whilte','The casual Vacancy']

  },
  
];

function getTurnData(authors){
  const allBooks = authors.reduce(function(p,c,i){
    return p.concat(c.books);
  },[])

  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const  answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author => author.books.some((title)=> title === answer)))
  }


}



const state = {
  turnData: getTurnData(authors),
  highlight:""
}

function onAnswerSelected(answer){
  const isCorrect = state.turnData.author.books.some((book)=>book === answer);
  state.highlight = isCorrect? 'correct':'wrong';
  render();
}



function App(){

  return <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}/>;

}

function AuthorWrapper(){
  return <AddAuthorForm onAddAuthor={console.log} />;
}

function render(){


ReactDOM.render(
<BrowserRouter>
  <React.Fragment>
    <Route exact path="/" component={App} />
    <Route exact path="/add" component={AuthorWrapper} />
  </React.Fragment>
  </BrowserRouter>,document.getElementById('root'));
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
