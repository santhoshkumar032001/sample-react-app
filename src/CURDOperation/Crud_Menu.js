import { Link } from 'react-router-dom';

export default function Crud_Menu()
{
    return <div>
      
        <Link to="/">Home &nbsp;&nbsp;&nbsp;</Link>
        <Link to="ReadUsers">Read Users&nbsp;&nbsp;&nbsp;</Link>
        <Link to="CreateUser">Create User&nbsp;&nbsp;&nbsp;</Link>
        {/* <Link to="UpdateUser">Update User &nbsp;</Link> */}
        
    </div>
}
