// UserContainer.tsx
import * as React from 'react';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import { User } from '../../@types';
import UserDetail from '../user-detail/UserDetail';
import UserList from '../user-list/UserList';

interface State {
  selectedUser: User;
}

class UserContainer extends React.Component<{}, State> {
    users: User[] = [{
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
      
    handleSelectUser = (idx: number) => {
        this.setState({
            selectedUser: this.users[idx]
        });
    };

    readonly state: State = {
        selectedUser: {
            id: undefined,
            firstName: '',
            lastName: '',
            email: ''
        }
    };

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Card>
                        <CardHeader title='Users' />
                        <CardContent>
                            <UserList users={this.users} onSelectUser={this.handleSelectUser} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardHeader title='Selected User'/>
                        <CardContent>
                            <UserDetail user={this.state.selectedUser} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default UserContainer;