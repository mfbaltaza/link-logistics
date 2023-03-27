import CardsGrid from "@/components/cards-grid";
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
      <div className="md:px-5 px-[15px] md:py-16 py-3 bg-gold">
        <div className="md:container px-[15px] mx-auto">
          <h3 className="mb-[50px] text-4xl font-light">Link in Numbers</h3>
          <div className="grid gap-y-7 md:grid-cols-4 sm:grid-cols-1 last:mb-0 mb-7">
            <div className="col-span-1 flex flex-col items-start justify-center md:flex-row w-full">
              <div className="w-full  flex flex-col justify-center items-center text-center md:mt-[20px]">
                <p className="xl:text-[62px] lg:text-[52px] xl:leading-[62px] lg:leading-[52px] text-[48px] leading-[48px]  font-light">
                  1000+
                </p>
                <p className="lead lg:lead--lg">
                  employees throughout the U.S.
                </p>
              </div>
              <div className="hidden md:block h-[160px] min-w-[2px] mx-[30px] bg-slate"></div>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center md:flex-row w-full">
              <div className="w-full  flex flex-col justify-center items-center text-center md:mt-[20px]">
                <p className="xl:text-[62px] lg:text-[52px] xl:leading-[62px] lg:leading-[52px] text-[48px] leading-[48px]  font-light">
                  25
                </p>
                <p className="lead lg:lead--lg">
                  offices in key markets across the U.S.
                </p>
              </div>
              <div className="hidden md:block h-[160px] min-w-[2px] mx-[30px] bg-slate"></div>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center md:flex-row w-full">
              <div className="w-full  flex flex-col justify-center items-center text-center md:mt-[20px]">
                <p className="xl:text-[62px] lg:text-[52px] xl:leading-[62px] lg:leading-[52px] text-[48px] leading-[48px]  font-light">
                  545
                </p>
                <p className="lead lg:lead--lg">
                  square feet of logistics real estate
                </p>
              </div>
              <div className="hidden md:block h-[160px] min-w-[2px] mx-[30px] bg-slate"></div>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center md:flex-row w-full">
              <div className="w-full  flex flex-col justify-center items-center text-center md:mt-[20px]">
                <p className="xl:text-[62px] lg:text-[52px] xl:leading-[62px] lg:leading-[52px] text-[48px] leading-[48px]  font-light">
                  3600+
                </p>
                <p className="lead lg:lead--lg">properties</p>
              </div>
            </div>
          </div>
          {/* <div className="col-span-1 flex flex-col items-start justify-center md:flex-row w-full">
            <div className="w-full  flex flex-col justify-center items-center text-center md:mt-[20px]">
              <p className="xl:text-[62px] lg:text-[52px] xl:leading-[62px] lg:leading-[52px] text-[48px] leading-[48px]  font-light">
                1000+
              </p>
              <p className="lead lg:lead--lg">employees throughout the U.S.</p>
            </div>
            <div className="hidden md:block h-[160px] min-w-[2px] mx-[30px] bg-slate"></div>
          </div> */}
        </div>
      </div>
      <CardsGrid />
      <div className="mx-[15px] my-[60px] flex flex-col-reverse md:flex-row border-2 border-gold rounded-br-[60px] rounded-tl-[60px] md:rounded-br-[100px] md:rounded-tl-[100px] bg-cement">
        <div className="md:pl-36 md:pr-16 md:pt-10 md:pb-[40px] md:w-1/2 w-full px-4">
          <h4 className="mt-[10px] md:mt-0 md:mb-7 mb-2 font-medium md:text-[31px] text-base">
            It is all about connections
          </h4>
          <p className="text-sm">
            Logistics real estate connects products with the people who need
            them. Link connects businesses with the warehouse spaces they need
            to make it all happen—helping its customers grow all along the way.
          </p>
          <p className="text-sm my-3">
            <strong>We will get you there.</strong>
            <br />
            Link owns the largest portfolio of U.S.-only industrial real estate.
            Our scale is expansive, our technology is leading-edge and our
            people are talented contributors who bring a passion for what we do.
          </p>
        </div>
        <div
          className="rounded-tl-[60px] md:rounded-tl-none md:rounded-br-[100px] md:border-l-2 border-gold  bg-center bg-cover sm:min-h-[350px] min-h-[160px] md:w-1/2 w-full
          bg-[url('https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-1272641181-scaled.jpg')]"
        ></div>
      </div>
    </>
  );
}
