import React, {FunctionComponent} from 'react';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';

type CharacterCardProps = {
  metatype: string,
  name: string,
  role: string,
  sex: string,
  totalKarma: number
}
const CharacterCard: FunctionComponent<CharacterCardProps> = (props) => {
  const getPortrait = (): string => {
    if(props.sex && props.metatype) {
      if(props.role) return `./portraits/${props.sex}/${props.metatype}/${props.role}.webp`;
      return `./portraits/${props.sex}/${props.metatype}/default.webp`; }
    if(props.sex) return `./portraits/${props.sex}/default.webp`;
    if(props.role) return `./portraits/${props.role}.webp`;

    return './portraits/default.webp';
  }

  return(
    <Card sx={{
      position: 'absolute',
      top: '5%',
      left: '44%',
      width: '12%'
    }}>
      <CardMedia
        sx={{ height: 200 }}
        image={getPortrait()}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{props.name}</Typography>
        <Typography variant="body2" color="text.secondary">Karma: {props.totalKarma}</Typography>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;