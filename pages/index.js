import Head from 'next/head';

import { students } from '../data/promo';
import { Student } from '../src/components/student.component';
import { StudentsGrid } from '../src/components/studentGrid.component';
import { Box, Typography } from '@material-ui/core';

const TITLE = 'Alternance développement web et mobile avancé';

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box m={8}>
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          {TITLE}
        </Typography>
        <Typography component="h2" variant="h4" align="center">
          <i>12 avril 2021 - 8 avril 2022</i>
          <br />
          Nos profils encore disponibles
        </Typography>
      </Box>

      {students && students.length ? (
        <StudentsGrid>
          {students.map(student => (
            <Student {...student} key={student.name} />
          ))}
        </StudentsGrid>
      ) : (
        <p>très prochainement...</p>
      )}
    </>
  );
}
