import { ModeToggle } from "@/components/mode-toggle";
import Sidebar from "@/components/shared/sidebar";

const Dashboard = () => {
  return (
    <main className="grid grid-cols-[250px_1fr] h-screen">
      <Sidebar />
      <section>
        <header>nav</header>
        <ModeToggle />
        This is dashboard layout
      </section>
    </main>
  );
};

export default Dashboard;
