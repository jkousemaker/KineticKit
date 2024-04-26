import getBase64 from "@/lib/getLocalBase64";
import { Employee } from "./Employee";

const EmployeeAvatars = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}): React.ReactElement | null => {
  return (
    <div className="flex flex-row items-center justify-center mb-10">
      {items.map((item) => (
        <Party key={item.id} item={item} />
      ))}
    </div>
  );
};

const Party = async ({
  item,
}: {
  item: {
    id: number;
    name: string;
    designation: string;
    image: string;
  };
}) => {
  const myBlurDataUrl = await getBase64(item.image);

  return <Employee item={item} blurDataUrl={myBlurDataUrl || ""} />;
};

export { EmployeeAvatars };
