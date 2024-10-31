import { Card, CardHeader, Image } from "@nextui-org/react";
import DashboardImage from "@/app/assets/images/dashboard.jpeg";
import FrontImage from "@/app/assets/images/front.jpeg";
import BussinessImage from "@/app/assets/images/bussiness.jpeg";
const App = () => {
  return (
    <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 h-full">
      <Card className="h-[400px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny uppercase font-bold">Dashboard Layout</p>
          <h4 className="font-medium text-large">Lindo e responsivo</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={DashboardImage.src}
        />
      </Card>

      <Card className="h-[400px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny uppercase font-bold">Visualização de Metas</p>
          <h4 className="font-medium text-large">Acompanhamento de metas</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={FrontImage.src}
        />
      </Card>
      <Card className="h-[400px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny uppercase font-bold">Formulários Dinâmicos</p>
          <h4 className="font-medium text-large">Acompanhamento de metas</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={BussinessImage.src}
        />
      </Card>
    </div>
  );
};

export default App;
