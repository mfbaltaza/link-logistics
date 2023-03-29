import { useEffect } from "react";
import CardsGrid from "@/components/cards-grid";
import Head from "next/head";
import Button from "@/components/ui/button";
import ConnectionsBanner from "@/components/connections-banner";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Link Logistics Real Estate & Supply Chain Logistics</title>
        <meta name="description" content="Link Logistics Real Estate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardsGrid />
      <ConnectionsBanner />
      <div className="bg-slate py-10 md:px-5">
        <div className="mx-auto px-[15px] py-3 md:container md:px-0 md:text-left">
          <div className="flex flex-col-reverse md:flex-row-reverse ">
            <div className="wow fadeInRight w-full py-3 md:w-1/2 md:px-5 md:pt-5 md:pb-[23px]">
              <div className="a false flex h-full min-h-full flex-col justify-center ">
                <div className="flex w-full flex-col">
                  <h4 className="mb-2 text-lg font-medium text-gold md:mb-[28px] md:text-[31px] md:leading-[31px]">
                    Link&apos;s 2021 ESG Report
                  </h4>
                </div>
                <div>
                  <div className="mb-4 text-sm text-gold md:mb-7 md:text-base">
                    <span>
                      At Link, strong environmental, social and governance (ESG)
                      practices are core to our identity as a firm. Our 2021 ESG
                      report recaps our progress during the calendar year and
                      shows how we will continue to redefine what sustainability
                      looks like in the industrial real estate sector.
                    </span>
                  </div>
                  <Button link="/esg-2021-report/">Explore the report</Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:px-5">
              <div className="wow fadeInLeft min-h-[160px] w-full rounded-bl-[60px] border-2 border-gold bg-[url('https://cms.linklogistics.com/wp-content/uploads/2022/07/6695BusinessPkwy_Marketing_2021_PropertyPhoto_bt42540.jpg')] bg-cover bg-center sm:min-h-[300px] md:rounded-bl-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-slate" id="">
        <div className="mx-auto px-[15px] py-3 md:container md:px-0 md:text-left">
          <div className="flex flex-col-reverse md:flex-row-reverse ">
            <div className="wow fadeInRight w-full py-3 md:w-1/2 md:px-5  md:pt-5 md:pb-[23px]">
              <div className="a false undefined relative flex h-full min-h-full flex-col justify-center ">
                <div className="flex w-full flex-col">
                  <h4 className="mb-2 text-lg font-medium text-gold md:mb-[28px] md:text-[31px] md:leading-[31px]">
                    National scale, local service
                  </h4>
                </div>
                <div>
                  <div className="mb-4 text-sm text-gold md:mb-7 md:text-base">
                    <p>
                      Our large footprint in gateway cities, key distribution
                      hubs and high-population growth areas enable us to provide
                      world-className, personalized service throughout the U.S.
                    </p>
                  </div>
                  <Button link="https://www.linklogistics.com/portfolio/">
                    View Our Portfolio
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:px-5">
              <div className="wow fadeInLeft min-h-[160px] w-full rounded-tl-[60px] border-2 border-gold bg-[url('https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-1147340803-scaled.jpg')] bg-cover bg-center sm:min-h-[300px] md:rounded-tl-[100px]"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto px-[15px] py-3 md:container md:px-0 md:text-right">
          <div className="flex flex-col-reverse md:flex-row ">
            <div className="wow fadeInLeft w-full py-3 md:w-1/2 md:px-5  md:pt-5 md:pb-[23px]">
              <div className="a false undefined relative flex h-full min-h-full flex-col justify-center ">
                <div className="flex w-full flex-col">
                  <h4 className="mb-2 text-lg font-medium text-gold md:mb-[28px] md:text-[31px] md:leading-[31px]">
                    Building a satisfying career
                  </h4>
                </div>
                <div>
                  <div className="two-col-content-left mb-4 text-sm text-gold md:mb-7 md:text-base">
                    Our commitment to employee well-being, satisfaction and
                    support enables us to attract, develop, inspire and reward
                    great people.
                  </div>
                  <Button link="https://www.linklogistics.com/careers/">
                    VIEW JOB OPENINGS
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:px-5">
              <div className="wow fadeInRight min-h-[160px] w-full rounded-tr-[60px] border-2 border-gold bg-[url('https://cms.linklogistics.com/wp-content/uploads/2021/07/Order-number-2070570404-scaled.jpg')] bg-cover bg-center sm:min-h-[300px] md:rounded-tr-[100px]"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto px-[15px] py-3 md:container md:px-0 md:text-left">
          <div className="flex flex-col-reverse md:flex-row-reverse ">
            <div className="wow fadeInRight w-full py-3 md:w-1/2 md:px-5  md:pt-5 md:pb-[23px]">
              <div className="a false undefined relative flex h-full min-h-full flex-col justify-center ">
                <div className="flex w-full flex-col">
                  <h4 className="mb-2 text-lg font-medium text-gold md:mb-[28px] md:text-[31px] md:leading-[31px]">
                    We design and build warehouses that allow our customers to
                    evolve
                  </h4>
                </div>
                <div>
                  <div className="mb-4 text-sm text-gold md:mb-7 md:text-base">
                    Link seamlessly manages the entire process of delivering
                    facilities that support our customers’ long-term growth
                    strategies.
                  </div>
                  <Button link="https://www.linklogistics.com/custom-property-development/">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:px-5">
              <div className="wow fadeInLeft min-h-[160px] w-full rounded-tl-[60px] border-2 border-gold bg-[url('https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-1216505422-scaled.jpg')] bg-cover bg-center sm:min-h-[300px] md:rounded-tl-[100px]"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto px-[15px] py-3 md:container md:px-0 md:text-right">
          <div className="flex flex-col-reverse md:flex-row ">
            <div className="wow fadeInLeft w-full py-3 md:w-1/2 md:px-5  md:pt-5 md:pb-[23px]">
              <div className="a false undefined relative flex h-full min-h-full flex-col justify-center ">
                <div className="flex w-full flex-col">
                  <h4 className="mb-2 text-lg font-medium text-gold md:mb-[28px] md:text-[31px] md:leading-[31px]">
                    From the ground up: a holistic approach to ESG
                  </h4>
                </div>
                <div>
                  <div className="two-col-content-left  mb-4 text-sm text-gold md:mb-7 md:text-base">
                    <p>
                      Sustainability is built into our foundation. At the heart
                      of everything we do, it drives our commitment to renewable
                      energy, green building technology and carbon neutrality.
                    </p>
                  </div>
                  <Button link="https://www.linklogistics.com/esg/">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:px-5">
              <div className="wow fadeInRight min-h-[160px] w-full rounded-br-[60px] border-2 border-gold bg-[url('https://cms.linklogistics.com/wp-content/uploads/2021/07/365-north-ave-carol-stream-5-scaled.jpeg')] bg-cover bg-center sm:min-h-[300px] md:rounded-br-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gold px-[15px] py-3 md:px-5 md:py-16">
        <div className="mx-auto px-[15px] md:container">
          <h3 className="mb-[50px] text-[39px] font-light">Link in Numbers</h3>
          <div className="mb-7 grid gap-y-7 last:mb-0 sm:grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 flex w-full flex-col items-start justify-center md:flex-row">
              <div className="flex  w-full flex-col items-center justify-center text-center md:mt-[20px]">
                <p className="text-[48px] font-light leading-[48px] lg:text-[52px] lg:leading-[52px] xl:text-[62px]  xl:leading-[62px]">
                  1000+
                </p>
                <p className="mt-3 text-lg">employees throughout the U.S.</p>
              </div>
              <div className="mx-[30px] hidden h-[160px] min-w-[2px] bg-slate md:block"></div>
            </div>
            <div className="col-span-1 flex w-full flex-col items-start justify-center md:flex-row">
              <div className="flex  w-full flex-col items-center justify-center text-center md:mt-[20px]">
                <p className="text-[48px] font-light leading-[48px] lg:text-[52px] lg:leading-[52px] xl:text-[62px]  xl:leading-[62px]">
                  25
                </p>
                <p className="mt-3 text-lg">
                  offices in key markets across the U.S.
                </p>
              </div>
              <div className="mx-[30px] hidden h-[160px] min-w-[2px] bg-slate md:block"></div>
            </div>
            <div className="col-span-1 flex w-full flex-col items-start justify-center md:flex-row">
              <div className="flex  w-full flex-col items-center justify-center text-center md:mt-[20px]">
                <p className="text-[48px] font-light leading-[48px] lg:text-[52px] lg:leading-[52px] xl:text-[62px]  xl:leading-[62px]">
                  545M
                </p>
                <p className="mt-3 text-lg">
                  square feet of logistics real estate
                </p>
              </div>
              <div className="mx-[30px] hidden h-[160px] min-w-[2px] bg-slate md:block"></div>
            </div>
            <div className="col-span-1 flex w-full flex-col items-start justify-center md:flex-row">
              <div className="flex  w-full flex-col items-center justify-center text-center md:mt-[20px]">
                <p className="text-[48px] font-light leading-[48px] lg:text-[52px] lg:leading-[52px] xl:text-[62px]  xl:leading-[62px]">
                  3600+
                </p>
                <p className="mt-3 text-lg">properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardsGrid />
      <Footer />
    </>
  );
}
