import GridCard from "./grid-card";

const CardsGrid = () => {
  return (
    <div className="my-14 px-[15px] md:container md:mx-auto">
      <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3">
        <GridCard />
        <GridCard />
        <GridCard />
      </div>
    </div>
  );
};
export default CardsGrid;
