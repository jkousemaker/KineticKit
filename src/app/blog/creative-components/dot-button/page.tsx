import { Tabs } from "@/components/elements/Tabs/Tabs";
import {
  DotButton,
  DotButtonIcon,
} from "@/components/creative-components/buttons/Dot-Button";
import Link from "next/link";
import { CollapsedHighlight } from "@/components/elements/Collapsed-Highlight/Collapsed-Highlight";
import {
  Blog,
  BlogHeader,
  BlogSection,
  BlogSubHeader,
  BlogParagraph,
  BlogHighlight,
  BlogPropTable,
} from "@/components/elements/Blog";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { PathHighlight } from "@/components/elements/Path-Highlight/Path-Highlight";
import { ThickArrowRightIcon } from "@radix-ui/react-icons";

const props = [
  {
    prop: "className",
    type: "String",
    description: "A string of classes for customizing the button.",
  },
  {
    prop: "children",
    type: "React Node",
    description: "Children that can be passed to the component.",
  },
  {
    prop: "href",
    type: "String",
    description:
      "A route as a string to navigate to when the button is clicked.",
  },
  {
    prop: "variant",
    type: "String",
    description: "The variant of the button.",
  },
  { prop: "size", type: "String", description: "The size of the button." },
  {
    prop: "direction",
    type: "String",
    description: "The direction of the arrow icon.",
  },
];

export default function DotButtonPage() {
  const codeString = `import {
    DotButton,
    DotButtonIcon,
  } from "@/components/creative-components/buttons/Dot-Button";
  import { ThickArrowRightIcon } from "@radix-ui/react-icons";
  
  export default function DotButtonPage() {
    return (
      <main className="py-6 lg:py-8">
        <DotButton>
          Test
          <DotButtonIcon className="right-0 absolute z-[9999] mix-blend-difference">
            <ThickArrowRightIcon className="w-7 h-7" />
          </DotButtonIcon>
        </DotButton>
      </main>
    );
  }
  `;
  const importString = `import { DotButton } from "@/components/Creative-Buttons/dot-button";`;
  const renderString = `<DotButton variant="default" size="default">Hover Me</DotButton>`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader
        title="Dot Button"
        description="Button with a dot that animates on hover."
      />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <DotButton>
            Test
            <DotButtonIcon className="right-0 absolute z-[9999] mix-blend-difference">
              <ThickArrowRightIcon className="w-7 h-7" />
            </DotButtonIcon>
          </DotButton>
          <DotButton variant="light">Test</DotButton>
        </Tabs>
        <Blog>
          <BlogHeader title="Installation" />
          <BlogSection>
            <BlogSubHeader>
              Make sure you have read{" "}
              <span className="font-semibold  underline">
                <Link href="/getting-started">Getting Started</Link>
              </span>{" "}
              so you are ready to go!
            </BlogSubHeader>
            <BlogParagraph
              text="This is important because this library works a little bit different
            than what you're used to."
            />
            <BlogSubHeader>Add component to your project</BlogSubHeader>
            <BlogParagraph text="Create a new component in your project." />
            <PathHighlight path="src/components/button.tsx" />
            <BlogParagraph text="Copy the source code here and paste it into the component file:" />
            <CollapsedHighlight codeString={codeString} />
            <BlogSubHeader>Usage</BlogSubHeader>
            <BlogParagraph text="Import the component in any file you want." />
            <BlogHighlight codeString={importString} />
            <BlogHighlight codeString={renderString} />
          </BlogSection>
          <BlogHeader title="Examples" />
          <BlogSection>
            <BlogSubHeader>Variants</BlogSubHeader>
            <BlogSubHeader>Sizes</BlogSubHeader>
          </BlogSection>
          <BlogHeader title="Props" />

          <PathHighlight path="DotButton" classNames="text-black font-bold" />
          <BlogPropTable props={props} />
        </Blog>
      </div>
    </main>
  );
}
