import React from 'react';
import logo from './logo.svg';
import './AuthorQuiz.css';
import './bootstrap.min.css';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Hero(){
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown</p>
    </div>

  </div>);
}

function Book({title, onClick}){
  return (
  <div className="answer" onClick={()=> {onClick(title)}}>
    <h4>{title}</h4>
  </div>)

}

function Turn({author,books,highlight,onAnswerSelected}){
  function HighlightToBgColor(highlight){
    const mapping ={
      'none':"",
      'correct':"green",
      'wrong':"red"
    }
    return mapping[highlight]

  }
  return (<div className="row turn" style={{backgroundColor:HighlightToBgColor(highlight)}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorImage" alt="Author" width="200px" height="300px"/>

    </div>
    <div className="col-6">
      {books.map((title) => <Book title = {title} key={title} onClick={onAnswerSelected}></Book>)}

    </div>

  </div>)
}

Turn.propTypes={
  author: propTypes.shape({
    name: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    imageSource: propTypes.string.isRequired,
    books: propTypes.arrayOf(propTypes.string).isRequired
  }),
  books: propTypes.arrayOf(propTypes.string).isRequired,
  highlight: propTypes.string.isRequired,
  onAnswerSelected: propTypes.func.isRequired
}

function Continue(){
  return (<div>

  </div>)
}

function Footer(){
  return (<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page"> wikimedia commons</a></p>
    </div>

  </div>)
};

function AuthorQuiz({turnData,highlight,onAnswerSelected}) {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue/>
      <p><Link to="/add">Add an author </Link></p>
      <Footer/>

    </div>
  );
}



export default AuthorQuiz;
