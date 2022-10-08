window.onload = function () {
  const PARALLAX = document.querySelector(".parallax");

  if (PARALLAX) {
    const PARALLAX_GROUND = document.querySelector(".img-parallax__ground");
    const PARALLAX_SUNSET = document.querySelector(".img-parallax__sunset");

    const PARALLAX_SETTINGS = {
      groundOdd: 20,
      sunsetOdd: 40,
      speed: 0.05,
    };

    let positionX = 0,
      positionY = 0;
    let xCoordProcent = 0,
      yCoordProcent = 0;

    const setMouseParallaxStyle = () => {
      const distX = xCoordProcent - positionX;
      const distY = yCoordProcent - positionY;

      positionX = positionX + distX * PARALLAX_SETTINGS.speed;
      positionY = positionY + distY * PARALLAX_SETTINGS.speed;

      PARALLAX_GROUND.setAttribute(
        "style",
        `transform: translate(${positionX / PARALLAX_SETTINGS.groundOdd}%, ${
          positionY / PARALLAX_SETTINGS.groundOdd
        }%);`
      );
      PARALLAX_SUNSET.setAttribute(
        "style",
        `transform: translate(${positionX / PARALLAX_SETTINGS.sunsetOdd}%, ${
          positionY / PARALLAX_SETTINGS.sunsetOdd
        }%);`
      );

      requestAnimationFrame(setMouseParallaxStyle);
    };
    setMouseParallaxStyle();

    PARALLAX.addEventListener("mousemove", function (e) {
      const parallaxWidth = PARALLAX.offsetWidth;
      const parallaxHeight = PARALLAX.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      xCoordProcent = (coordX / parallaxWidth) * 100;
      yCoordProcent = (coordY / parallaxHeight) * 100;
    });

    const LABEL_TEXT = document.querySelector(".parallax__label");

    if (LABEL_TEXT) {
      LABEL_TEXT.classList.add("_active");
    }
  }
};

const LANGUAGE_BAR = document.querySelector(".parallax__language-bar")

if(LANGUAGE_BAR) {
  const languageBarItems = LANGUAGE_BAR.children

  LANGUAGE_BAR.addEventListener('click', (e) => {
    for (let i = 0; i < languageBarItems.length; i++) {
      languageBarItems[i].classList.remove("_active")
    }
    e.target.classList.add("_active")
  })
}
