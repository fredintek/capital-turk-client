import Download from "@/components/downloadSection/Download";
import Features from "@/components/features/Features";
import Fun from "@/components/fun/Fun";
import Showcase from "@/components/showcase/Showcase";
import Today from "@/components/today/Today";

export default function Home() {
  return (
    <>
      {/* Features */}
      <Features />

      {/* Today */}
      <Today />

      {/* Showcase */}
      <Showcase />

      {/* Fun */}
      <Fun />

      {/* Downloads */}
      <Download />
    </>
  );
}
