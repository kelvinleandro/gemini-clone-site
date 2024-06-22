"use client"

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
    </main>
  );
}
