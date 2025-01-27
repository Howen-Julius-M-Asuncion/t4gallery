import { db } from "~/server/db";

// export const dynamic = "force-dynamic";

// const mockUrls = [
//   "https://xyeie371dv.ufs.sh/f/OMNRyxC9yFK6PhCrfMJTNyZB7zklxQ9aXPJbSf2r5uLGWFKC",
//   "https://xyeie371dv.ufs.sh/f/OMNRyxC9yFK6mODlHZEnwsoxPHVRUWzB6qgcXLlAefSD1Nr5",
//   "https://xyeie371dv.ufs.sh/f/OMNRyxC9yFK6yLrNJmurMxJYInBX05NdOHqavof9stPA1eSF",
// ]

// const mockImages = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url,
// }));

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">
        {/* {images.map((images) => (
          <div key={images.id}>{images.name}</div>
        ))} */}
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
            <div key={image.id}>{image.name}</div>
          </div>
        ))}
        {/* {[...mockImages,...mockImages,...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))} */}
      </div>
    </main>
  );
}
