import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

// Define the Cloudinary upload result type
interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  format: string;
  width: number;
  height: number;
  resource_type: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // For any other properties returned by Cloudinary
}

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

  // Use a different approach with upload_stream that properly captures the result
  const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result as CloudinaryUploadResult);
      }
    );
    
    // Pipe the buffer to the upload stream
    const readable = Readable.from(buffer);
    readable.pipe(uploadStream);
  });

  // Extract only the necessary fields from the result to ensure it's serializable
  const serializedResult = {
    secure_url: result.secure_url,
    public_id: result.public_id,
    format: result.format,
    width: result.width,
    height: result.height,
    resource_type: result.resource_type,
    url: result.url,
  };

  return Response.json(serializedResult);
}
