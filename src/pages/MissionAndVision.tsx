import MissionAndVisionCard from "../components/MissionAndVisionCard";

const MissionAndVision = () => {
  const labels = [
    {
      title: "Mission",
      description:
        "Our mission at Colegio de San Gabriel is to provide a comprehensive and innovative web-based platform, GAPS, that allows our professors to assess and enhance their teaching capabilities through targeted assessments. By facilitating these evaluations, we ensure our educators are well-equipped to deliver exceptional education and earn certification for their proficiency in specific program courses.",
    },
    {
      title: "Vision",
      description:
        "Our vision is to establish GAPS at Colegio de San Gabriel as a beacon of educational excellence where continuous professional development is seamlessly integrated into our academic framework. We aspire to create an environment where our educators are perpetually empowered to excel in their teaching roles, thereby fostering a culture of excellence and lifelong learning.",
    },
  ];

  return (
    <div className="h-[80vh] max-w-[1600px] m-auto flex flex-col items-center justify-center gap-y-10">
      <div className="flex flex-col max-w-[700px] text-center gap-y-5">
        <h4>GAPS' Mission and Vision</h4>
        <span>
          Here, we describe our dedication to offering an excellent learning
          environment that is intended to improve the skills of our
          distinguished instructors. Our goal is to enable teachers by providing
          them with thorough evaluations that guarantee they are equipped to
          provide outstanding instruction and obtain certificates for their
          mastery of particular program courses. Our goal is to cultivate a
          culture of excellence and lifetime learning by smoothly incorporating
          ongoing professional development into our academic framework.
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
