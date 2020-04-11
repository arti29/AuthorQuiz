import React from "react";
import './AddAuthorForm.css';
import AuthorQuiz from "./AuthorQuiz";


class AuthorForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:'',
            imageUrl:'',
            books:["arti"]
        }
        this.onFieldChange =this.onFieldChange.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
    }

    onFieldChange(event){

        this.setState({
            [event.target.name] : event.target.value
        })

    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onAddAuthor(this.state);


    }
    render(){
        return <form onSubmit={this.handleSubmit}>
          <div className="AddAuthorForm_input">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}></input>
          </div>
          <div className="AddAuthorForm_input">
              <label htmlFor="imageUrl">Image URL</label>
              <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}></input>
          </div>
          <div className="AddAuthorForm_input">
              {this.state.books.map((book)=> <p key={}>{book}</p>)}
              <label htmlFor="imageUrl">Image URL</label>
              <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}></input>
          </div>
          <input type="submit" value="Add"></input>
          
      </form>

    }
}

function AddAuthorForm({match, onAddAuthor}){
    return <div className="AddAuthorForm">
      <h1>Add Author</h1>
      <AuthorForm  onAddAuthor={onAddAuthor}/>
      
    </div>
  }

export default AddAuthorForm;