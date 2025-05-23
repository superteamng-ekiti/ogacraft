"use client";

import { Badge } from "@/components/ui/badge";
import { useUser } from "@/context/user.context";
import { AddSkill } from "./add-skill";
import { cn } from "@/lib/utils";
import { UpdateSkill } from "./update-skill";

export const Skill = () => {
  const { user } = useUser();

  return (
    <div className="w-full flex flex-col gap-2">
      <div className={cn("flex items-center justify-start", user?.categories?.length && "justify-between")}>
        <h3 className="text-xl font-semibold">Skill</h3>

        {user?.categories?.length ? (
          <UpdateSkill />
        ) : null}
      </div>

      {user?.categories?.length ? (
        <div className="flex flex-wrap gap-2">
          {user?.categories?.map((category) => (
            <Badge className="capitalize" key={category}>{category}</Badge>
          ))}
        </div>
      ) : null}

      {!user?.categories?.length ? (
        <div className="w-full py-4 flex flex-col gap-2 items-center bg-gray-50 rounded-lg">
          <h4 className="text-xl font-semibold text-center">Build your profile with skills</h4>
          <p className="text-sm text-center">Add your expertise so people know what you&apos;re all about.</p>

          <AddSkill />
        </div>
      ) : null}
    </div>
  );
};
