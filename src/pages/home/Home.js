import Featured from "./featured/Featured";
import FeaturedProperties from "./featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "./propertyList/PropertyList";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className={styles.homeContainer}>
        <Featured />
        <h1 className={styles.homeTitle}>Browse by property type</h1>
        <PropertyList />
        <h1 className={styles.homeTitle}>Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
