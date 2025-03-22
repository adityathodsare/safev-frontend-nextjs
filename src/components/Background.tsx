
import { BackgroundLines } from "@/components/ui/background-lines";



function Background() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            SAFE-V
            <div className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-4xl font-sans py-0.5 md:py-10 relative z-20 font-semibold tracking-tight">
            Smart Accedent & Fire Emergency for Vehicles
          </div>
          </h2>
          
        </BackgroundLines>
      );
}

export default Background;

