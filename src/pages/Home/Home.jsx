import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Feacture from "./Feacture/Feacture";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Feacture />
      <Testimonial />
    </div>
  );
};

export default Home;
