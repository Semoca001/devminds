const Page = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12"> {/* Contenedor principal */}
      <div className="max-w-8xl mx-auto"> {/* Contenedor que limita el tamaño máximo de la página */}
        
        {/* Contenedor del Título */}
        <div className="title-container"> 
          <h1 className="text-left text-4xl md:text-6xl lg:text-7xl font-extrabold">
            DevMinds
          </h1>
        </div>
        
        {/* Contenedor de About Us */}
        <div className="about-us-container"> 
          <p className="text-lg md:text-xl text-justify">
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
