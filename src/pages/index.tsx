import Head from "next/head";

// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Link Logistics Real Estate & Supply Chain Logistics</title>
        <meta name="description" content="Link Logistics Real Estate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="w-full bg-emerald">
          <a className="flex items-center">
            <p>PORTFOLIO</p>
            <svg
              className="ml-2"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 6L0.669873 -8.15666e-07L9.33013 -5.85621e-08L5 6Z"
                fill=" black "
              ></path>
            </svg>
          </a>
        </nav>
      </header>
      <main></main>
    </>
  );
}
