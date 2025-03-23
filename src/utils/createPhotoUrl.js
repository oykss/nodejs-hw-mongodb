import { getEnvVar } from './getEnvVar.js';
import { saveFileToCloudinary } from './saveFileToCloudinary.js';
import { saveFileToUploadDir } from './saveFileToUploadDir.js';

export async function createPhotoUrl(photo) {
  if (!photo) return;

  return getEnvVar('ENABLE_CLOUDINARY') === 'true'
    ? await saveFileToCloudinary(photo)
    : await saveFileToUploadDir(photo);
}
