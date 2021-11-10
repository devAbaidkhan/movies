import Navbar from "./components/navbar";
import {Route,Switch,Redirect} from "react-router-dom";
import Home from "./components/route-components/home";
import Admin from "./components/route-components/admin";
import Products from "./components/route-components/products";
import Post from "./components/route-components/post";
import ProductDetails from "./components/route-components/productsDetails";
import NotFound from "./components/route-components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Dashboard from "./components/route-components/admin/dashboard";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import React from "react";
import Login from "./components/login";

const App = ()=>{
    return(
        <div>
            <Navbar/>
            <div className="content">
                <Switch>

                    <Route path="/login" component={Login} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/rentals" component={Rentals} />
                    <Route path={'/movie/:id'} component={MovieForm} />
                    <Route path="/not-found" component={NotFound } />
                    <Route path="/" exact  component={Movies} />
                    <Redirect to="/not-found" />

                    {/*<Route path="/products/:id" component={ProductDetails}  > Product Detail</Route>*/}
                    {/*<Route path="/products" render={props=> <Products sortBy="newest" {...props}/>}  > Products</Route>*/}
                    {/*<Route path="/posts/:year?/:month?" component={Post}> Post</Route>*/}
                    {/*<Route path="/admin" component={Dashboard}>Admin </Route>*/}
                    {/*<Redirect from={`/messages`} to={`/posts`}/>*/}
                    {/* <Route path="/not-found" component={NotFound}> </Route>*/}
                    {/*<Route path="/" exact component={Home}>Home </Route>*/}
                    {/*<Redirect to="/not-found" />*/}

                </Switch>
            </div>
        </div>
    );
}
export default App;