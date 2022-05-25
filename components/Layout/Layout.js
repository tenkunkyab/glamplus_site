import { Fragment } from 'react';
import Head from 'next/head';

function Layout(props) {
  return (
    <Fragment>
      <Head>
        <title>Glamplus</title>
        <meta name='description' content='Effortless client booking software that functions 24X7' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
