document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.models-grid');

  const cardTpl = model => `
    <div class="model-card">
      <div class="model-preview">
        <model-viewer
          src="${model.modelUrl}"
          alt="${model.name}"
          camera-controls
          auto-rotate
          loading="lazy"
          style="width:100%; height:100%; --poster-color:transparent">
        </model-viewer>
      </div>
      <div class="model-info">
        <h3>${model.name}</h3>
        <p>${model.description}</p>
      </div>
      <div class="model-actions">
        <a href="${model.exploreUrl}" target="_blank" class="explore-button">Ver más</a>
      </div>
    </div>
  `;

  // Lista de modelos únicos (ejemplos, agrega los 48 aquí)
  const modelsData = [
    {
      name: 'Sistema muscular',
      description: 'Estructura muscular del cuerpo humano.',
      modelUrl: 'Sistema muscular/Sistema muscular.glb',
      exploreUrl: 'Explorar_muscular.html'
    },
    {
      name: 'Músculo cardíaco',
      description: 'Músculo del corazón, de acción involuntaria.',
      modelUrl: 'Sistema muscular/cardiac_muscle5.glb',
      exploreUrl: 'Explorar_cardiaco.html'
    },
    {
      name: 'Músculos lisos',
      description: 'Músculos involuntarios del cuerpo interno.',
      modelUrl: 'Sistema muscular/smooth_muscle_cell.glb',
      exploreUrl: 'Explorar_musculos_lisos.html'
    },
    {
      name: 'Fascias',
      description: 'Tejido conectivo que envuelve los músculos.',
      modelUrl: 'Sistema muscular/Fascias.glb',
      exploreUrl: 'Explorar_fascias.html'
    },
    {
      name: 'Sistema esqueletico',
      description: 'Soporte y protección del cuerpo.',
      modelUrl: 'Sistema esqueletico/esqueleto.glb',
      exploreUrl: 'Explorar.html'
    },
    {
      name: 'Fémur',
      description: 'Hueso largo que sostiene el muslo.',
      modelUrl: 'Sistema esqueletico/Femur.glb',
      exploreUrl: 'Explorar_femur.html'
    },
    {
      name: 'Cartílago',
      description: 'Tejido flexible que amortigua y da forma.',
      modelUrl: 'Sistema esqueletico/Cartilago.glb',
      exploreUrl: 'Explorar_cartilago.html'
    },
    {
      name: 'Costillas',
      description: 'Hueso que protege el pecho.',
      modelUrl: 'Sistema esqueletico/Costillas.glb',
      exploreUrl: 'Explorar_costillas.html'
    },
    {
          name: 'Pelvis y fémur',
          description: 'Pelvis y fémur: sostienen el cuerpo y permiten el movimiento.',
          modelUrl: 'Sistema esqueletico/Pelvis y femur.glb',
          exploreUrl: 'Explorar_pelvis_femur.html'
        },
        {
          name: 'Cráneo',
          description: 'Hueso que protege el cerebro.',
          modelUrl: 'Sistema esqueletico/Cráneo.glb',
          exploreUrl: 'Explorar_craneo.html'
        },
        {
          name: 'Arteria',
          description: 'Vaso que lleva sangre del corazón al cuerpo.',
          modelUrl: 'Sistema circulatorio/arteria.glb',
          exploreUrl: 'Explorar_arteria.html'
        },
        {
          name: 'Capilares',
          description: 'Vasos muy finos que conectan arterias y venas.',
          modelUrl: 'Sistema circulatorio/capilares.glb',
          exploreUrl: 'Explorar_capílares.html'
        },
        {
          name: 'Corazón',
          description: 'Órgano que bombea sangre por el cuerpo.',
          modelUrl: 'Sistema circulatorio/corazon.glb',
          exploreUrl: 'Explorar_corazón.html'
        },
        {
          name: 'Glóbulos rojos',
          description: 'Células que transportan oxígeno.',
          modelUrl: 'Sistema circulatorio/globulos_rojos.glb',
          exploreUrl: 'Explorar_globulos_rojos.html'
        },
        {
          name: 'Vasos sanguíneos',
          description: 'Conductos que transportan sangre.',
          modelUrl: 'Sistema circulatorio/vasos_sanguineos.glb',
          exploreUrl: 'Explorar_vasos_sanguineos.html'
        },
        {
          name: 'Venas',
          description: 'Vasos que llevan sangre al corazón.',
          modelUrl: 'Sistema circulatorio/vena.glb',
          exploreUrl: 'Explorar_venas.html'
        },
        {
          name: 'Sistema digestivo',
          description: 'Transforma alimentos en energía.',
          modelUrl: 'Sistema digestivo/Sistema digestivo.glb',
          exploreUrl: 'Explorar2.html'
        },
        {
          name: 'Páncreas',
          description: 'Regula el azúcar y ayuda a la digestión.',
          modelUrl: 'Sistema digestivo/Páncreas.glb',
          exploreUrl: 'Explorar_páncreas.html'
        },
        {
          name: 'Intestino grueso y delgado',
          description: 'Absorben nutrientes y forman heces.',
          modelUrl: 'Sistema digestivo/intestino grueso y delgado.glb',
          exploreUrl: 'Explorar_intestinos.html'
        },
        {
          name: 'Hígado',
          description: 'Filtra toxinas y produce bilis.',
          modelUrl: 'Sistema digestivo/Higado.glb',
          exploreUrl: 'Explorar_higado.html'
        },
        {
          name: 'Estómago',
          description: 'Descompone los alimentos.',
          modelUrl: 'Sistema digestivo/Estómago.glb',
          exploreUrl: 'Explorar_estomago.html'
        },
        {
          name: 'Boca',
          description: 'Inicio de la digestión.',
          modelUrl: 'Sistema digestivo/Boca.glb',
          exploreUrl: 'Explorar_boca.html'
        },
        {
          name: 'Tiroides',
          description: 'Regula el metabolismo.',
          modelUrl: 'Sistema endocrinario/Tiroides.glb',
          exploreUrl: 'Explorar_tiroides.html'
        },
        {
          name: 'Suprarrenales',
          description: 'Glándulas sobre los riñones.',
          modelUrl: 'Sistema endocrinario/Suprarrenales.glb',
          exploreUrl: 'Explorar_suprarrenales.html'
        },
        {
          name: 'Hipófisis',
          description: 'Controla otras glándulas del cuerpo.',
          modelUrl: 'Sistema endocrinario/Hipófisis.glb',
          exploreUrl: 'Explorar_hipofisis.html'
        },
        {
          name: 'Bazo',
          description: 'Filtra sangre y combate infecciones.',
          modelUrl: 'Sistema inmunologico/Bazo.glb',
          exploreUrl: 'Explorar_bazo.html'
        },
        {
          name: 'Sistema linfático',
          description: 'Transporta linfa y defiende el cuerpo.',
          modelUrl: 'Sistema inmunologico/Linfático.glb',
          exploreUrl: 'Explorar_linfatico.html'
        },
        {
          name: 'Sistema nervioso',
          description: 'Controla funciones y respuestas del cuerpo.',
          modelUrl: 'Sistema nervioso/Sistema nervioso.glb',
          exploreUrl: 'Explorar_sistemanervioso.html'
        },
        {
          name: 'Neurona',
          description: 'Célula que transmite señales.',
          modelUrl: 'Sistema nervioso/Neurona.glb',
          exploreUrl: 'Explorar_neurona.html'
        },  
        {
          name: 'Médula espinal',
          description: 'Transmite señales entre el cuerpo y el cerebro.',
          modelUrl: 'Sistema nervioso/Medúla espinal.glb',
          exploreUrl: 'Explorar_medula_espinal.html'
        },
        {
          name: 'Cerebro',
          description: 'Controla pensamiento y funciones corporales.',
          modelUrl: 'Sistema nervioso/Cerebro.glb',
          exploreUrl: 'Explorar_cerebro.html'
        },
        {
          name: 'Aparato reproductor femenino ',
          description: 'Conjunto de órganos que permiten la reproducción y el embarazo.',
          modelUrl: 'Sistema reproductivo/Aparato reproductor femenino.glb',
          exploreUrl: 'Explorar_aparatorh.html'
        },
        {
          name: 'Aparato reproductor masculino ',
          description: 'Conjunto de órganos que producen y transportan espermatozoides.',
          modelUrl: 'Sistema reproductivo/Aparato reproductor masculino.glb',
          exploreUrl: 'Explorar_Aparato reproductor masculino.html'
        },
        {
          name: 'Alvéolos ',
          description: 'Sacos pulmonares donde se da el intercambio de gases.',
          modelUrl: 'Sistema respiratorio/Alvéolos.glb',
          exploreUrl: 'Explorar_Alvéolos.html'
        },
        {
          name: 'Broque derecha ',
          description: 'Conduce el aire al pulmón derecho; es más corto y recto que el izquierdo.',
          modelUrl: 'Sistema respiratorio/Broque derecha.glb',
          exploreUrl: 'Explorar_Broque_derecha.html'
        },
        {
          name: 'Diafragma ',
          description: 'Músculo que permite la respiración al contraerse y relajarse.',
          modelUrl: 'Sistema respiratorio/diafragma.glb',
          exploreUrl: 'detalle/Diafragma.html'
        },
        {
          name: 'Musculo nasal ',
          description: 'El músculo nasal ayuda a abrir y cerrar las fosas nasales.',
          modelUrl: 'Sistema respiratorio/Musculo nasal.glb',
          exploreUrl: 'Explorar_Musculo_nasal.html'
        },
        {
          name: 'Pulmones ',
          description: 'Los pulmones son órganos que permiten el intercambio de aire y oxígeno con la sangre.',
          modelUrl: 'Sistema respiratorio/Pulmones.glb',
          exploreUrl: 'Explorar_Pulmones.html'
        },
        {
          name: 'Tráquea',
          description: 'La tráquea es un tubo que conecta la garganta con los pulmones para transportar aire.',
          modelUrl: 'Sistema respiratorio/Tráquea.glb',
          exploreUrl: 'Explorar_Tráquea.html'
        },
        {
          name: 'Lengua',
          description: 'La lengua es un músculo móvil que ayuda a hablar, masticar y tragar.',
          modelUrl: 'Sistema sensorial/Lengua.glb',
          exploreUrl: 'Explorar_lengua.html'
        },
        {
          name: 'Nariz',
          description: 'La nariz es el órgano que permite la entrada de aire y el sentido del olfato.',
          modelUrl: 'Sistema sensorial/Nariz.glb',
          exploreUrl: 'Explorar_nariz.html'
        },
        {
          name: 'Oidos',
          description: 'Los ojos son órganos que permiten ver y percibir el entorno.',
          modelUrl: 'Sistema sensorial/Oidos.glb',
          exploreUrl: 'Explorar_oidos.html'
        },
        {
          name: 'Ojos',
          description: 'Los oídos son órganos que permiten escuchar y mantener el equilibrio.',
          modelUrl: 'Sistema sensorial/Ojos.glb',
          exploreUrl: 'Explorar_ojos.html'
        },
        {
          name: 'Epidermis',
          description: 'La epidermis es la capa externa de la piel que protege el cuerpo.',
          modelUrl: 'Sistema Tegumentario/Epidermis.glb',
          exploreUrl: 'Explorar_epidermis.html'
        },
        {
          name: 'Uñas',
          description: 'Las uñas protegen las puntas de los dedos y ayudan a manipular objetos.',
          modelUrl: 'Sistema Tegumentario/Uñas.glb',
          exploreUrl: 'Explorar_uñas.html'
        },
        {
          name: 'Riñón',
          description: 'El riñón filtra la sangre para eliminar desechos y producir orina.',
          modelUrl: 'Sistema urinario/Riñon.glb',
          exploreUrl: 'Explorar_riñon.html'
        },
        {
          name: 'Sistema urinario',
          description: 'El sistema urinario elimina la orina del cuerpo.',
          modelUrl: 'Sistema urinario/Sistema urinario.glb',
          exploreUrl: 'Explorar_sistemaurinario.html'
        },
  ];

  // Insertar todas las cards en el DOM
  modelsData.forEach(model => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = cardTpl(model).trim();
    grid.appendChild(wrapper.firstElementChild);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.models-grid');
  const mainSearchInput = document.getElementById('mainSearchInput');
  const mainSearchBtn = document.getElementById('mainSearchBtn');

  const cardTpl = model => `
    <div class="model-card">
      <div class="model-preview">
        <model-viewer
          src="${model.modelUrl}"
          alt="${model.name}"
          camera-controls
          auto-rotate
          loading="lazy"
          style="width:100%; height:100%; --poster-color:transparent">
        </model-viewer>
      </div>
      <div class="model-info">
        <h3>${model.name}</h3>
        <p>${model.description}</p>
      </div>
      <div class="model-actions">
        <a href="${model.exploreUrl}" target="_blank" class="explore-button">Ver más</a>
      </div>
    </div>
  `;

  // Lista de modelos
  const modelsData = [
    {
      name: 'Sistema muscular',
      description: 'Estructura muscular del cuerpo humano.',
      modelUrl: 'Sistema muscular/Sistema muscular.glb',
      exploreUrl: 'explorar_muscular.html'
    },
    {
      name: 'Músculo cardíaco',
      description: 'Músculo del corazón, de acción involuntaria.',
      modelUrl: 'Sistema muscular/cardiac_muscle5.glb',
      exploreUrl: 'Explorar_cardiaco.html'
    },
    {
      name: 'Músculos lisos',
      description: 'Músculos involuntarios del cuerpo interno.',
      modelUrl: 'Sistema muscular/smooth_muscle_cell.glb',
      exploreUrl: 'Explorar_musculos_lisos.html'
    },
    {
      name: 'Fascias',
      description: 'Tejido conectivo que envuelve los músculos.',
      modelUrl: 'Sistema muscular/Fascias.glb',
      exploreUrl: 'Explorar_fascias.html'
    },
    {
      name: 'Sistema esqueletico',
      description: 'Soporte y protección del cuerpo.',
      modelUrl: 'Sistema esqueletico/esqueleto.glb',
      exploreUrl: 'Explorar.html'
    },
    {
      name: 'Fémur',
      description: 'Hueso largo que sostiene el muslo.',
      modelUrl: 'Sistema esqueletico/Femur.glb',
      exploreUrl: 'Explorar_femur.html'
    },
    {
      name: 'Cartílago',
      description: 'Tejido flexible que amortigua y da forma.',
      modelUrl: 'Sistema esqueletico/Cartilago.glb',
      exploreUrl: 'Explorar_cartilago.html'
    },
    {
      name: 'Costillas',
      description: 'Hueso que protege el pecho.',
      modelUrl: 'Sistema esqueletico/Costillas.glb',
      exploreUrl: 'Explorar_costillas.html'
    },
    {
      name: 'Pelvis y fémur',
      description: 'Pelvis y fémur: sostienen el cuerpo y permiten el movimiento.',
      modelUrl: 'Sistema esqueletico/Pelvis y femur.glb',
      exploreUrl: 'Explorar_pelvis_femur.html'
    },
    {
      name: 'Cráneo',
      description: 'Hueso que protege el cerebro.',
      modelUrl: 'Sistema esqueletico/Cráneo.glb',
      exploreUrl: 'Explorar_craneo.html'
    },
    {
      name: 'Arteria',
      description: 'Vaso que lleva sangre del corazón al cuerpo.',
      modelUrl: 'Sistema circulatorio/arteria.glb',
      exploreUrl: 'Explorar_arteria.html'
    },
    {
      name: 'Capilares',
      description: 'Vasos muy finos que conectan arterias y venas.',
      modelUrl: 'Sistema circulatorio/capilares.glb',
      exploreUrl: 'Explorar_capílares.html'
    },
    {
      name: 'Corazón',
      description: 'Órgano que bombea sangre por el cuerpo.',
      modelUrl: 'Sistema circulatorio/corazon.glb',
      exploreUrl: 'Explorar_corazón.html'
    },
    {
      name: 'Glóbulos rojos',
      description: 'Células que transportan oxígeno.',
      modelUrl: 'Sistema circulatorio/globulos_rojos.glb',
      exploreUrl: 'Explorar_globulos_rojos.html'
    },
    {
      name: 'Vasos sanguíneos',
      description: 'Conductos que transportan sangre.',
      modelUrl: 'Sistema circulatorio/vasos_sanguineos.glb',
      exploreUrl: 'Explorar_vasos_sanguineos.html'
    },
    {
      name: 'Venas',
      description: 'Vasos que llevan sangre al corazón.',
      modelUrl: 'Sistema circulatorio/venas.glb',
      exploreUrl: 'Explorar_venas.html'
    },
    {
      name: 'Sistema digestivo',
      description: 'Transforma alimentos en energía.',
      modelUrl: 'Sistema digestivo/Sistema digestivo.glb',
      exploreUrl: 'Explorar2.html'
    },
    {
      name: 'Páncreas',
      description: 'Regula el azúcar y ayuda a la digestión.',
      modelUrl: 'Sistema digestivo/Páncreas.glb',
      exploreUrl: 'Explorar_páncreas.html'
    },
    {
      name: 'Intestino grueso y delgado',
      description: 'Absorben nutrientes y forman heces.',
      modelUrl: 'Sistema digestivo/intestino grueso y delgado.glb',
      exploreUrl: 'Explorar_Intestino.D.G.html'
    },
    {
      name: 'Hígado',
      description: 'Filtra toxinas y produce bilis.',
      modelUrl: 'Sistema digestivo/Higado.glb',
      exploreUrl: 'Explorar_higado.html'
    },
    {
      name: 'Estómago',
      description: 'Descompone los alimentos.',
      modelUrl: 'Sistema digestivo/Estómago.glb',
      exploreUrl: 'Explorar_Estómago.html'
    },
    {
      name: 'Boca',
      description: 'Inicio de la digestión.',
      modelUrl: 'Sistema digestivo/Boca.glb',
      exploreUrl: 'Explorar_Boca.html'
    },
    {
      name: 'Tiroides',
      description: 'Regula el metabolismo.',
      modelUrl: 'Sistema endocrinario/Tiroides.glb',
      exploreUrl: 'Explorar_tiroides.html'
    },
    {
      name: 'Suprarrenales',
      description: 'Glándulas sobre los riñones.',
      modelUrl: 'Sistema endocrinario/Suprarrenales.glb',
      exploreUrl: 'Explorar_suprarrenales.html'
    },
    {
      name: 'Hipófisis',
      description: 'Controla otras glándulas del cuerpo.',
      modelUrl: 'Sistema endocrinario/Hipófisis.glb',
      exploreUrl: 'Explorar_hipofisis.html'
    },
    {
      name: 'Bazo',
      description: 'Filtra sangre y combate infecciones.',
      modelUrl: 'Sistema inmunologico/Bazo.glb',
      exploreUrl: 'Explorar_bazo.html'
    },
    {
      name: 'Sistema linfático',
      description: 'Transporta linfa y defiende el cuerpo.',
      modelUrl: 'Sistema inmunologico/Linfático.glb',
      exploreUrl: 'Explorar_linfatico.html'
    },
    {
      name: 'Sistema nervioso',
      description: 'Controla funciones y respuestas del cuerpo.',
      modelUrl: 'Sistema nervioso/Sistema nervioso.glb',
      exploreUrl: 'Explorar_sistemanervioso.html'
    },
    {
      name: 'Neurona',
      description: 'Célula que transmite señales.',
      modelUrl: 'Sistema nervioso/Neurona.glb',
      exploreUrl: 'Explorar_neurona.html'
    },  
    {
      name: 'Médula espinal',
      description: 'Transmite señales entre el cuerpo y el cerebro.',
      modelUrl: 'Sistema nervioso/Medúla espinal.glb',
      exploreUrl: 'Explorar_medula_espinal.html'
    },
    {
      name: 'Cerebro',
      description: 'Controla pensamiento y funciones corporales.',
      modelUrl: 'Sistema nervioso/Cerebro.glb',
      exploreUrl: 'Explorar_cerebro.html'
    },
    {
      name: 'Aparato reproductor femenino',
      description: 'Conjunto de órganos que permiten la reproducción y el embarazo.',
      modelUrl: 'Sistema reproductivo/Aparato reproductor femenino.glb',
      exploreUrl: 'Explorar_aparatorhF.html'
    },
    {
      name: 'Aparato reproductor masculino',
      description: 'Conjunto de órganos que producen y transportan espermatozoides.',
      modelUrl: 'Sistema reproductivo/Aparato reproductos masculino.glb',
      exploreUrl: 'Explorar_aparatorhM.html'
    },
    {
      name: 'Alvéolos',
      description: 'Sacos pulmonares donde se da el intercambio de gases.',
      modelUrl: 'Sistema respiratorio/Alvéolos.glb',
      exploreUrl: 'Explorar_alveolos.html'
    },
    {
      name: 'Bronquio derecho',
      description: 'Conduce el aire al pulmón derecho; es más corto y recto que el izquierdo.',
      modelUrl: 'Sistema respiratorio/Broque derecha.glb',
      exploreUrl: 'Explorar_broque_derecha.html'
    },
    {
      name: 'Diafragma',
      description: 'Músculo que permite la respiración al contraerse y relajarse.',
      modelUrl: 'Sistema respiratorio/diafragma(1).glb',
      exploreUrl: 'Explorar_diafragma.html'
    },
    {
      name: 'Músculo nasal',
      description: 'El músculo nasal ayuda a abrir y cerrar las fosas nasales.',
      modelUrl: 'Sistema respiratorio/musculo_nasal.glb',
      exploreUrl: 'Explorar_musculo_nasal.html'
    },
    {
      name: 'Pulmones',
      description: 'Los pulmones son órganos que permiten el intercambio de aire y oxígeno con la sangre.',
      modelUrl: 'Sistema respiratorio/Pulmones.glb',
      exploreUrl: 'Explorar_pulmones.html'
    },
    {
      name: 'Tráquea',
      description: 'La tráquea es un tubo que conecta la garganta con los pulmones para transportar aire.',
      modelUrl: 'Sistema respiratorio/Tráquea.glb',
      exploreUrl: 'Explorar_tráquea.html'
    },
    {
      name: 'Lengua',
      description: 'La lengua es un músculo móvil que ayuda a hablar, masticar y tragar.',
      modelUrl: 'Sistema sensorial/Lengua.glb',
      exploreUrl: 'Explorar_lengua.html'
    },
    {
      name: 'Nariz',
      description: 'La nariz es el órgano que permite la entrada de aire y el sentido del olfato.',
      modelUrl: 'Sistema sensorial/Nariz.glb',
      exploreUrl: 'Explorar_nariz.html'
    },
    {
      name: 'Oídos',
      description: 'Los oídos son órganos que permiten escuchar y mantener el equilibrio.',
      modelUrl: 'Sistema sensorial/Oidos.glb',
      exploreUrl: 'Explorar_oido.html'
    },
    {
      name: 'Ojos',
      description: 'Los ojos son órganos que permiten ver y percibir el entorno.',
      modelUrl: 'Sistema sensorial/Ojos.glb',
      exploreUrl: 'Explorar_ojos.html'
    },
    {
      name: 'Epidermis',
      description: 'La epidermis es la capa externa de la piel que protege el cuerpo.',
      modelUrl: 'Sistema Tegumentario/Epidermis.glb',
      exploreUrl: 'Explorar_epidermis.html'
    },
    {
      name: 'Uñas',
      description: 'Las uñas protegen las puntas de los dedos y ayudan a manipular objetos.',
      modelUrl: 'Sistema Tegumentario/Uñas.glb',
      exploreUrl: 'Explorar_uñas.html'
    },
    {
      name: 'Riñón',
      description: 'El riñón filtra la sangre para eliminar desechos y producir orina.',
      modelUrl: 'Sistema urinario/Riñon.glb',
      exploreUrl: 'Explorar_riñon.html'
    },
    {
      name: 'Sistema urinario',
      description: 'El sistema urinario elimina la orina del cuerpo.',
      modelUrl: 'Sistema urinario/Sistema urinario.glb',
      exploreUrl: 'Explorar_sistemaurinario.html'
    },
  ];

  // Función para renderizar las cards
  function renderModels(models) {
    grid.innerHTML = ''; // Limpiar la cuadrícula
    models.forEach(model => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = cardTpl(model).trim();
      grid.appendChild(wrapper.firstElementChild);
    });
  }

  // Renderizar todos los modelos inicialmente
  renderModels(modelsData);

  // Función de búsqueda
  function performSearch() {
    const query = mainSearchInput.value.trim().toLowerCase();
    if (query) {
      const filteredModels = modelsData.filter(model =>
        model.name.toLowerCase().includes(query) ||
        model.description.toLowerCase().includes(query)
      );
      renderModels(filteredModels);
      console.log('Buscando:', query, 'Resultados:', filteredModels.length);
    } else {
      renderModels(modelsData); // Mostrar todos los modelos si el campo está vacío
    }
  }

  // Event listeners para la búsqueda
  mainSearchBtn.addEventListener('click', performSearch);
  mainSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  // Actualizar la búsqueda en tiempo real mientras se escribe
  mainSearchInput.addEventListener('input', performSearch);
});