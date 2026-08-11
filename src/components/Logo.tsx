type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  invert?: boolean;
};

export function Logo({ className = "", showWordmark = true, invert = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/assets/logo.png"
        alt="EasyWays Credit Limited"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
      />
      {showWordmark && (
        <div className="leading-tight">
          <div
            className={`text-[15px] font-semibold tracking-tight ${invert ? "text-white" : "text-navy"}`}
          >
            EasyWays<span className="text-gold"> Credit</span>
          </div>
          <div
            className={`text-[10px] uppercase tracking-[0.18em] ${invert ? "text-white/60" : "text-slate"}`}
          >
            CBK Licensed · DCP
          </div>
        </div>
      )}
    </div>
  );
}
