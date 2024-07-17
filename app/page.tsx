import Image from "next/image";
import Skyline from '@/images/slr-skyline.jpg'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PlusIcon, StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section/section";

export default function Home() {
  return (
    <main className="min-h-screen pb-24">
      <section className="flex flex-col gap-2 relative">
        <div className="w-full object-fill">
          <Image
            src={Skyline}
            alt="Bangalore Skyline"
            className="object-cover max-h-[600px] object-center"
          />
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Photo by{" "}
          <a
            className="underline"
            href="https://unsplash.com/@sprakashk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Satyaprakash Kumawat
          </a>{" "}
          on{" "}
          <a
            className="underline"
            href="https://unsplash.com/photos/aerial-view-of-city-buildings-during-night-time-ky1d-IWCBis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </p>
        <div className="absolute flex flex-col items-center justify-center w-full h-full p-4">
          <h1 className="text-3xl md:text-8xl font-bold text-slate-50">
            Bangalore Wiki
          </h1>
          <p className="text-md md:text-2xl font-semibold text-slate-50 mt-4 text-center">
            A place for lost soulds to find something :)
          </p>
        </div>
      </section>
      <Section />
      <Section />
      <Button
        size="icon"
        className="h-16 w-16 rounded-full fixed bottom-8 right-8"
      >
        <PlusIcon className="h-8 w-8" />
      </Button>
    </main>
  );
}