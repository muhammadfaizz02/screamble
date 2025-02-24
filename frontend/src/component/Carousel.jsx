import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import bg1 from "../assets/pic4.jpg"
import bg2 from "../assets/pic2.jpg"
import bg3 from "../assets/tolol.jpg"

export default function Component() {
    return (
        <>
            <TECarousel showControls showIndicators ride="carousel">
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <TECarouselItem
                        itemID={1}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <img
                            src={bg1}
                            className="block w-full"
                            alt="..."
                        />
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={2}
                        className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <img
                            src={bg2}
                            className="block w-full"
                            alt="..."
                        />
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={3}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <img
                            src={bg3}
                            className="block w-full"
                            alt="..."
                        />
                    </TECarouselItem>
                </div>
            </TECarousel>
        </>
    );
}