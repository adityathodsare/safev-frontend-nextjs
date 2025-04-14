"use client";
import React from "react";

import { TeamMates } from "../../../components/TeamMates";
import { WavyBackground } from "@/components/ui/wavy-background";

function Page() {
  return (
    <div>
      <div className="h-full rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <div className="flex flex-col items-center justify-center h-full  ">
          <div>
            <WavyBackground>
              <TeamMates />
            </WavyBackground>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
