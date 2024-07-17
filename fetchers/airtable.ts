import "server-only";
import { getAirtable } from "@/lib/airtable";
import { Place } from "@/types/airtable";

export async function getRecords() {
  const airtable = getAirtable();

  if (!process.env.AIRTABLE_BNGLR_BASE) {
    throw new Error("Oppsies, I did something wrong...");
  }

  const bnglr = airtable.base(process.env.AIRTABLE_BNGLR_BASE);

  const table = bnglr("Places").select({
    view: "Main",
    fields: [
      "Name",
      "Notes",
      "Approved",
      "Tags",
      "Link",
      "Rating",
      "Image",
      "Description",
      "Short Summary",
    ],
  });

  const places: Array<Place> = [];

  try {
    const data = await table.all();
    data?.forEach(({ fields, id }) => {
      try {
        places.push({
          id,
          name: fields.Name as Place["name"],
          image: (fields.Image as any[])[0].thumbnails.large.url,
          approved: fields.Approved as Place["approved"],
          tags: fields.Tags as Place["tags"],
          link: fields.Link as Place["link"],
          rating: fields.Rating as Place["rating"],
          description: fields.Description as Place["description"],
          summary: fields["Short Summary"] as Place["summary"],
        });
      } catch {
        //
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Sheesshh, Some bad actor has acted yet again!");
  }

  return places;
}
