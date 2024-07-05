import ChatInput from "@/components/ChatInput";
import GettingStartedCards from "@/components/GettingStartedCards";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FilePlus2Icon, PlusCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="top-5 right-5 absolute">
        <ModeToggle />
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="top-5 left-5 absolute"
            >
              <FilePlus2Icon size={20} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>New Chat</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <GettingStartedCards />
      <ChatInput />
    </main>
  );
}
