const handleLanguageChange = (app, lang) => {
  if (localStorage) {
    localStorage.setItem("lang", lang)
  }
  if (app) {
    const momentLocal = lang === "ar" ? "ar" : "en-nz"
    app.$i18n.setLocale(lang)
    app.$moment.locale(momentLocal)
    app.$nuxt.refresh()
  }
  if (typeof document !== "undefined") {
    document.querySelector("html").setAttribute("lang", lang)
    document
      .querySelector("html")
      .setAttribute("dir", lang === "ar" ? "rtl" : "ltr")
  }
}
export { handleLanguageChange }
