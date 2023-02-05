import Jimp from "jimp";

export async function getColor(pathToImageFile: string): Promise<string> {
  const image = await Jimp.read(pathToImageFile);
  const pixels = image.bitmap.data;
  let colorCounts: { [key: string]: number } = {};

  for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];
    const green = pixels[i + 1];
    const blue = pixels[i + 2];
    const key = `${red},${green},${blue}`;
    if (colorCounts[key]) {
      colorCounts[key]++;
    } else {
      colorCounts[key] = 1;
    }
  }

  let mostFrequent: string | null = null;
  let maxCount = 0;
  for (const color in colorCounts) {
    if (colorCounts[color] > maxCount) {
      mostFrequent = color;
      maxCount = colorCounts[color];
    }
  }

  const [red, green, blue] = mostFrequent!.split(",").map(Number);
  const hexCode = Jimp.rgbaToInt(red, green, blue, 255)
    .toString(16)
    .padStart(6, "0");
  return `#${hexCode}`;
}
