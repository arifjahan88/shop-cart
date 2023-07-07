import DealsOnFurniture from "../Components/DealsOnFurniture/DealsOnFurniture";
import HotDealsforyou from "../Components/HotDealsforyou/HotDealsforyou";
import SearchedItems from "../Components/SearchedItems/SearchedItems";
import TodaysHotDeals from "../Components/TodaysHotDeals/TodaysHotDeals";

const Home = () => {
  return (
    <>
      <HotDealsforyou />
      <TodaysHotDeals />
      <SearchedItems />
      <DealsOnFurniture />
    </>
  );
};

export default Home;
