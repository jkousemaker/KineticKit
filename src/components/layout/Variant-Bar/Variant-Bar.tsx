import Link from "next/link";

const VariantBar = ({
  searchParams,
  variants,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  variants: { id: number; title: string }[];
}) => {
  const activeVariant = searchParams.variant;
  console.log(activeVariant);
  return (
    
  );
};

export { VariantBar };
