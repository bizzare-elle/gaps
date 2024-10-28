import CardFeatures from "../components/CardFeatures";

const Features = () => {
  const cardLabels = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis distinctio. Eligendi iure fuga dolor eos itaque sed officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis distinctio. Eligendi iure fuga dolor eos itaque sed officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis distinctio. Eligendi iure fuga dolor eos itaque sed officiis ",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis distinctio. Eligendi iure fuga dolor eos itaque sed officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis distinctio. Eligendi iure fuga dolor eos itaque sed officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis distinctio. Eligendi iure fuga dolor eos itaque sed officiis",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis distinctio. Eligendi iure fuga dolor eos itaque sed officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis distinctio. Eligendi iure fuga dolor eos itaque sed officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis distinctio. Eligendi iure fuga dolor eos itaque sed officiis",
    },
  ];
  return (
    <div
      id="features"
      className="h-[80vh] max-w-[1600px] items-center m-auto justify-center  flex flex-col gap-y-14"
    >
      <div className="flex flex-col items-center max-w-[700px] gap-y-5">
        {/* <div className="bg-primary blur-[300px] absolute rounded-full w-[700px] h-[700px] z-[-100] block"></div> */}

        <h4 className="text-primary font-bold ">Features</h4>
        <span className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          perferendis distinctio. Eligendi iure fuga dolor eos itaque sed
          officiis, dolorum sit voluptate voluptatum earum non vero laudantium,
          praesentium magnam labore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorum qui quod, accusamus ipsam magnam aperiam
          libero voluptatem nobis omnis sit odit? Officia quos vero fuga cumque
          nostrum, labore dolor molestias?
        </span>
      </div>
      <div className="flex gap-x-14">
        {cardLabels.map(({ title, description }) => (
          <CardFeatures title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Features;
