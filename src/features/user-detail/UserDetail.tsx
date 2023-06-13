import * as React from 'react';

import { User } from '../../@types';

interface Props {
  user: User;
}

import TextField from '@mui/material/TextField';

class UserDetail extends React.Component<Props> {
    static defaultProps = {
      user: {
        id: 1,
        firstName: 'Homer',
        lastName: 'Simpson',
        email: 'homer@simposon.com'
      }
    }

    return (
        <>
            <TextField
                label="First Name"
                fullWidth
                value={user.firstName}
                margin="dense"
                variant="outlined"
                disabled={true}
            />
            <TextField
                label="Last Name"
                fullWidth
                value={user.lastName}
                margin="dense"
                variant="outlined"
                disabled={true}
            />
            <TextField
                label="Email"
                fullWidth
                value={user.email}
                margin="dense"
                variant="outlined"
                disabled={true}
            />
        </>
    );
};

export default UserDetail;
