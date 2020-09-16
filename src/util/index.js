export const getNameFromDockerImage = (image) => {
  if (!image) return '';
  return image.replace(/(.+\/)/, '');
}

// harbor.sigsus.cn:8443/sz_gongdianju/apulistech/node:12'

// node:12