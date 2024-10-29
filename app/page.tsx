// pages/index.js
import { LineChart2 } from "@/components/LineChart2";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <Navbar />
      <div className="max-w-7xl w-full grid grid-cols-1 gap-3 mt-24">
        <div className="col-span-1">
          <LineChart2 />
        </div>
      </div>
    </main>
  );
}
