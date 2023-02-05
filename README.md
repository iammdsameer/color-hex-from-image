# get-hex-from-image

A Node.js package that gets the most frequently occurring color in an image and returns it as a hexadecimal code.

## Usage

To use the `get-hex-from-image` package, you need to have [Jimp](https://github.com/oliver-moran/jimp) installed in your project.

Here's an example of how to use the `getColor` function in your code:

```javascript
import { getColor } from "get-hex-from-image";

async function example() {
  const hexCode = await getColor("path/to/image.jpg");
  console.log(hexCode);
}

example();
```

The `getColor` function takes a `pathToImageFile` argument, which is a string that represents the path to the image file you want to get the hex code from. The function returns a `Promise` that resolves to the hex code of the most frequently occurring color in the image.

## Contributions

Contributions to this package are welcome. If you have any suggestions or bug reports, feel free to open an issue or a pull request on Github. [https://github.com/itsmdsameerkhan/color-hex-from-image](https://github.com/itsmdsameerkhan/color-hex-from-image)
