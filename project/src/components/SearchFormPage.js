import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import SearchForm from "./SearchForm";
import NoMatchPage from "./NoMatchPage"

const SearchPage = () => {
    return (
        <Router>
            <Link to="/search?q=react"></Link>
            <Route exact path="/search" component={SearchForm}/>
            <Route component={NoMatchPage} />
        </Router>
    )
}

export default SearchPage;