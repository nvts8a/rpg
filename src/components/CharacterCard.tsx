import React, {FunctionComponent} from 'react';
import {Box, Card, CardContent, CardMedia, Chip, Typography} from '@mui/material';
import '@fontsource/orbitron/500.css';

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
    <Box sx={{
      position: 'absolute',
      top: '2%',
      left: '44%',
      width: '12%'
    }}>
      <Card >
        <CardMedia
          sx={{ height: 200 }}
          image={getPortrait()}
          title={props.name}
        />
        <CardContent>
          <Typography variant="h5" component="div" sx={{fontFamily: 'Orbitron'}}>{props.name}</Typography>
          <Typography variant="caption" component="div" sx={{fontFamily: 'Orbitron'}}>{props.role}</Typography>
        </CardContent>
      </Card>
      <Chip label={props.totalKarma} color='primary' sx={{position: 'relative', left: '37%', top: '-20px', fontFamily: 'Orbitron'}} />
    </Box>
  );
}

export default CharacterCard;