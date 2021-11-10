import React,{Component} from "react";

class MovieForm extends Component{
    handleBack = ()=>{
        this.props.history.replace('/')
    }
    render() {

        return(
            <div>
                <h1>Movie Form {this.props.match.params.id} </h1>
                <button className=" btn bnt-primary" onClick={this.handleBack} >save</button>
            </div>
        )
    }

}

export default MovieForm;