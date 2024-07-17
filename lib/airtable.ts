import Airtable from "airtable";

let airtable:Airtable;

export function getAirtable() {
  if (airtable) {
    return airtable
  }

  airtable = new Airtable({
    apiKey: process.env.AIRTABLE_TOKEN
  })

  return airtable
}