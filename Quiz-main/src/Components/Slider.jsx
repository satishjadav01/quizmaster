export default function Sliderr() {
  const logos = [
    "angular",
    "css3",
    "django",
    "docker",
    "express",
    "github",
    "gitlab",
    "git",
    "html",
    "javascript",
    "laravel",
    "mysql",
    "php",
    "next-js",
    "python",
    "react",
    "sass",
    "vue-js",
    "typescript",
  ];

  return (
    <div className="relative w-full overflow-hidden  py-5 rounded-xl my-20 grayscale">
      <div className="marquee">
        <div className="marquee__track">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="marquee__item">
              <img
                src={`/images/logos/${logo}-logo.png`}
                alt={logo}
                className="h-10 w-auto opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
