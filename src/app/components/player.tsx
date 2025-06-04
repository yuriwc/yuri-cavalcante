"use client";

import React, { useState, useEffect } from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import {
  Heart,
  NavArrowLeft,
  NavArrowRight,
  Pause,
  RepeatOnce,
  Shuffle,
} from "iconoir-react";

export default function App() {
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(33); // Estado para o progresso da música
  const [isPlaying, setIsPlaying] = useState(true);

  // Simulação do avanço do slider (progresso da música)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1)); // Reseta quando atinge 100
      }, 1000); // Incrementa a cada segundo
    } else {
      interval = setInterval(() => {
        setProgress((prev) => prev); // Mantém o progresso
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <Card
      isBlurred
      className="border-none bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl max-w-[610px] border border-gray-200/20 dark:border-gray-700/20"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="https://nextui.org/images/album-cover.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Daily Mix
                </h3>
                <p className="text-small text-gray-600 dark:text-gray-300">
                  12 Tracks
                </p>
                <h1 className="text-large font-medium mt-2 text-gray-800 dark:text-gray-100">
                  Frontend Radio
                </h1>
              </div>
              <Button
                isIconOnly
                className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <Heart
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-gray-300 dark:bg-gray-600",
                  thumb:
                    "w-2 h-2 after:w-2 after:h-2 after:bg-blue-500 dark:after:bg-blue-400",
                }}
                color="primary"
                value={progress} // Controlado pelo estado de progresso
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small text-gray-700 dark:text-gray-200">
                  {progress < 10 ? `0:0${progress}` : `0:${progress}`}
                </p>
                <p className="text-small text-gray-500 dark:text-gray-400">
                  4:32
                </p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                radius="full"
                variant="light"
              >
                <RepeatOnce />
              </Button>
              <Button
                isIconOnly
                className="hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                radius="full"
                variant="light"
              >
                <NavArrowLeft />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                radius="full"
                variant="light"
                onPress={() => setIsPlaying(!isPlaying)} // Play/Pause handler
              >
                <Pause fontSize={24} />
              </Button>
              <Button
                isIconOnly
                className="hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                radius="full"
                variant="light"
              >
                <NavArrowRight />
              </Button>
              <Button
                isIconOnly
                className="hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                radius="full"
                variant="light"
              >
                <Shuffle />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
