import { useEffect } from "react";
import CardsGrid from "@/components/cards-grid";
import Head from "next/head";
import ConnectionsBanner from "@/components/connections-banner";
import Button from "@/components/ui/button";

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
      <div className="py-10 md:px-5 bg-slate">
        <div className="md:container mx-auto px-[15px] md:px-0 py-3 md:text-left">
          <div className="flex md:flex-row-reverse flex-col-reverse ">
            <div className="w-full md:w-1/2 md:px-5 md:pt-5 md:pb-[23px] py-3 wow fadeInRight">
              <div className="h-full min-h-full a justify-center false flex flex-col ">
                <div className="flex flex-col w-full">
                  <h4 className="md:mb-[28px] mb-2 font-medium text-gold text-lg md:text-[31px] md:leading-[31px]">
                    Link&apos;s 2021 ESG Report
                  </h4>
                </div>
                <div>
                  <div className="mb-4 md:mb-7 text-gold text-sm md:text-base">
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
            <div className="md:px-5 md:w-1/2 w-full">
              <div className="bg-center bg-cover sm:min-h-[300px] min-h-[160px] w-full border-gold border-2 wow fadeInLeft rounded-bl-[60px] md:rounded-bl-[100px] bg-[url('https://cms.linklogistics.com/wp-content/uploads/2022/07/6695BusinessPkwy_Marketing_2021_PropertyPhoto_bt42540.jpg')]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-slate" id="">
        <div className="md:container mx-auto px-[15px] md:px-0 py-3 md:text-left">
          <div className="flex md:flex-row-reverse flex-col-reverse ">
            <div className="w-full md:w-1/2 md:px-5 md:pt-5 md:pb-[23px] py-3  wow fadeInRight">
              <div className="relative h-full min-h-full a flex flex-col justify-center false undefined ">
                <div className="flex flex-col w-full">
                  <h4 className="md:mb-[28px] mb-2 font-medium text-gold text-lg md:text-[31px] md:leading-[31px]">
                    National scale, local service
                  </h4>
                </div>
                <div>
                  <div className="mb-4 md:mb-7 text-gold text-sm md:text-base">
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
            <div className="md:px-5 md:w-1/2 w-full">
              <div className="bg-center bg-cover sm:min-h-[300px] min-h-[160px] w-full border-gold border-2 wow fadeInLeft rounded-tl-[60px] md:rounded-tl-[100px] bg-[url('https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-1147340803-scaled.jpg')]"></div>
            </div>
          </div>
        </div>
        <div className="md:container mx-auto px-[15px] md:px-0 py-3 md:text-right">
          <div className="flex md:flex-row flex-col-reverse ">
            <div className="w-full md:w-1/2 md:px-5 md:pt-5 md:pb-[23px] py-3  wow fadeInLeft">
              <div className="relative h-full min-h-full a flex flex-col justify-center false undefined ">
                <div className="flex flex-col w-full">
                  <h4 className="md:mb-[28px] mb-2 font-medium text-gold text-lg md:text-[31px] md:leading-[31px]">
                    Building a satisfying career
                  </h4>
                </div>
                <div>
                  <div className="mb-4 md:mb-7 text-gold two-col-content-left text-sm md:text-base">
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
            <div className="md:px-5 md:w-1/2 w-full">
              <div className="bg-center bg-cover sm:min-h-[300px] min-h-[160px] w-full border-gold border-2 wow fadeInRight rounded-tr-[60px] md:rounded-tr-[100px] bg-[url('https://cms.linklogistics.com/wp-content/uploads/2021/07/Order-number-2070570404-scaled.jpg')]"></div>
            </div>
          </div>
        </div>
        <div className="md:container mx-auto px-[15px] md:px-0 py-3 md:text-left">
          <div className="flex md:flex-row-reverse flex-col-reverse ">
            <div className="w-full md:w-1/2 md:px-5 md:pt-5 md:pb-[23px] py-3  wow fadeInRight">
              <div className="relative h-full min-h-full a flex flex-col justify-center false undefined ">
                <div className="flex flex-col w-full">
                  <h4 className="md:mb-[28px] mb-2 font-medium text-gold text-lg md:text-[31px] md:leading-[31px]">
                    We design and build warehouses that allow our customers to
                    evolve
                  </h4>
                </div>
                <div>
                  <div className="mb-4 md:mb-7 text-gold text-sm md:text-base">
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
            <div className="md:px-5 md:w-1/2 w-full">
              <div className="bg-center bg-cover sm:min-h-[300px] min-h-[160px] w-full border-gold border-2 wow fadeInLeft rounded-tl-[60px] md:rounded-tl-[100px] bg-[url('https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-1216505422-scaled.jpg')]"></div>
            </div>
          </div>
        </div>
        <div className="md:container mx-auto px-[15px] md:px-0 py-3 md:text-right">
          <div className="flex md:flex-row flex-col-reverse ">
            <div className="w-full md:w-1/2 md:px-5 md:pt-5 md:pb-[23px] py-3  wow fadeInLeft">
              <div className="relative h-full min-h-full a flex flex-col justify-center false undefined ">
                <div className="flex flex-col w-full">
                  <h4 className="md:mb-[28px] mb-2 font-medium text-gold text-lg md:text-[31px] md:leading-[31px]">
                    From the ground up: a holistic approach to ESG
                  </h4>
                </div>
                <div>
                  <div className="mb-4  md:mb-7 text-gold two-col-content-left text-sm md:text-base">
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
            <div className="md:px-5 md:w-1/2 w-full">
              <div className="bg-center bg-cover sm:min-h-[300px] min-h-[160px] w-full border-gold border-2 wow fadeInRight rounded-br-[60px] md:rounded-br-[100px] bg-[url('https://cms.linklogistics.com/wp-content/uploads/2021/07/365-north-ave-carol-stream-5-scaled.jpeg')]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
