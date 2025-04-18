import ProdactCard from "./Componits/ProdactCard";
import { productList } from "./Data/Data";

const App = () => {
  const ProdactList = productList.map((prodact) => (
    <ProdactCard key={prodact.id} Prodact={prodact} />
  ));
  return (
    <main className=" container mx-auto ">
      <div className="  border-gray-500 border-2  grid grid-cols-1 md:grid-cols-3 gap-2 lg:grid-cols-4 md:gap-4 px-2 py-2 mx-auto ">
        {ProdactList}
      </div>
    </main>
  );
};

export default App;
