import GridCard from "./grid-card";

const CardsGrid = () => {
  return (
    <div className="md:container md:mx-auto px-[15px] my-14">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px]">
        <GridCard />
        <GridCard />
        <GridCard />
      </div>
    </div>
  );
};
export default CardsGrid;
