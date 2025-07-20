import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="title one" styles="rounded-sm" />
      <Button title="title two" styles="rounded-md" />
      <Button title="title three" styles="rounded-lg" />
    </div>
  );
};
export default Landing;
