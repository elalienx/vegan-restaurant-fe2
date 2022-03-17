// Project files
import FatalErrorImage from "assets/images/flame-fatal-error-2.png";

export default function Image({ src, alt }) {
  // Properties
  /**
   * 1. SETUP:
   * We need to tell the compiler to be aware of all the images inside the assets folder
   */
  const assetsPath = require.context("assets/images/", true);
  let imageSource = "";

  // Safeguard
  try {
    /**
     * 2. USE:
     * Then we call assetPath with the prop src.
     * Note the "./" we need it because is a relative import in relation to asset/images/
     */
    imageSource = assetsPath(`./${src}`);
  } catch (error) {
    console.error(`The image ${src} was not found in the assets folder`);
    imageSource = FatalErrorImage;
  }

  return <img src={imageSource} alt={alt} />;
}
