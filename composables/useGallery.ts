export const useGallery = (category: string) => {
  // Dynamically import images from the specified category folder
  const allImages = import.meta.glob(
    "~/assets/images/**/*.{jpg,png,jpeg,gif,webp}",
    {
      eager: true,
      import: "default",
    }
  );

  const gallery = Object.entries(allImages)
    .filter(([path]) => path.includes(`assets/images/${category}/`))
    .map(([path, src]) => {
      const fileName = path.split("/").pop()?.split(".")[0] || "";
      return {
        src,
        description: `Krásný salon | ${fileName.replace(/[-_]/g, " ")}`,
        alt: `Krásný salon | ${fileName.replace(/[-_]/g, " ")}`,
      };
    });

  return gallery;
};
