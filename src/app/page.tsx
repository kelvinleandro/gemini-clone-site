"use client"

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);
  const toggleSidebar = () => setSidebarOpened(prev => !prev);

  return (
    <main className="flex min-h-screen">
      <Sidebar open={sidebarOpened} onClose={toggleSidebar} />

      <section className="flex flex-col w-full">
        <Header onMenuClick={openSidebar} />
      </section>
    </main>
  );
}
