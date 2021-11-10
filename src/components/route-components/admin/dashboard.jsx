import React,{Component} from "react";
import Sidebar from "./sidebar";
import {Route} from "react-router-dom";
import Post from "./post";
import User from "./user";

class Dashboard extends Component {

    handleSave = () =>{
        this.props.history.push('/products')
    }

    render() {
        return(
            <div>
                <h1> Admin Dashboard</h1>
                <Sidebar/>
                <Route path="/admin/post" component={Post}/>
                <Route path="/admin/user" component={User}/>
            </div>
        );
    }
}
export default Dashboard;