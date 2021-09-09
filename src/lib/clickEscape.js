function clickEscape(element, callbackFunction) {
  function onClick(event) {
    if (event.key === "Escape") {
      callbackFunction();
    }
  }
  setTimeout(() => {
    window.addEventListener("keydown", onClick)
  }, 50)
  return {
    update(newCallbackFunction) {
      callbackFunction = newCallbackFunction;
    },
    destroy() {
      window.addEventListener("keydown", onClick)
    }
  }
}
export default clickEscape