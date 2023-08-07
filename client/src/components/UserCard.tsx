import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { IUser } from '../models/IUser';

const UserCard: FC<IUser> = (props) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {props.username}
          </Typography>
          <Typography variant="body1">{props.name}</Typography>
          <Typography variant="body1">{props.email}</Typography>
          <Typography variant="body1">{props.phone}</Typography>
          <Typography variant="body1">{props.website}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
