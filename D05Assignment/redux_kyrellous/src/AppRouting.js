
import Nav from "./Components/nav"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register  from "./Containers/Register";
import Error from "./Components/Error";
import { Home } from "./Containers/Home";
import UserProfile from "./Containers/UserProfile";
import EditModal from "./Containers/EditModal";
const AppRouting = ()=>{
   return( 
   <BrowserRouter>
    <Nav></Nav>
      <Switch>
        <Route exact path="/Users" component={Home}/>
        <Route exact path="/Users/Edit/:id" component={EditModal}/>
        <Route exact path="/" component={Register} /> 
        <Route exact path="/Users/:id" component={UserProfile}></Route>
        {/* <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} /> */}
        <Route path="*"  component={Error}/>
      </Switch>
    </BrowserRouter>)
}
export default(AppRouting)