import {
  CaretSortIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Section = () => {
  return (
    <Collapsible defaultOpen>
      <section className="mt-8 md:mt-16 max-w-[120ch] px-6 mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-2xl font-bold">Nature</h2>
          <CollapsibleTrigger asChild>
            <CaretSortIcon
              className={cn(
                "p-1 h-8 w-8 cursor-pointer border border-muted-foreground text-muted-foreground transition-all rounded-full"
              )}
            />
          </CollapsibleTrigger>
        </div>
        <p className="text-md md:text-lg text-foreground mt-1 md:mt-2">
          Bangalore has badass food joints in almost every corner, Scroll to the
          side to check them
        </p>
        <CollapsibleContent>
          <ScrollArea className="w-full mt-2 md:mt-6 pb-4">
            <div className="flex w-max space-x-4 py-4 gap-6">
              <div className="rounded-lg border bg-card p-4 shadow-sm w-[320px]">
                <img
                  src="/placeholder.svg"
                  alt="Botanical Garden"
                  width={400}
                  height={300}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <div className="flex items-center justify-start gap-1 my-2">
                  <StarFilledIcon className="text-yellow-300" />
                  <StarFilledIcon className="text-yellow-300" />
                  <StarFilledIcon className="text-yellow-300" />
                  <StarIcon />
                  <StarIcon />
                </div>
                <h3 className="text-lg font-semibold">Botanical Garden</h3>
                <p className="mt-2 text-muted-foreground">
                  Stroll through lush gardens filled with vibrant flora and
                  serene ponds.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {/* <FlowerIcon className="h-5 w-5 text-muted" /> */}
                  <span className="text-sm text-muted-foreground">
                    Over 5,000 plant species
                  </span>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4 shadow-sm w-[320px]">
                <img
                  src="/placeholder.svg"
                  alt="City Park"
                  width={400}
                  height={300}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">City Park</h3>
                <p className="mt-2 text-muted-foreground">
                  Escape the hustle and bustle in this serene urban oasis.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {/* <TreesIcon className="h-5 w-5 text-muted" /> */}
                  <span className="text-sm text-muted-foreground">
                    Lush walking trails and playgrounds
                  </span>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4 shadow-sm w-[320px]">
                <img
                  src="/placeholder.svg"
                  alt="Riverside Promenade"
                  width={400}
                  height={300}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">Riverside Promenade</h3>
                <p className="mt-2 text-muted-foreground">
                  Stroll along the riverfront and take in the stunning views.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {/* <RibbonIcon className="h-5 w-5 text-muted" /> */}
                  <span className="text-sm text-muted-foreground">
                    Scenic walking and biking paths
                  </span>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4 shadow-sm w-[320px]">
                <img
                  src="/placeholder.svg"
                  alt="Riverside Promenade"
                  width={400}
                  height={300}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">Riverside Promenade</h3>
                <p className="mt-2 text-muted-foreground">
                  Stroll along the riverfront and take in the stunning views.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {/* <RibbonIcon className="h-5 w-5 text-muted" /> */}
                  <span className="text-sm text-muted-foreground">
                    Scenic walking and biking paths
                  </span>
                </div>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CollapsibleContent>
      </section>
    </Collapsible>
  );
};
