"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { FactoryImage } from "@/data/company";
import { publicPath } from "@/lib/paths";

type FactoryGalleryProps = {
  images: ReadonlyArray<FactoryImage>;
};

export function FactoryGallery({ images }: FactoryGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleApi = useCallback((carouselApi: CarouselApi) => {
    setApi(carouselApi);
  }, []);

  useEffect(() => {
    if (!api) return;

    const updateIndex = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    updateIndex();
    api.on("select", updateIndex);
    api.on("reInit", updateIndex);

    return () => {
      api.off("select", updateIndex);
      api.off("reInit", updateIndex);
    };
  }, [api]);

  if (images.length === 0) {
    return null;
  }

  const currentNumber = String(activeIndex + 1).padStart(2, "0");
  const totalNumber = String(images.length).padStart(2, "0");
  const progress = `${((activeIndex + 1) / images.length) * 100}%`;

  return (
    <Carousel
      className="factory-gallery"
      opts={{ align: "start", loop: true }}
      setApi={handleApi}
      aria-label="Factory photographs"
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.src}>
            <figure className="factory-gallery-slide">
              <Image
                src={publicPath(image.src)}
                alt={image.alt}
                fill
                sizes="(max-width: 1279px) 100vw, 54vw"
                className="object-cover"
              />
              <figcaption>{image.label}</figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="factory-gallery-controls">
        <div className="factory-gallery-progress" aria-hidden="true">
          <span style={{ width: progress }} />
        </div>
        <span className="factory-gallery-count" aria-live="polite">
          {currentNumber} / {totalNumber}
        </span>
        <div className="factory-gallery-actions">
          <CarouselPrevious variant="outline" />
          <CarouselNext variant="outline" />
        </div>
      </div>
    </Carousel>
  );
}
