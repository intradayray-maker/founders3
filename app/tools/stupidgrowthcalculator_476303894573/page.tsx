import StupidGrowthCalculator from "@/app/components/tools/StupidGrowthCalculator";
import StupidYoutubeCalculator from "@/app/components/tools/StupidYoutubeCalculator";


export default function Page() {
  return (
    <div className="gt-calc p-6 space-y-12">

      {/* First Calculator */}
      <div className="gt-calc p-6 rounded-xl border border-slate-700/40 bg-[#05070b]">
        <StupidGrowthCalculator />
      </div>

      {/* Second Calculator */}
      <div className="gt-calc p-6 rounded-xl border border-slate-700/40 bg-[#05070b]">
        <StupidYoutubeCalculator />
      </div>

    </div>
  );
}
