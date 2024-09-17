import path from 'node:path';
import { getCollection, type InferEntrySchema } from 'astro:content';

function filterDraft({ data }: { data: InferEntrySchema<'events'> }) {
  return data.status != 'draft';
}

export async function getEvents(count: number | null = null) {
  const all = await getCollection('events', filterDraft);
  if (!count) return all;
  return all.slice(0, count);
}

export async function getEventData(count: number | null = null) {
  return (await getEvents(count)).map((c) => c.data);
}

export function getThumbnail(
  images: Record<string, () => Promise<unknown>>,
  base: string
) {
  const img = images as unknown as Record<
    string,
    () => Promise<{ default: ImageMetadata }>
  >;
  return (filename?: string) => {
    if (!filename) return img[path.resolve(base, 'thumbnail-fallback.png')]();
    const imgpath = path.resolve(base, filename);
    const thumb = img[imgpath];
    if (!thumb) {
      throw new Error(
        `Invalid thumbnail filename. Ensure the "${imgpath}" is correct.`
      );
    }
    return thumb();
  };
}
