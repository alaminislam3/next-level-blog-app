import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LayoutPage({
  children,
  marketingSlot,
  salesSlot
}: {
  children: React.ReactNode;
  marketingSlot : React.ReactNode,
  salesSlot: React.ReactNode
}) {
  return (
    <div className="">
      

      
      <div className="flex gap-2 ">
        <Button>
          <Link href="/development">Development</Link>
        </Button>
        <Button>
          <Link href="/marketing">Marketing</Link>
        </Button>
        <Button>
          <Link href="/marketing/setting">setting</Link>
        </Button>
        <Button>
          <Link href="/sales">sales</Link>
        </Button>
      </div>
       <div className="flex gap-2">
           {marketingSlot}
           {salesSlot}
       </div>
      <div>{children}</div>
    </div>
  );
}
