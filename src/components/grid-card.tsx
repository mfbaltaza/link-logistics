const GridCard = () => {
  return (
    <div
      className="max-w[290px] flex min-h-[290px] items-end border-2 border-darkGold bg-[url('https://cms.linklogistics.com/wp-content/uploads/2023/01/2525Kramer_2023_Propertyphoto_br46140-09-2.png')] bg-cover bg-center md:min-h-[350px]
      md:max-w-[350px]"
    >
      <div className="min-h-[135px] bg-slate px-4 py-[30px] text-sm text-cement md:min-h-[135px] md:p-[15px]">
        <p className="mb-2 font-medium uppercase leading-[1.2em] tracking-[2px]">
          Link logistics provides q4, FY 2022 RESULTS
        </p>
        <p>
          Demand remains strong and our portfolio is well positioned for growth
        </p>
        <div className="flex flex-col items-end sm:flex-row sm:justify-end">
          <a
            className="mt-5 border-b-2 text-[10px] font-bold uppercase leading-[10px] tracking-[2px] text-cement transition-all hover:border-white/0"
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
