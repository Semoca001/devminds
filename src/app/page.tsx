const Page = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12"> {/* Contenedor principal */}
      <div className="max-w-8xl mx-auto"> {/* Contenedor que limita el tamaño máximo de la página */}
        
        {/* Contenedor del Título */}
        <div className="title-container">
          <h1
            className="text-left font-extrabold break-words mb-10 sm:mb-12 lg:mb-16"
            style={{
              fontSize: "clamp(2.5rem, 12vw, 8rem)", // Ajusta entre 2.5rem y 8rem según el ancho de la pantalla
              lineHeight: "1.2", // Espaciado vertical para una mejor proporción
            }}
          >
            DevMinds
          </h1>
        </div>
        
        {/* Contenedor de About Us */}
        <div className="about-us-container">
          <p className="text-lg md:text-xl text-justify break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut enim dolor. 
            Vestibulum vehicula, nisi a tincidunt dapibus, justo urna dictum lacus, a scelerisque 
            tortor mi nec purus. Integer euismod nulla at nulla placerat, ac eleifend lectus 
            facilisis. Proin ac neque a arcu sodales vestibulum sit amet at nunc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
