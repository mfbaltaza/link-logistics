const GridCard = () => {
  return (
    <div
      className="bg-center bg-cover md:min-h-[350px] md:max-w-[350px] min-h-[290px] max-w[290px] border-2 border-darkGold flex items-end
      bg-[url('https://cms.linklogistics.com/wp-content/uploads/2023/01/2525Kramer_2023_Propertyphoto_br46140-09-2.png')]"
    >
      <div className="bg-slate text-cement text-sm px-4 md:p-[15px] py-[30px] md:min-h-[135px] min-h-[135px]">
        <p className="uppercase leading-[1.2em] font-medium mb-2 tracking-[2px]">
          Link logistics provides q4, FY 2022 RESULTS
        </p>
        <p>
          Demand remains strong and our portfolio is well positioned for growth
        </p>
        <div className="flex flex-col sm:flex-row items-end sm:justify-end">
          <a
            className="mt-5 text-cement border-b-2 uppercase hover:border-white/0 text-[10px] font-bold leading-[10px] tracking-[2px] transition-all"
            href="https://www.linklogistics.com/news/link-logistics-provides-fourth-quarter-and-full-year-2022-results"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default GridCard;
