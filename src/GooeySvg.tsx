type Options = {
  id?: string;
};

export default (opts: Options) => {
  var id = opts.id || "gooey-nav-svg";
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("version", "1.1");
  svg.id = id;
  svg.innerHTML = `
    <defs>
      <filter id="gooey-nav-shadowed-goo">
        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey-nav-goo" />
        <feGaussianBlur in="gooey-nav-goo" stdDeviation="3" result="shadow" />
        <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
        <feOffset in="shadow" dx="1" dy="1" result="shadow" />
        <feComposite in2="shadow" in="gooey-nav-goo" result="gooey-nav-goo" />
        <feComposite in2="gooey-nav-goo" in="SourceGraphic" result="mix" />
      </filter>
      <filter id="gooey-nav-goo">
        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey-nav-goo" />
        <feComposite in2="gooey-nav-goo" in="SourceGraphic" result="mix" />
      </filter>
    </defs>
  `;
  return svg;
};
