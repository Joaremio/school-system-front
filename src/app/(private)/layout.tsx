import { Sidebar } from "@/components/SideBar";
import Container from "@/components/Container";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-background">
        <Container>{children}</Container>
      </main>
    </div>
  );
}
