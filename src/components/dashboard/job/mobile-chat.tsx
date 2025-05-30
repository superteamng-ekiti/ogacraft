import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import React from "react";
import { ChatWrapper } from "./chat/chat-wrapper";
import { MessageSquare } from "lucide-react";

export const MobileChat = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="absolute bottom-20 right-4 w-16 h-16 bg-black rounded-full inline-flex items-center justify-center" variant="outline">
            <MessageSquare size={18} className="stroke-white" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="h-[calc(100vh)]">
            <ChatWrapper />  
        </div>
      </DrawerContent>
    </Drawer>
  );
};
