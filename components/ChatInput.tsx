import React from "react";
import { Input } from "./ui/input";
import { ArrowUpCircle } from "lucide-react";

function ChatInput() {
  return (
    <div className="mx-5 w-full">
      <div className="absolute bottom-5 w-[93%] md:w-[700px] left-1/2 -translate-x-1/2 rounded-full flex items-center border px-3 bg-accent">
        <Input
          type="text"
          className="rounded-full border-none focus:outline-none ring-0 bg-accent"
          placeholder="Message AI"
        />
        <ArrowUpCircle className="cursor-pointer" />
      </div>
    </div>
  );
}

export default ChatInput;
