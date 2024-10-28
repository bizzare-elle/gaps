import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  title: string;
  description: string;
};

const CardFeatures = ({ title, description }: Props) => {
  return (
    <Card className="max-w-[300px] hover:bg-primary/30">
      <CardHeader>
        <CardTitle className=" text-primary text-xl font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className=" text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CardFeatures;
