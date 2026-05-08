export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-float-orb absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[oklch(0.65_0.25_295/0.4)] blur-[120px]" />
      <div className="animate-float-orb absolute top-1/2 -right-32 h-[600px] w-[600px] rounded-full bg-[oklch(0.78_0.18_200/0.3)] blur-[140px]" style={{ animationDelay: "-6s" }} />
      <div className="animate-float-orb absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-[oklch(0.72_0.22_350/0.3)] blur-[120px]" style={{ animationDelay: "-12s" }} />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
        }}
      />
    </div>
  );
}
