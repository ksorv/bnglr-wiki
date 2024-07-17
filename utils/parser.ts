import { Place } from "@/types/airtable"

export function parseRecords(places: Array<Place>) {
  const approvedPlaces = places.filter((place) => place.approved);

  const placesByType: Record<string, Array<Place>> = {};

  for (let i =0; i < approvedPlaces.length; i++) {
    const place = approvedPlaces[i];

    const { tags } = place;

    if (!placesByType[tags]) {
      placesByType[tags] = [];
    }

    placesByType[tags].push(place);
  }

  return Object.entries(placesByType);
}