import { ContainerScroll } from "./ui/container-scroll-animation";

export function ImagemScroolRedux() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            {/* Título opcional se quiser exibir algo */}
          </>
        }
      >
        <img
          src="/teste.jpg"
          alt="Imagem de teste"
          height={720}
          width={1900}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}