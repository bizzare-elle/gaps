import { Card } from "./ui/card";

interface Props {
  image: string;
  name: string;
}

const TeamMemberCard = ({ image, name }: Props): JSX.Element => {
  return (
    <Card className="flex flex-col items-center w-[250px] justify-center p-5">
      <div>
        <img className=" h-[250px] rounded-full" src={image} alt={name} />
      </div>
      <span className="text-primary">{name}</span>
    </Card>
  );
};

export default TeamMemberCard;
