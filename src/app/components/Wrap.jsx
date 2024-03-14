"use client";
import React, { useState, useMemo } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import Fuse from "fuse.js";
import siswa from "../data/siswa.json";
import { BackgroundGradient } from "./ui/Background-gradient";

const SearchInput = ({ value, onChange }) => (
  <Input
    className="sm:w-[280px] w-[180px]"
    value={value}
    onChange={onChange}
    label="Search"
    isClearable
    radius="lg"
    classNames={{
      label: "text-black/50 dark:text-white/90",
      input: ["bg-transparent", " text-white/90", "placeholder:text-white/60"],
      innerWrapper: "bg-transparent",
      inputWrapper: [
        "shadow-xl",
        "bg-default-200/50",
        "dark:bg-default/60",
        "backdrop-blur-xl",
        "backdrop-saturate-200",
        "hover:bg-default-200/70",
        "dark:hover:bg-default/70",
        "group-data-[focused=true]:bg-default-200/50",
        "dark:group-data-[focused=true]:bg-default/60",
        "!cursor-text",
      ],
    }}
    placeholder="Type to search..."
    startContent={<SearchIcon className=" mb-0.5 text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />}
  />
);

const SearchResult = ({ results }) => {
  const [showAll, setShowAll] = useState(false);

  const limitedResults = showAll ? results : results.slice(0, 11);

  return (
    <>
      {limitedResults.map((data) => (
        <BackgroundGradient key={data.id} className="rounded-[22px] max-w-sm  relative bg-zinc-900">
          <Image src={data.image} alt="jordans" height="400" width="400" className=" object-cover rounded-[22px] h-[300px] w-full" />
          <div className="absolute w-full bottom-0 flex justify-between p-2">
            <Card isFooterBlurred className="border-none w-[350px] h-[50px] bg-transparent md:w-[400px] md:h-[50px]">
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{data.name}</p>
                <Button className="text-tiny text-white bg-gradient" variant="flat" color="default" radius="lg" size="sm">
                  <Link href={data.url} passHref>
                    Follow me
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </BackgroundGradient>
      ))}
      {!showAll && (
        <Button onClick={() => setShowAll(true)} className="text-tiny text-white bg-gradient" variant="flat" color="default" radius="lg" size="sm">
          Show all
        </Button>
      )}
    </>
  );
};

const Wrap = () => {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(siswa, {
        keys: ["id", "name", "url"],
        includeScore: true,
      }),
    []
  );

  const handleOnSearch = ({ currentTarget }) => {
    const { value } = currentTarget;
    setQuery(value.toLowerCase()); // Mengubah kueri menjadi lowercase untuk pencarian case-insensitive
  };

  const results = fuse.search(query);
  const siswaResults = query ? results.map((result) => result.item) : siswa;

  return (
    <div className="flex flex-col shadow-neon w-full">
      <div className="w-[340px]  h-auto mt-5  rounded-2xl   text-white shadow-lg">
        <SearchInput value={query} onChange={handleOnSearch} />
      </div>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 mt-9">
        <SearchResult results={siswaResults} />
      </div>
    </div>
  );
};

export default Wrap;
