import { Grid, Box } from '@material-ui/core';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Cards from '../components/cards';
import { useFindAllApartments } from '../api/apartments';

const Home = () => {
  const {
    apartmentsLoading,
    apartmentsError,
    apartments,
  } = useFindAllApartments();

  if (!apartmentsError && !apartmentsLoading) {
    console.log('apartments', apartments);
  }

  return (
    <Grid container direction="column">
      <Grid item container>
        <Header />
        <Grid item sm={12}>
          <Hero />
        </Grid>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Cards />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Home;
