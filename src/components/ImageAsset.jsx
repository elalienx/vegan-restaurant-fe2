// Project files
import FatalErrorImage from "assets/images/flame-fatal-error-2.png";

export default function Image({ src, alt = "" }) {
  // Properties
  // 1. The folder to preload
  // 2. Do you want to recursive (check for other folders inside this folder)
  // 3. Which file type
  const assetsPath = require.context("assets/images/", true);
  let imageSource = "";

  // Safefuard
  try {
    imageSource = assetsPath(`./${src}`);
  } catch (error) {
    console.error(`The image ${src} was not found`);
    imageSource = FatalErrorImage;
  }

  return <img src={imageSource} alt={alt} />;
}
