import { SpaceModuleScreen } from '@components/Screens';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout pathname="/">
      <SpaceModuleScreen title="Page not found" />
    </Layout>
  );
};

export default Home;
