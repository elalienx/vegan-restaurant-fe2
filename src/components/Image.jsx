// Project files
import FatalErrorImage from "assets/images/flame-fatal-error-2.png";

export default function Image({ src, alt }) {
  // Properties
  const assetsPath = require.context("assets/images/", true);
  let imageSource = "";

  // Safeguard
  try {
    imageSource = assetsPath(`./${src}`);
  } catch (error) {
    console.error(`The image ${src} was not found in the assets folder`);
    imageSource = FatalErrorImage;
  }

  return <img src={imageSource} alt={alt} />;
}
