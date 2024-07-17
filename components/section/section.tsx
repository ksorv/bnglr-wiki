import { CaretSortIcon, StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { Record } from "@/types/airtable";
import { FC } from "react";
import Image from "next/image";
import { Rating } from "../rating/rating";
import Link from "next/link";

interface SectionProps {
  record: Record;
}

export const Section: FC<SectionProps> = ({ record }) => {
  const [title, records] = record;
  return (
    <Collapsible defaultOpen>
      <section className="mt-8 md:mt-16 max-w-[120ch] px-6 mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-2xl font-bold">{title}</h2>
          <CollapsibleTrigger asChild>
            <CaretSortIcon
              className={cn(
                "p-1 h-8 w-8 cursor-pointer border border-muted-foreground text-muted-foreground transition-all rounded-full"
              )}
            />
          </CollapsibleTrigger>
        </div>
        {/* <p className="text-md md:text-lg text-foreground mt-1 md:mt-2">
          Bangalore has badass food joints in almost every corner, Scroll to the
          side to check them
        </p> */}
        <CollapsibleContent>
          <ScrollArea className="w-full mt-2 md:mt-6 pb-4">
            <div className="flex w-max space-x-4 py-4 gap-6">
              {records.map((record) => (
                <Link target="_blank" key={record.id} href={record.link}>
                  <div className="rounded-lg border bg-card p-4 shadow-sm w-[320px]">
                    <Image
                      src={record.image}
                      alt={record.name}
                      width={400}
                      height={300}
                      className="mb-4 h-48 w-full rounded-lg object-cover"
                    />
                    <Rating rating={record.rating} />
                    <h3 className="text-lg font-semibold">{record.name}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {record.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      {/* <FlowerIcon className="h-5 w-5 text-muted" /> */}
                      <span className="text-sm text-muted-foreground">
                        {record.summary}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CollapsibleContent>
      </section>
    </Collapsible>
  );
};
