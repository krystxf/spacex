import type { NextPage } from 'next';
import { Layout } from '@components/Layout';
import React from 'react';
import Image from 'next/image';
import Button from '@components/UI/Button';
import Link from 'next/link';

const Error404: NextPage = () => {
  return (
    <Layout pathname="/">
      {/* TITLE */}
      <div className="absolute -translate-x-1/2 left-[50%] top-[20%] z-10 text-6xl font-bold text-white flex flex-col gap-12">
        PAGE NOT FOUND
        <Link href="/">
          <a className="w-full flex justify-center">
            <Button>RETURN TO MAIN PAGE</Button>
          </a>
        </Link>
      </div>
      {/* BACKGROUND IMAGE */}
      <div
        className="relative w-full"
        style={{ minHeight: 'calc(100vh - 86px)' }}
      >
        <Image
          src="/hls-resized-2.jpg"
          layout="fill"
          objectFit="contain"
          objectPosition="center bottom"
          alt="Background picture"
        />
      </div>
    </Layout>
  );
};

export default Error404;
