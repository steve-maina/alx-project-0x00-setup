import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="title one" style="rounded-sm" />
      <Button title="title two" style="rounded-md" />
      <Button title="title three" style="rounded-full" />
    </div>
  );
};
export default Landing;
