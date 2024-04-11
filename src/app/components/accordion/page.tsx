import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/creative-components/Accordion";
import { PageHeader } from "@/components/elements/Page-Header";
import { Tabs } from "@/components/elements/Tabs";

export default function AccordionPage() {
  const codeString = ` import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/creative-components/Accordion";

  export function AccordionDemo() {
    <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        <p>Yes. It's built with accessibility in mind.</p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        <p>
          Yes. It comes with default styles that matches the other
          components' aesthetic.
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        <p>
          Yes. It's animated by default, but you can disable it if you
          prefer.
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
    }`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Accordion" />
      <Tabs codeString={codeString}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              <p>Yes. It's built with accessibility in mind.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes. It comes with default styles that matches the other
                components' aesthetic.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Tabs>
    </main>
  );
}
