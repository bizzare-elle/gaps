import MissionAndVisionCard from "../components/MissionAndVisionCard";

const MissionAndVision = () => {
  const labels = [
    {
      title: "Mission",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iusto quam nobis et dolorem facere animi vitae ipsa. Voluptatem, commodi. Nulla est consequatur cupiditate, repellat sed nobis libero suscipit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iusto quam nobis et dolorem facere animi vitae ipsa. Voluptatem, commodi. Nulla est consequatur cupiditate, repellat sed nobis libero suscipit veniam.",
    },
    {
      title: "Vision",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iusto quam nobis et dolorem facere animi vitae ipsa. Voluptatem, commodi. Nulla est consequatur cupiditate, repellat sed nobis libero suscipit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iusto quam nobis et dolorem facere animi vitae ipsa. Voluptatem, commodi. Nulla est consequatur cupiditate, repellat sed nobis libero suscipit veniam.",
    },
  ];

  return (
    <div className="h-[80vh] max-w-[1600px] m-auto flex flex-col items-center justify-center gap-y-10">
      <div className="flex flex-col max-w-[700px] text-center gap-y-5">
        <h4>School's Mission and Vision</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          quibusdam sed itaque commodi, dolor omnis rem quam veritatis qui
          perferendis. Ea alias tempora fugiat. Laboriosam deserunt velit
          inventore nulla molestiae!
        </span>
      </div>
      <div className="flex items-center gap-x-10">
        {labels.map(({ title, description }) => (
          <div className=" transition-transform duration-150 hover:scale-110">
            <MissionAndVisionCard title={title} description={description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionAndVision;
