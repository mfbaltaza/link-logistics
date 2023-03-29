import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [regions] = useState([
    {
      name: "East Region",
      link: "https://www.linklogistics.com/region/east-region/",
    },
    {
      name: "Central Region",
      link: "https://www.linklogistics.com/region/central-region/",
    },
    {
      name: "West Region",
      link: "https://www.linklogistics.com/region/west-region/",
    },
  ]);

  return (
    <footer className="wow fadeInUp bg-slate pt-4  pb-2 md:pt-[60px]">
      <div className="mx-auto px-[15px] md:container">
        <div className="grid space-y-6 sm:grid-cols-2 md:gap-14 md:space-y-0 lg:grid-cols-5">
          <div className="col-span-2">
            <div className="wow fadeInUp flex flex-col items-start justify-between md:flex-row md:items-center">
              <Link className="flex " href="/">
                <Image
                  width={190}
                  height={50}
                  className="max-w-[130px] md:max-w-none"
                  alt="Link"
                  src="https://www.linklogistics.com/images/link-logo-gold.svg"
                />
              </Link>
              <div className="mt-5 flex items-center space-x-3 sm:hidden">
                <a
                  className="hover:opacity-70"
                  target="_blank"
                  href="https://www.linkedin.com/company/linklogistics/"
                >
                  <Image
                    width={20}
                    height={20}
                    src="https://www.linklogistics.com/images/linkedin-gold.svg"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  className="hover:opacity-70"
                  target="_blank"
                  href="https://www.facebook.com/Link-Logistics-Real-Estate-193091432290835"
                >
                  <Image
                    width={20}
                    height={20}
                    src="https://www.linklogistics.com/images/facebook-gold.svg"
                    alt="Facebook"
                  />
                </a>
                <a
                  className="hover:opacity-70"
                  target="_blank"
                  href="https://www.instagram.com/linklogisticsre/"
                >
                  <Image
                    width={20}
                    height={20}
                    src="https://www.linklogistics.com/images/instagram-gold.svg"
                    alt="Instagram"
                  />
                </a>
                <a
                  className="hover:opacity-70"
                  target="_blank"
                  href="https://twitter.com/LinkLogisticsRE"
                >
                  <Image
                    width={20}
                    height={20}
                    src="https://www.linklogistics.com/images/twitter-gold.svg"
                    alt="Twitter"
                  />
                </a>
                <a
                  className="hover:opacity-70"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCgFPpo6PcNn56HJe85lBeHA"
                >
                  <Image
                    width={20}
                    height={20}
                    src="https://www.linklogistics.com/images/youtube-gold.svg"
                    alt="YouTube"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="wow fadeInUp space-y-6 md:space-y-14">
            <div className="">
              <a className="" href="https://www.linklogistics.com/portfolio/">
                <h5 className="mb-2.5 text-[10px] font-medium uppercase leading-[21px] tracking-[3px] text-gold md:text-xs">
                  Portfolio
                </h5>
              </a>
              <div className="flex flex-col">
                {regions.map((region) => (
                  <a
                    key={region.name}
                    className="mb-2 inline-block text-xs text-gold hover:text-cement md:text-sm"
                    href={region.link}
                  >
                    {region.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="">
              <a
                className=""
                href="https://www.linklogistics.com/capabilities/"
              >
                <h5 className="mb-2.5 text-[10px] font-medium uppercase leading-[21px] tracking-[3px] text-gold md:text-xs">
                  Capabilities
                </h5>
              </a>
              <div className="flex flex-col">
                <a
                  className=" mb-2 inline-block text-xs text-gold hover:text-cement md:text-sm"
                  href="https://www.linklogistics.com/customer-support/"
                >
                  Customer Support
                </a>
                <a
                  className=" mb-2 inline-block text-xs text-gold hover:text-cement md:text-sm"
                  href="https://www.linklogistics.com/custom-property-development/"
                >
                  Custom Property Development
                </a>
              </div>
            </div>
          </div>
          <div className="wow fadeInUp space-y-6 md:space-y-14">
            <div className="">
              <a className="" href="https://www.linklogistics.com/about/">
                <h5 className="mb-2.5 text-[10px] font-medium uppercase leading-[21px] tracking-[3px] text-gold md:text-xs">
                  About
                </h5>
              </a>
              <div className="flex flex-col">
                <a
                  className=" mb-2 inline-block text-xs text-gold hover:text-cement md:text-sm"
                  href="https://www.linklogistics.com/leadership/"
                >
                  Leadership
                </a>
                <a
                  className=" mb-2 inline-block text-xs text-gold hover:text-cement md:text-sm"
                  href="https://www.linklogistics.com/news"
                >
                  News
                </a>
                <a
                  className=" mb-2 inline-block text-xs text-gold hover:text-cement md:text-sm"
                  href="https://www.linklogistics.com/esg/"
                >
                  ESG
                </a>
                <a
                  className=" mb-2 inline-block text-xs text-gold hover:text-cement md:text-sm"
                  href="https://www.linklogistics.com/esg-2021-report/"
                >
                  2021 ESG Report
                </a>
                <a
                  className=" mb-2 inline-block text-xs text-gold hover:text-cement md:text-sm"
                  href="https://www.linklogistics.com/community-link/"
                >
                  Community Link
                </a>
              </div>
            </div>
            <div className="">
              <a className="" href="https://www.linklogistics.com/careers/">
                <h5 className="uppercasegold mb-2.5 text-[10px] font-medium uppercase leading-[21px] tracking-[3px] text-gold md:text-xs">
                  Careers
                </h5>
              </a>
              <div className="flex flex-col">
                <a
                  className="mb-2 inline-block text-xs text-gold hover:text-cement md:text-sm"
                  href="https://www.linklogistics.com/job-openings/"
                >
                  Job Openings
                </a>
                <a
                  className="mb-2 inline-block text-xs text-gold hover:text-cement md:text-sm"
                  href="https://www.linklogistics.com/internship/"
                >
                  Internship
                </a>
              </div>
            </div>
          </div>
          <div className="wow fadeInUp space-y-6 md:space-y-14">
            <div className="">
              <a
                className=""
                target="_blank"
                href="https://www.securecafe3.com/tenantportal/userlogin.aspx?CompanyID=1180"
              >
                <h5 className="mb-2.5 text-[10px] font-medium uppercase leading-[21px] tracking-[3px] text-gold md:text-xs">
                  Customer Login
                </h5>
              </a>
            </div>
            <div className="">
              <a
                className=""
                href="https://www.linklogistics.com/broker-marketing/"
              >
                <h5 className="mb-2.5 text-[10px] font-medium uppercase leading-[21px] tracking-[3px] text-gold md:text-xs">
                  Broker Marketing
                </h5>
              </a>
            </div>
            <div className="">
              <a className="" href="https://www.linklogistics.com/contact/">
                <h5 className="mb-2.5 text-[10px] font-medium uppercase leading-[21px] tracking-[3px] text-gold md:text-xs">
                  Contact
                </h5>
              </a>
            </div>
          </div>
          <div className="wow fadeInUp space-y-6 md:space-y-14"></div>
        </div>
        <div className="mt-6 border-b border-gold sm:pb-5">
          <div className="hidden items-center space-x-8 sm:flex">
            <a
              className="hover:opacity-70"
              target="_blank"
              href="https://www.linkedin.com/company/linklogistics/"
            >
              <Image
                src="https://www.linklogistics.com/images/linkedin-gold.svg"
                alt="LinkedIn"
                height={20}
                width={20}
              />
            </a>
            <a
              className="hover:opacity-70"
              target="_blank"
              href="https://www.facebook.com/Link-Logistics-Real-Estate-193091432290835"
            >
              <Image
                src="https://www.linklogistics.com/images/facebook-gold.svg"
                alt="Facebook"
                height={20}
                width={20}
              />
            </a>
            <a
              className="hover:opacity-70"
              target="_blank"
              href="https://www.instagram.com/linklogisticsre/"
            >
              <Image
                src="https://www.linklogistics.com/images/instagram-gold.svg"
                alt="Instagram"
                height={20}
                width={20}
              />
            </a>
            <a
              className="hover:opacity-70"
              target="_blank"
              href="https://twitter.com/LinkLogisticsRE"
            >
              <Image
                src="https://www.linklogistics.com/images/twitter-gold.svg"
                alt="Twitter"
                height={20}
                width={20}
              />
            </a>
            <a
              className="hover:opacity-70"
              target="_blank"
              href="https://www.youtube.com/channel/UCgFPpo6PcNn56HJe85lBeHA"
            >
              <Image
                src="https://www.linklogistics.com/images/youtube-gold.svg"
                alt="youtube"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
        <div className="py-4">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-14">
              <a
                className="inline-block text-gold hover:text-cement"
                href="/privacy-policy/"
              >
                Privacy Policy
              </a>
              <a
                className="inline-block text-gold hover:text-cement"
                href="/cookie-policy/"
              >
                Cookie Policy
              </a>
            </div>
            <div className="text-gold">© 2023 Link</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
