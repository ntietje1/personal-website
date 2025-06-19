import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Nick Tietje";

  // Option 2: Use a local image file
  try {
    const imagePath = join(process.cwd(), "public", "images", "og.png");
    const imageBuffer = readFileSync(imagePath);

    return new Response(new Uint8Array(imageBuffer), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    // Fallback to a simple generated image
    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center bg-black">
          <h1 tw="text-4xl font-bold text-white">Nick Tietje</h1>
          <p tw="text-xl text-gray-300 mt-4">Software Engineer</p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
