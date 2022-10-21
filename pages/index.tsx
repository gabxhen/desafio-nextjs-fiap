import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import styled from '@emotion/styled';
import Head from 'next/head';
import HeaderPage from '../components/HeaderPage';
import GridsPage from '../components/GridsPage';
import FooterPage from '../components/FooterPage';

const PageComplete = styled.div``

const Home: NextPage = () => {
  return (
    <PageComplete className={styles.container}>
      <Head>
        <title>Projeto React - Trabalho em Grupo</title>
        <meta name="description" content="Objetivo é desmembrar este arquivo em vários componentes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeaderPage contentTitle="Bem vindo ao projeto em grupo!" contentSubTitle="Agora analisem o arquivo index.tsx na pasta pages"/>
        <GridsPage/>
      </main>

      <FooterPage/>
    </PageComplete>
  )
}

export default Home;
