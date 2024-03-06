import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadUser() {
    
    //Hook - useState()
    //var [variable name, function name to change the value of this variable] = useState(initial value);
    const [APIData, setAPIData] = useState([]);

    //Hook - useEffect()
    useEffect(() => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((r) => {
                console.log(r);
                setAPIData(r.data);//Assign the API response to the variable
            })
            .catch((response) => console.log("Error:" + response.data))
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;//{id: "19", firstName: "Bala", lastName: "KUmar", checkbox: true}
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)

        console.log(localStorage.getItem("First Name"));

        // sessionStorage.setItem('ID 1', id);
        // sessionStorage.setItem('First Name 1', firstName);
        // sessionStorage.setItem('Last Name 1', lastName);
        // sessionStorage.setItem('Checkbox Value 1', checkbox)

        // console.log(sessionStorage.getItem("First Name 1"));
    }

    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }

    return <>
        <table>            
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Checkbox Value</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {APIData.map((d) => {
                return (
                <tr>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.checkbox}</td>
                    <td>
                        <Link to='/UpdateUser'>
                            <Button onClick={() => setData(d)}>Update</Button>
                        </Link>
                    </td>
                    <td>
                        <Button onClick={() => onDelete(d.id)}>Delete</Button>
                    </td>
                </tr>
                )
            })}            
        </table>
    </>

    // return (
    //     <div>
    //         <Table singleLine>
    //             <Table.Header>
    //                 <Table.Row>
    //                     <Table.HeaderCell>First Name</Table.HeaderCell>
    //                     <Table.HeaderCell>Last Name</Table.HeaderCell>
    //                     <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
    //                     <Table.HeaderCell>Update</Table.HeaderCell>
    //                     <Table.HeaderCell>Delete</Table.HeaderCell>
    //                 </Table.Row>
    //             </Table.Header>

    //             <Table.Body>
                    
    //                 {APIData.map((data) => {
    //                     return (
    //                         <tr>
    //                             {/* <td>{data.firstName}</td>
    //                             <td>{data.lastName}</td> */}
    //                         <Table.Row>
    //                             <Table.Cell>{data.firstName}</Table.Cell>
    //                             <Table.Cell>{data.lastName}</Table.Cell>
    //                             <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
    //                             <Link to='/update'>
    //                                 <Table.Cell> 
    //                                     <Button onClick={() => setData(data)}>Update</Button>
    //                                 </Table.Cell>
    //                             </Link>
    //                             <Table.Cell>
    //                                 <Button onClick={() => onDelete(data.id)}>Delete</Button>
    //                             </Table.Cell>
    //                         </Table.Row>
    //                         </tr>
    //                     )
    //                 })}
                    
    //             </Table.Body>
    //         </Table>
    //     </div>
    // )
}

