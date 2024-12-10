import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"; // Use alias or relative path
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Button>Button</Button>
      <UserButton />

      <div className="">
        
      </div>
    </div>
  );
}