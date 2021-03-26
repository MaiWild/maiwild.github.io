import React from 'react';
import { Box, Link } from '@material-ui/core';

import theme from '../theme';

export const Footer = () => (
  <Box
    component="footer"
    borderTop={1}
    borderColor={theme.palette.divider}
    align="center"
    mt={8}
    fontSize="caption"
  >
    <p>
      👨‍💻{' '}
      <Link href="https://florentbarriol.com" target="_blank">
        florentbarriol.com
      </Link>
    </p>
  </Box>
);
