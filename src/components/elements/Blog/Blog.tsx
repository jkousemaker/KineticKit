import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const Blog = ({ children }: { children: React.ReactNode }) => {
  return <div className="">{children}</div>;
};

const BlogHeader = ({
  title,
  classNames,
}: {
  title: string;
  classNames?: string;
}) => {
  return (
    <h2
      className={cn(
        "font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-black",
        classNames
      )}
    >
      {title}
    </h2>
  );
};

const BlogSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
      {children}
    </div>
  );
};

const BlogSubHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="font-heading relative mt-8 scroll-m-20 text-xl font-normal  tracking-tight text-black">
      <span className="absolute block -left-8 rounded-tr-full rounded-br-full top-0 z-20 h-full bg-neutral-200  w-[6px]"></span>
      {children}
    </h3>
  );
};

const BlogParagraph = ({ text }: { text: string }) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-[#71717a] dark:text-white">
      {text}
    </p>
  );
};

const BlogHighlight = ({ codeString }: { codeString: string }) => {
  return (
    <div className="relative my-6 mt-1 overflow-hidden rounded-md">
      <SyntaxHighlighter
        wrapLongLines={true}
        language="typescript"
        style={docco}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

interface BlogPropTableProps {
  prop: string;
  type: string;
  description: string;
}

const BlogPropTable = ({ props }: { props: Array<BlogPropTableProps> }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Prop</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.map((prop) => (
          <TableRow key={prop.prop}>
            <TableCell>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm dark:text-neutral-200">
                {prop.prop}
              </code>
            </TableCell>
            <TableCell>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm dark:text-neutral-200">
                {prop.type}
              </code>
            </TableCell>
            <TableCell>{prop.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export {
  Blog,
  BlogHeader,
  BlogSection,
  BlogSubHeader,
  BlogParagraph,
  BlogHighlight,
  BlogPropTable,
};
