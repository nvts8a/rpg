import React, {FunctionComponent} from 'react';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';

type CharacterCardProps = {
  name: string,
  totalKarma: number
}
const CharacterCard: FunctionComponent<CharacterCardProps> = (props) => {
  return(
    <Card sx={{
      position: 'absolute',
      top: '5%',
      left: '44%',
      width: '12%'
    }}>
      <CardMedia
        sx={{ height: 200 }}
        image="./portrait.webp"
        title="TEST"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{props.name}</Typography>
        <Typography variant="body2" color="text.secondary">Karma: {props.totalKarma}</Typography>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;