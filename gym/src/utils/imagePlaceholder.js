// Placeholder function for missing images
export const getImagePlaceholder = (path) => {
  // Return a data URI placeholder or a default image
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EImage%3C/text%3E%3C/svg%3E`;
};

// Try to import image, fallback to placeholder
export const safeImportImage = async (imagePath) => {
  try {
    const image = await import(imagePath);
    return image.default || image;
  } catch (error) {
    console.warn(`Image not found: ${imagePath}, using placeholder`);
    return getImagePlaceholder(imagePath);
  }
};

