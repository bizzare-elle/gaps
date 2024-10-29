import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

type Props = {
  title: string;
  description: string;
};

const MissionAndVisionCard = ({ title, description }: Props) => {
  return (
    <Card className="bg-primary w-[600px] h-[250px] text-white text-center">
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
};

export default MissionAndVisionCard;
