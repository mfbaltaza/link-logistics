const ConnectionsBanner = () => {
  return (
    <div className="mx-[15px] my-[60px] flex flex-col-reverse rounded-br-[60px] rounded-tl-[60px] border-2 border-gold bg-cement md:flex-row md:rounded-br-[100px] md:rounded-tl-[100px]">
      <div className="w-full px-4 md:w-1/2 md:pl-36 md:pr-16 md:pt-10 md:pb-10">
        <div className="ml-auto max-w-[490px]">
          <h4 className="mt-[10px] mb-2 text-base font-medium md:mt-0 md:mb-7 md:text-[31px]">
            It is all about connections
          </h4>
          <p className="text-sm md:text-base">
            Logistics real estate connects products with the people who need
            them. Link connects businesses with the warehouse spaces they need
            to make it all happen—helping its customers grow all along the way.
          </p>
          <p className="mt-3 text-sm md:text-base">
            <strong>We will get you there.</strong>
            <br />
            Link owns the largest portfolio of U.S.-only industrial real estate.
            Our scale is expansive, our technology is leading-edge and our
            people are talented contributors who bring a passion for what we do.
          </p>
        </div>
      </div>
      <div
        className="min-h-[160px] w-full rounded-tl-[60px] border-gold bg-[url('https://cms.linklogistics.com/wp-content/uploads/2021/07/GettyImages-1272641181-scaled.jpg')]  bg-cover bg-center sm:min-h-[350px] md:w-1/2 md:rounded-tl-none md:rounded-br-[100px]
      md:border-l-2"
      ></div>
    </div>
  );
};
export default ConnectionsBanner;
