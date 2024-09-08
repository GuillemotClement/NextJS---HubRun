import SideMenu from "@/app/tools/_components/SideMenu";

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <SideMenu />
      <div className="flex-auto">{children}</div>
    </section>
  );
}
