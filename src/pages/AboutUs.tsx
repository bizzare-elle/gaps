import about from "./../images/about.png";
import { Button } from "../components/ui/button";

const AboutUs = () => {
  return (
    <div className="h-[70vh] flex max-w-[1600px] m-auto items-center justify-center gap-x-5">
      <div>
        {" "}
        <img src={about} alt="about photo" />
      </div>
      <div className="flex flex-col max-w-[700px] gap-y-5">
        <h4 className="font-bold text-primary">About Us</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          alias ab maiores iste debitis eveniet qui quaerat minima animi ex
          architecto, optio magnam, numquam in voluptatem mollitia vitae
          delectus fuga. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Libero inventore, assumenda maxime repellat illum ipsum
          repellendus, sapiente consequuntur dolor, sit odio ea eligendi eveniet
          impedit voluptatum voluptatibus architecto voluptatem deleniti. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Tempora quis
          laudantium ex eligendi, dignissimos ratione! Sed architecto sunt cum
          omnis deserunt facilis dolores. Temporibus reiciendis ipsam obcaecati,
          asperiores recusandae dolorum?
        </p>
        <Button className="w-[120px]">
          <a href="#features">See Features</a>
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
