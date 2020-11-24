import Search from "pages/Search";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const Routes = () => {
   return (
     <BrowserRouter>
       <Switch>
         <Route path='/' exact>
           <Home />
         </Route>
         <Route path='/search'>
           <Search />
         </Route>
       </Switch>
     </BrowserRouter>
   );
 };

 export default Routes;