import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export default function LiquidMetalButtonDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-12 bg-neutral-950 min-h-screen text-white">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Liquid Metal Buttons</h1>
      <div className="flex items-center gap-8">
        <LiquidMetalButton label="Get Started" onClick={() => console.log('Get Started Clicked')} />
        <LiquidMetalButton viewMode="icon" onClick={() => console.log('Icon Clicked')} />
      </div>
      <p className="text-neutral-500 text-sm mt-8">
        Interactive shaders powered by @paper-design/shaders
      </p>
    </div>
  );
}
