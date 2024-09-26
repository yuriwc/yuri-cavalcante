"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function App() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Animação ao passar o mouse
      transition={{ type: "spring", stiffness: 300 }} // Transição suave
    >
      <Card className="max-w-[340px] h-fit">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="/path-to-your-avatar.png" // Troque pela URL do seu avatar
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Yuri Cavalcante
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @yuriwc
              </h5>
            </div>
          </div>
          <Button
            className={
              isFollowed
                ? "bg-transparent text-foreground border-default-200"
                : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400 overflow-hidden">
          <p>
            Desenvolvedor fullstack com paixão por criar soluções de software
            escaláveis e focadas na experiência do usuário. Acompanhe meus
            projetos de mobilidade automotiva e muito mais!
          </p>
          <span className="pt-2">
            #BuildingWithYuri
            <span className="py-2" aria-label="car" role="img">
              🚗
            </span>
          </span>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">50</p>
            <p className=" text-default-400 text-small">Seguindo</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">10K</p>
            <p className="text-default-400 text-small">Seguidores</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
