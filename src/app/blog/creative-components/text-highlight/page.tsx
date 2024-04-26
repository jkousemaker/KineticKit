import { Marker } from "@/components/creative-components/highlights/Marker";
import { MarkerEngage } from "@/components/creative-components/highlights/Marker-Engage";

export default function TextHighlightPage() {
  return (
    <main className="bg-black">
      <div className="h-screen"></div>
      <p className="text-5xl max-w-xl text-white/60 leading-relaxed">
        In the midst of the crowd, <Marker once={false}>individual</Marker>{" "}
        judgment is swamped by the overwhelming force of the group's influence.
      </p>
      <p className="text-5xl max-w-xl text-white/60 leading-relaxed">
        In the midst of the crowd,{" "}
        <MarkerEngage once={false}>individual</MarkerEngage> judgment is swamped
        by the overwhelming force of the group's influence.
      </p>
    </main>
  );
}
