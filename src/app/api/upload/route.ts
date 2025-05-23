import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) return new Response("No file uploaded", { status: 400 });

  if (!file.type.startsWith("image/")) {
    return new Response("Only images allowed", { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const stream = cloudinary.uploader.upload_stream({ resource_type: "auto" });

  const readable = Readable.from(buffer); // ✅ convert buffer to stream

  const result = await new Promise((resolve, reject) => {
    stream.on("finish", resolve);
    stream.on("error", reject);
    readable.pipe(stream);
  });

  return Response.json(result);
}
