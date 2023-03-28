import CardsGrid from "@/components/cards-grid";
import Head from "next/head";
import ConnectionsBanner from "@/components/connections-banner";

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
          <h3 className="mb-[50px] text-[39px] font-light">Link in Numbers</h3>
          <div className="grid gap-y-7 md:grid-cols-4 sm:grid-cols-1 last:mb-0 mb-7">
            <div className="col-span-1 flex flex-col items-start justify-center md:flex-row w-full">
              <div className="w-full  flex flex-col justify-center items-center text-center md:mt-[20px]">
                <p className="xl:text-[62px] lg:text-[52px] xl:leading-[62px] lg:leading-[52px] text-[48px] leading-[48px]  font-light">
                  1000+
                </p>
                <p className="mt-3 text-lg">employees throughout the U.S.</p>
              </div>
              <div className="hidden md:block h-[160px] min-w-[2px] mx-[30px] bg-slate"></div>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center md:flex-row w-full">
              <div className="w-full  flex flex-col justify-center items-center text-center md:mt-[20px]">
                <p className="xl:text-[62px] lg:text-[52px] xl:leading-[62px] lg:leading-[52px] text-[48px] leading-[48px]  font-light">
                  25
                </p>
                <p className="mt-3 text-lg">
                  offices in key markets across the U.S.
                </p>
              </div>
              <div className="hidden md:block h-[160px] min-w-[2px] mx-[30px] bg-slate"></div>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center md:flex-row w-full">
              <div className="w-full  flex flex-col justify-center items-center text-center md:mt-[20px]">
                <p className="xl:text-[62px] lg:text-[52px] xl:leading-[62px] lg:leading-[52px] text-[48px] leading-[48px]  font-light">
                  545M
                </p>
                <p className="mt-3 text-lg">
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
                <p className="mt-3 text-lg">properties</p>
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
      <ConnectionsBanner />
    </>
  );
}
