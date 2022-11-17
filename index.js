const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const line = $(".tabs .line");

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    const tabActive = $(".tab-item.active");
    const paneActive = $(".tab-pane.active");

    tabActive.classList.remove("active");
    paneActive.classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
