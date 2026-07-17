export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-accent">
      <span aria-hidden="true" className="h-0.5 w-6 bg-accent" />
      {children}
    </p>
  );
}
