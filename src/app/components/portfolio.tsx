"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import DashboardImage from "@/app/assets/images/dashboard.jpeg";
import FrontImage from "@/app/assets/images/front.jpeg";
import BussinessImage from "@/app/assets/images/bussiness.jpeg";
import { StaticImageData } from "next/image";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [modalImage, setModalImage] = useState<StaticImageData>(DashboardImage);

  const openModal = (image: StaticImageData) => {
    setModalImage(image);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 h-full">
      {[DashboardImage, FrontImage, BussinessImage].map((image, index) => (
        <Card key={index} className="h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny uppercase font-bold">Título {index + 1}</p>
            <h4 className="font-medium text-large">Descrição {index + 1}</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover cursor-pointer"
            src={image.src}
            onClick={() => openModal(image)} // Abre o modal ao clicar na imagem
          />
        </Card>
      ))}

      {/* Modal para exibir a imagem em tela cheia */}
      <Modal
        size="full"
        isOpen={visible}
        onClose={closeModal}
        closeButton
        className="flex items-center justify-center bg-black/80"
      >
        <ModalContent>
          <>
            <ModalHeader>
              <Button onPress={closeModal}> Fechar </Button>
            </ModalHeader>
            {modalImage && (
              <Image
                removeWrapper
                src={modalImage.src}
                alt="Imagem expandida"
                className="w-full h-auto max-h-full object-contain"
              />
            )}
          </>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default App;
