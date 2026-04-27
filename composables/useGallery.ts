type GalleryOptions = {
  exclude?: string;
};

export const useGallery = (category: string, options?: GalleryOptions) => {
  const allImages = import.meta.glob(
    "~/assets/images/**/*.{jpg,png,jpeg,gif,webp}",
    {
      eager: true,
      import: "default",
    }
  );

  const gallery = Object.entries(allImages)
    .filter(([path]) => {
      if (!path.includes(`assets/images/${category}/`)) return false;
      if (options?.exclude) {
        const fileName = path.split("/").pop() ?? "";
        if (fileName.startsWith(options.exclude)) return false;
      }
      return true;
    })
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src]) => {
      const fileName = path.split("/").pop()?.split(".")[0] ?? "";
      return {
        src,
        description: `Krásný salon | ${fileName.replace(/[-_]/g, " ")}`,
        alt: `Krásný salon | ${fileName.replace(/[-_]/g, " ")}`,
      };
    });

  return gallery;
};
