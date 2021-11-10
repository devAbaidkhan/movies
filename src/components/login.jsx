import React,{Component} from "react";
import Joi from 'joi-browser';
import Input from "./common/Input";

class Login extends Component{

    state = {
        account: {username:'', password:''},
        errors:{}
    }

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    }

    validateProperty = ({name,value})=>{
        if (name === 'username'){
            if (value.trim() === '' ) return 'User Name is Required.';
            // ...
        }else if (name === 'password'){
            if (value.trim() === '' ) return 'Password is Required.';
            // ...
        }
    }

    handleChange = ({currentTarget:input})=>{

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);

        console.log(errorMessage)

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account,errors});
    }

    validate = ()=>{

        const result =  Joi.validate(this.state.account,this.schema,{abortEarly:false});
        console.log(result)
        const errors ={};
        const {account} = this.state
        if (account.username.trim() === '')
            errors.username = 'User Name is required..'
        if (account.password.trim() === '')
            errors.password = 'Password is required..'

        return ( Object.keys(errors).length === 0 ? null : errors);
    }

    handleSubmit = e=> {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});

        console.log(errors)
        if (errors) return

        console.log('submitted')
        //call backend services
    }




    render() {

        const {account,errors} = this.state;

        return(
            <div className="row">

                <div className="col-md-2"></div>
                <div className="col-md-6">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit} >
                        <Input
                            value={account.username}
                            name="username"
                            label="User Name"
                            onChange={this.handleChange}
                            error={errors.username}
                        />

                        <Input
                            value={account.password}
                            name="password"
                            label="Password"
                            onChange={this.handleChange}
                            error={errors.password}
                        />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        )
    }

}

export default Login;