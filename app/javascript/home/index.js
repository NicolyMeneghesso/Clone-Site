document.querySelectorAll(".carousel-overlay p").forEach((el) => {
    const maxLines = 4;
    const lineHeight = parseFloat(window.getComputedStyle(el).lineHeight);
    const maxHeight = maxLines * lineHeight;
  
    if (el.scrollHeight > maxHeight) {
      el.style.overflow = "hidden";
      el.style.textOverflow = "ellipsis";
      el.style.display = "-webkit-box";
      el.style.webkitBoxOrient = "vertical";
      el.style.webkitLineClamp = maxLines;
    }
});