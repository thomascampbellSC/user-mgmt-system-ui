import * as React from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { User } from '../../@types';


const UserList: React.FC = () => {
    const users: User[] = [{
        id: 1,
        firstName: 'Homer',
        lastName: 'Simpson',
        email: 'homer@simpson.com'
    }, {
        id: 2,
        firstName: 'Marge',
        lastName: 'Simpson',
        email: 'marge@simpson.com'
    }, {
        id: 3,
        firstName: 'Lisa',
        lastName: 'Simpson',
        email: 'lisa@simpson.com'
    }, {
        id: 4,
        firstName: 'Bart',
        lastName: 'Simpson',
        email: 'bart@simpson.com'
    }, {
        id: 5,
        firstName: 'Maggie',
        lastName: 'Simpson',
        email: 'maggie@simpson.com'
    }];

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map(user => {
                    return <TableRow
                        key={'user-' + user.id}
                        hover={true}
                        onClick={() => alert(`User selected: ${user.firstName} ${user.lastName}`)}
                    >
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                    </TableRow>;
                })}
            </TableBody>
        </Table>
    );
};

export default UserList;