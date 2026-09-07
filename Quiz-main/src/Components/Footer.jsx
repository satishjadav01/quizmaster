import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-10 text-white/40">
      <p>© 2026 Quiz. All rights reserved.</p>
      <a href="https://github.com/Abdullah-warraich-ch/Quiz">
        <img
          src="/images/logos/github-logo.png"
          alt=""
          srcset=""
          className="h-5 text-white/40 hover:text-white/60"
          target="_blank"
        />
      </a>
    </div>
  );
}

export default Footer;
