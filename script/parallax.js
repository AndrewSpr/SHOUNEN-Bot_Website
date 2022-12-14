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
    //Получаем элемент фона с деревом

    //При движении мышью вызываем функцию, которая меняет положение фона
    PARALLAX.addEventListener("mousemove", function (e) {
      MoveBackground(e);
    });

    function MoveBackground(e) {
      //Рассчитываем, насколько далеко от начала оси находится курсор: 0 - 0, 0.5 - середина экрана, 1 - ширина экрана (например, 1920)
      //Затем умножаем получившееся число на 30 - настолько будет сдвигаться фон
      //Например, если курсор находится посередине страницы (0.5), то при умножении получится 15
      //Далее отнимаем половину от 30, чтобы фон мог двигаться как влево, так и вправо
      let offsetX = (e.clientX / window.innerWidth) * 30 - 15;
      let offsetY = (e.clientY / window.innerHeight) * 10 - 5;

      //Меняем положение фона
      PARALLAX.setAttribute(
        "style",
        "background-position: " + offsetX + "px " + offsetY + "px;"
      );
    }
  }
};
