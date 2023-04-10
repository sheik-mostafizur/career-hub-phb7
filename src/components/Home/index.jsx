import Header from "./Header";
import Category from "./Category";
import Featured from "./Featured";

const Home = () => {
  return (
    <div>
      <div className="pt-8 bg-blue-50">
        <Header />
      </div>
      <Category></Category>
      <Featured></Featured>
    </div>
  );
};

export default Home;
