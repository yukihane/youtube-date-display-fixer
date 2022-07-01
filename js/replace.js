(() => {
  const replace = () => {
    const date = document.querySelector(
      "#info-strings.ytd-video-primary-info-renderer"
    );
    const count = document.querySelector("span.ytd-video-view-count-renderer");

    if (date && count) {
      const dateText = date.innerText.toString();
      console.log(dateText);
      count.innerText = `${dateText} ` + count.innerText;
      date.innerText = "";
      console.log(count.innerText);
    } else {
      console.log("empty text");
    }
  };

  setTimeout(replace, 500);
})();
