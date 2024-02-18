import Image, { StaticImageData } from "next/image";
import horizon from "../photos/horizon.jpeg";
import assemble from "../photos/assemble.jpg";
import horizonOpening from "../photos/horizon-opening.jpeg";
import epoch from "../photos/epoch.jpeg";
import angelhacks from "../photos/angelhacks.jpeg";
import halo from "../photos/halo.jpg";
import spark from "../photos/spark.jpg";
import alpine from "../photos/alpine.jpeg";
import { ReactNode } from "react";

function Photo({
  src,
  children,
  alt,
}) {
  return (
    <div className="w-fit rounded border bg-white px-2 sm:px-3 lg:px-4 pb-1 sm:pb-1.5 lg:pb-2 pt-3 sm:pt-[1.125rem] lg:pt-6 shadow-lg odd:rotate-6 even:-rotate-6">
      <div className="relative aspect-square w-32 sm:w-48 lg:w-64">
        <Image
          className="h-full w-full object-cover blur-[0.4px] brightness-[1.4] contrast-125 saturate-[60%] duration-200 hover:blur-none hover:brightness-100 hover:contrast-100 hover:saturate-100"
          src={src}
          alt={alt}
        />
      </div>
      <div className="mt-2 h-10 w-32 sm:w-48 lg:w-64 text-xs sm:text-sm lg:text-base">{children}</div>
    </div>
  );
}

export default function Photos() {
  return (
    <div className="flex justify-center py-10">
      <Photo src={halo} alt="Halo: LA Days of Service.">
        11/4/23 ~ halo, los angeles
      </Photo>
      <Photo
        src={horizon}
        alt="Girls coding at Horizon, Hack Club's hackathon for Girl Scouts in NYC."
      >
        3/25/23 ~ horizon, nyc
      </Photo>
      <Photo
        src={alpine}
        alt="Hackers at Alpine, Hack Club's 20223 summer Days of Service event in Utah."
      >
        7/15/23 ~ alpine, salt lake city
      </Photo>

      <Photo
        src={spark}
        alt="Girls at Spark: Bay Area's Day of Service in SF."
      >
        9/12/23 ~ spark, sf
      </Photo>

      <Photo
        src={angelhacks}
        alt="Opening ceremony at AngelHacks 3.0, a gamejam in Boston."
      >
        5/27/23 ~ angelhacks 3.0, boston
      </Photo>
    </div>
  );
}