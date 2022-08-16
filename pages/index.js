import Head from "next/head";
import Landing from "./landing";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Landing />
      </div>
    </>
  );
}