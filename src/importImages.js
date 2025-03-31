const images = import.meta.glob('./assets/Images/*.{png,jpg,jpeg,svg}', { eager: true });

const imageMap = {};
for (const path in images) {

  const fileName = path.split('/').pop();
  imageMap[fileName] = images[path].default;
}

export default imageMap;