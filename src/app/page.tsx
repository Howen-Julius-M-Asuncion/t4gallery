

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "@uploadthing/react";
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

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt={image.name} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignedOut>
        <div className="h-full w-full text-2x1">Please Sign In Above</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
