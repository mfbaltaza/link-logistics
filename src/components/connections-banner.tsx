const ConnectionsBanner = () => {
  return (
    <div className="mx-[15px] my-[60px] flex flex-col-reverse md:flex-row border-2 border-gold rounded-br-[60px] rounded-tl-[60px] md:rounded-br-[100px] md:rounded-tl-[100px] bg-cement">
      <div className="md:pl-36 md:pr-16 md:pt-10 md:pb-10 md:w-1/2 w-full px-4">
        <div className="max-w-[490px] ml-auto">
          <h4 className="mt-[10px] md:mt-0 md:mb-7 mb-2 font-medium md:text-[31px] text-base">
            It is all about connections
          </h4>
          <p className="text-sm md:text-base">
            Logistics real estate connects products with the people who need
            them. Link connects businesses with the warehouse spaces they need
            to make it all happen—helping its customers grow all along the way.
          </p>
          <p className="text-sm md:text-base mt-3">
            <strong>We will get you there.</strong>
            <br />
            Link owns the largest portfolio of U.S.-only industrial real estate.
            Our scale is expansive, our technology is leading-edge and our
            people are talented contributors who bring a passion for what we do.
          </p>
        </div>
      </div>
      <div
        className="rounded-tl-[60px] md:rounded-tl-none md:rounded-br-[100px] md:border-l-2 border-gold  bg-center bg-cover sm:min-h-[350px] min-h-[160px] md:w-1/2 w-full
      bg-[url('https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-1272641181-scaled.jpg')]"
      ></div>
    </div>
  );
};
export default ConnectionsBanner;
