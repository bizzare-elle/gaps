import avatar1 from "./../images/avatar1.png";
import avatar4 from "./../images/avatar4.png";
import avatar5 from "./../images/avatar5.png";
import TeamMemberCard from "../components/TeamMemberCard";

const MyTeam = (): JSX.Element => {
  const cardLabels = [
    {
      image: avatar4,
      name: "Cyrel Villanueva",
    },
    {
      image: avatar1,
      name: "Marinelle Ando",
    },
    {
      image: avatar4,
      name: "Ben Joseph Nuñez",
    },
    {
      image: avatar4,
      name: "Cydhen Avena",
    },
    {
      image: avatar1,
      name: "Nicole Alliana Ebajo",
    },
    {
      image: avatar5,
      name: "David Julian Marquez",
    },
    {
      image: avatar4,
      name: "Lyan Gabriel Marquez",
    },
    {
      image: avatar5,
      name: "Ronnie Tabiano",
    },
  ];

  return (
    <div className="max-w-[1600px] h-[100vh] m-auto flex justify-center items-center gap-y-10 flex-col">
      <div className="w-[700px] text-center flex flex-col gap-y-5">
        <h4>Meet My Team</h4>
        <span>
          Here, we introduce you to the talented team behind our innovative
          platform. Our developers have worked tirelessly to create GAPS,
          empowering professors through comprehensive assessments and
          certifications. Get to know the brilliant minds who brought this
          project to life and their commitment to enhancing educational
          excellence
        </span>
      </div>
      <div className="flex flex-wrap gap-5 max-w-[1200px] justify-center">
        {cardLabels.map(({ image, name }) => (
          <div>
            <TeamMemberCard image={image} name={name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
