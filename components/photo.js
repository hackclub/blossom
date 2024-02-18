function Photo({ src, children, alt }) {
  return (
    <div className="w-fit rounded border bg-white px-2 pb-1 pt-3 shadow-lg odd:rotate-6 even:-rotate-6 sm:px-3 sm:pb-1.5 sm:pt-[1.125rem] lg:px-4 lg:pb-2 lg:pt-6">
      <div className="relative aspect-square w-32 sm:w-48 lg:w-64">
        <img
          className="h-full w-full object-cover blur-[0.4px] brightness-[1.4] contrast-125 saturate-[60%] duration-200 hover:blur-none hover:brightness-100 hover:contrast-100 hover:saturate-100"
          src={src}
          alt={alt}
        />
      </div>
      <div className="mt-2 h-10 w-32 text-xs sm:w-48 sm:text-sm lg:w-64 lg:text-base">
        {children}
      </div>
    </div>
  );
}

const photos = [
  {
    name: "Halo",
    src: "/photos/halo.jpg",
    caption: "11/4/23 ~ halo, los angeles",
    alt: "Halo: LA Days of Service.",
  },
  {
    name: "Horizon",
    src: "/photos/horizon.jpeg",
    caption: "3/25/23 ~ horizon, nyc",
    alt: "Girls coding at Horizon, Hack Club's hackathon for Girl Scouts in NYC.",
  },
  {
    name: "Alpine",
    src: "/photos/alpine.jpeg",
    caption: "7/15/23 ~ alpine, salt lake city",
    alt: "Hackers at Alpine, Hack Club's 20223 summer Days of Service event in Utah.",
  },
  {
    name: "Spark",
    src: "/photos/spark.jpg",
    caption: "9/12/23 ~ spark, sf",
    alt: "Girls at Spark: Bay Area's Day of Service in SF.",
  },
  {
    name: "AngelHacks",
    src: "./photos/angelhacks.jpeg",
    caption: "5/27/23 ~ angelhacks 3.0, boston",
    alt: "Opening ceremony at AngelHacks 3.0, a gamejam in Boston.",
  },
];

export default function Photos() {
  return (
    <div className="flex justify-center py-10">
      {photos.map((photo, i) => (
        <Photo
          key={i}
          src={photo.src}
          alt={photo.alt}
          children={photo.caption}
        />
      ))}
    </div>
  );
}
