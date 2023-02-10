import React, {FunctionComponent} from 'react';
import {Box, Card, CardContent, CardMedia, Chip, Typography} from '@mui/material';

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

  const cardStyle = {
    position: 'absolute',
    left: '44%',
    top: '2%',
    width: '12%'
  };

  const contentStyle = {
    backgroundColor: 'WhiteSmoke',
    border: 6,
    borderColor: 'rgba(255,85,175,.1)',
    borderRadius: '8px',
    borderStyle: 'groove',
  }

  return(
    <Box sx={cardStyle}>
      <Card sx={{ boxShadow: '0 30px 40px rgba(0,0,0,.3)' }}>
        <CardMedia
          sx={{ height: 200,  }}
          image={getPortrait()}
          title={props.name}
        />
        <CardContent sx={contentStyle}>
          <Typography variant="h5" component="div" sx={{fontFamily: 'Orbitron'}}>{props.name}</Typography>
          <Typography variant="caption" component="div" sx={{fontFamily: 'Orbitron'}}>{props.role}</Typography>
        </CardContent>
      </Card>
      <Chip label={props.totalKarma} color='primary' sx={{position: 'relative', left: '37%', top: '-20px', boxShadow: '0 30px 40px rgba(0,0,0,.5)', fontFamily: 'Orbitron'}} />
    </Box>
  );
}

export default CharacterCard;