import classes from "./SinglePage.module.css";
import backgroundImage from "../assets/images/singlebook.jpg";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageBackCover from "../components/layout/PageBackCover";
import Pillar from "../components/UI/Pillar";
import SinglePost from "../components/SinglePost";

export default function SinglePage() {
  const description =
    "Congratulations on your excellent choice of literature! Whether you're about to embark on a thrilling adventure, delve into the depths of knowledge, or explore the intricacies of a captivating story, I wish you an enriching and enjoyable reading experience.";
  return (
    <div>
      <Header />
      <PageBackCover
        title={"Single Lecture"}
        backgroundImage={backgroundImage}
        description={description}
      />
      <div className={classes.singleBook}>
        <Pillar />
        <SinglePost />
        <Pillar />
      </div>
      <Footer />
    </div>
  );
}
