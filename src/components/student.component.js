import React from 'react';
import { Button, Link, Typography, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';

import { AvatarStyled } from './student.styled';

export const Student = ({ name, github, mail, stack, cv, portrait }) => (
  <Box component="article" p={2} borderRadius={12} boxShadow={5}>
    <AvatarStyled alt={name} src={portrait} />
    <Typography variant="h5" component="h1" align="center">
      {name}
    </Typography>
    <Box m={2} align="center">
      {stack.map(icon => {
        const iconId = `${name}-${icon}`.replace(/\s+/g, '').toLowerCase();

        return (
          <Box
            component="abbr"
            display="inline"
            m={1}
            title={icon}
            key={uuidv4()}
          >
            <FontAwesomeIcon key={iconId} icon={['fab', icon]} size="2x" />
          </Box>
        );
      })}
    </Box>
    <Box m={2} align="center">
      <Link href={github} target="_blank">
        <FontAwesomeIcon icon={['fab', 'github']} /> {github}
      </Link>
    </Box>
    <Box m={2} align="center">
      <Link href={`mailto:${mail}`} target="_blank">
        <FontAwesomeIcon icon={['fas', 'at']} /> {mail}
      </Link>
    </Box>
    <Box m={2} mb={0} align="center">
      <Button
        component="a"
        href={cv}
        color="primary"
        variant="contained"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le C.V.
      </Button>
    </Box>
  </Box>
);
