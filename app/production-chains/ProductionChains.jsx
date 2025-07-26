"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "@/components/gallery/NextJsImage";

import image1 from "@/public/images/production-chains.jpeg";
import image1Full from "@/public/images/production-chains-full.jpeg";
import image2 from "@/public/images/ProdChainsFuel.png";
import image2Full from "@/public/images/ProdChainsFuel-full.webp";
import image3 from "@/public/images/ProductionChainsSeason2.png";
import image3Full from "@/public/images/ProductionChainsSeason2-full.webp";
import image4 from "@/public/images/ProductionChainsSeason3.png";
import image4Full from "@/public/images/ProductionChainsSeason3-full.webp";
import image5 from "@/public/images/ProductionChainsSeason4.png";
import image5Full from "@/public/images/ProductionChainsSeason4-full.webp";

export default function ProductionChains() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [image1Full, image2Full, image3Full, image4Full, image5Full];

  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Production chains for all base game DLCs</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Production chains for season pass 2 (Land of Lions & Bright Harvest)
      </p>

      {/* Obrázek 1 */}
      <div
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
        style={{ cursor: "zoom-in" }}
      >
        <Image
          aria-hidden
          src={image1}
          alt="Production chain"
          width={760}
          height={431}
        />
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Production chains for construction materials and buildings related to
        electricity, fuel, silos etc.
      </p>
      {/* Obrázek 2 */}
      <div
        onClick={() => {
          setIndex(1);
          setOpen(true);
        }}
        style={{ cursor: "zoom-in" }}
      >
        <Image
          aria-hidden
          src={image2}
          alt="Fuel chain"
          width={760}
          height={431}
        />
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">Production chains of consumer goods from Season 2 Pass DLCs</p>
      {/* Obrázek 3 */}
      <div
        onClick={() => {
          setIndex(2);
          setOpen(true);
        }}
        style={{ cursor: "zoom-in" }}
      >
        <Image
          aria-hidden
          src={image3}
          alt="Fuel chain"
          width={760}
          height={431}
        />
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Production chains of consumer goods, Food & Drink Venues and Shopping
        Arcades from Season 3 Pass DLCs
      </p>
      {/* Obrázek 4 */}
      <div
        onClick={() => {
          setIndex(3);
          setOpen(true);
        }}
        style={{ cursor: "zoom-in" }}
      >
        <Image
          aria-hidden
          src={image4}
          alt="Fuel chain"
          width={760}
          height={431}
        />
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Production chains of consumer goods, drop goods and advanced emergency
        services from Season 4 Pass DLCs
      </p>
      {/* Obrázek 5 */}
      <div
        onClick={() => {
          setIndex(4);
          setOpen(true);
        }}
        style={{ cursor: "zoom-in" }}
      >
        <Image
          aria-hidden
          src={image5}
          alt="Fuel chain"
          width={760}
          height={431}
        />
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Full link to unofficial wiki{" "}
        <a
          href="https://anno1800.fandom.com/wiki/Production_chains"
          className="text-primary underline-offset-4 hover:underline"
          target="_blank"
        >
          Production chains
        </a>
      </p>
      <p>All credits go to these awsome guys</p>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index} // nastavuje, na kterém indexu začínáme
        render={{ slide: NextJsImage }}
        styles={{ container: { zIndex: 9999 } }}
      />
    </>
  );
}
