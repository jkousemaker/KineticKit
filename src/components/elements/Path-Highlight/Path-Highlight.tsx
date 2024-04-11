import { cn } from "@/lib/utils";

function PathHighlight({
  path,
  classNames,
}: {
  path: string;
  classNames?: string;
}) {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-1 text-[#71717a] dark:text-white",
        classNames
      )}
    >
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm">
        {path}
      </code>
    </p>
  );
}

export { PathHighlight };
