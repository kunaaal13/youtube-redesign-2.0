import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  });

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
      <Head>
        <title>Login || Youtube redesign</title>
        <meta name="description" content="Youtube redesign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src="/logo.svg" alt="" height={150} width={150} />

      <div
        onClick={() => {
          signIn();
        }}
        className="hover:text-whit mb-20 cursor-pointer rounded-md border border-neutral-500 px-10 py-5 shadow-md hover:bg-cyan-900/20"
      >
        <h1 className="text-2xl font-bold text-white">Sign in with Google</h1>
      </div>

      <footer className="absolute bottom-10">
        <div className="">
          <h1 className="text-center text-2xl text-white">Made with ❤️ by Kunaaal</h1>
        </div>
      </footer>
    </div>
  );
}

export default Login;
