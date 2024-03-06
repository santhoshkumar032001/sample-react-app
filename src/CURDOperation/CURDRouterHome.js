import { Route, Routes, Link, NavLink, useParams, useNavigate } from 'react-router-dom';
import Crud_Home from "./Crud_Home";
//import { Update } from './CRUDOperation/Update';
import ReadUsers from "./ReadUsers";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

export default function CRUDRouterHome()
{
    return <div>
        <Routes>
            <Route path="/" element={ <Crud_Home></Crud_Home> }></Route>
            <Route path="/ReadUsers" element={ <ReadUsers/> }></Route>
            <Route path="/CreateUser" element={ <CreateUser></CreateUser> }></Route>
            <Route path="/UpdateUser" element={ <UpdateUser></UpdateUser> }></Route>
        </Routes>
    </div>
}
