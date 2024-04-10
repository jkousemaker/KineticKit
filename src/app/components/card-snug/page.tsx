import Card from "@/components/Cards/card-snug";
import selfie from "@public/selfie.jpg";

export default function CardSnug() {
  return (
    <main>
      <Card
        imgSrc={selfie}
        title="In conversation"
        description="Description of card"
        href="#"
      />
    </main>
  );
}
