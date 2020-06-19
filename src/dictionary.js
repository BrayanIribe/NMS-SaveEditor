const es = {
  WELCOME_TEXT: `Bienvenido a mi webapp, aquí podrás modificar la dificultad de No Man's Sky con unos clics.`,
  WARNING_RISK_DIALOG: `<b>ADVERTENCIA:</b> No me hago responsable por cualquier daño que puedas provocarte por usar esto. Úsalo bajo tu riesgo.`,
  SHORT_DESC: `Sigue la siguiente guía al pie de la letra para lograr el efecto deseado.`,
  DRAG_N_DROP_SV: `Ahora que tienes tu save data, arrástralo y suéltalo haz clic para seleccionarlo.`,
  ERROR_WRONG_SV: `El save data que pusiste no es correcto. Tiene que ser un archivo con extensión HG.`,
  steps: [
    {
      id: 0,
      img: "/img/run.png",
      title: "Paso 1 - Ir al appdata",
      body:
        'En Windows, usa Win+R para abrir la ventana de ejecutar. Aquí, escribe "%appdata%".',
    },
    {
      id: 1,
      img: "/img/hellogames-folder.png",
      title: "Paso 2 - Hacer backup de la carpeta HelloGames",
      body:
        "Dentro de la carpeta appdata, busca la carpeta HelloGames y haz una copia de ella.",
    },
    {
      id: 2,
      img: "/img/hellogames-folder-contents.png",
      title: "Paso 3 - Busca tu save data",
      body:
        "Entra a la carpeta HelloGames y posterior a NMS. Aquí habrán muchas carpetas, ordenalas por fecha de modificación y entra a la primera.",
    },
    {
      id: 3,
      img: "/img/savedata-files.png",
      title: "Paso 4 - Busca tu archivo save data",
      body:
        "Habrán muchos archivos, los que empiezan con save son tus save datas. Se encuentran ordenados por fecha de modificación, así que toca deducir cual por el último jugado. NO TOQUES ningún otro archivo.",
    },
  ],
};

const en = {
  WELCOME_TEXT: `Welcome to my simple webapp. Here, you can edit your No Man's Sky difficulty with a few clicks.`,
  WARNING_RISK_DIALOG: `<b>WARNING:</b> I'm not responsible for any damage that you could take by using this. Use it at your own risk!`,
  SHORT_DESC: `Follow the next guide to change the difficulty of your game.`,
  DRAG_N_DROP_SV: `Now that you have your save data, Drag'n'Drop here or clic on it to find it.`,
  ERROR_WRONG_SV: `You gave me the wrong save data. It must be a HG file.`,
  steps: [
    {
      id: 0,
      img: "/img/run.png",
      title: "Step 1 - Go to appdata",
      body: 'In Windows, use Win+R to open Run dialog. Here, type "%appdata%".',
    },
    {
      id: 1,
      img: "/img/hellogames-folder.png",
      title: "Step 2 - Do backup of HelloGames folder",
      body:
        "Inside the appdata folder, find the HelloGames and do a backup of it.",
    },
    {
      id: 2,
      img: "/img/hellogames-folder-contents.png",
      title: "Step 3 - Find your save data folder",
      body:
        "Get inside HelloGames and enter to NMS folder, here find your save data. There could be multiple matches, sort them by date to get the desired one.",
    },
    {
      id: 3,
      img: "/img/savedata-files.png",
      title: "Step 4 - Find your save data file",
      body:
        "The save files are your save datas. DO NOT TOUCH mf_save or other files here!. Pick the desired save data, they're sorted by modification date.",
    },
  ],
};

export { es, en };
