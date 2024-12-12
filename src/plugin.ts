penpot.ui.open("Lucky Tools!", `Penpot-Lucky-Tools/?theme=${penpot.theme}`, {
  width: 300,
  height: 370,
});

// Update the theme in the iframe
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});
