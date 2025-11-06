import { useState, useEffect } from 'react'


function App() {

  const images = ["/img/1.jpeg", "/img/2.jpeg", "/img/3.jpeg", "/img/4.jpeg", "/img/5.jpeg",
    "/img/6.jpeg", "/img/7.jpeg", "/img/8.jpeg", "/img/9.jpeg", "/img/10.jpeg",
    "/img/11.jpeg", "/img/12.jpeg", "/img/14.jpeg", "/img/15.jpeg",
    "/img/16.jpeg", "/img/17.jpeg", "/img/18.jpeg", "/img/19.jpeg", "/img/20.jpeg",
    "/img/21.jpeg", "/img/22.jpeg", "/img/23.jpeg", "/img/24.jpeg", "/img/25.jpeg",
    "/img/26.jpeg", "/img/27.jpeg", "/img/28.jpeg", "/img/29.jpeg", "/img/30.jpeg",
    "/img/31.jpeg", "/img/32.jpeg", "/img/33.jpeg", "/img/34.jpeg", "/img/35.jpeg",
    "/img/36.jpeg", "/img/37.jpeg", "/img/38.jpeg"]

  const letter = ['AURA', 'BLINK', 'EON', 'DREAM', 'ECHO', 'FLOW', 'GLOW', 'HAZE', 'IEON', 'JULE', 'LUCID', 'LUX', 'MIND', 'NOIR', 'ODE', 'PULSE', 'ARC', 'RISE', 'SOUL', 'THING', '0XY', 'VOID', 'WAVE', 'XON', 'YIN', 'ZEN']

  const [index, setindex] = useState(0)
  const [letex, setletex] = useState(0)
  const [fade, setFade] = useState(true);

  useEffect(() => {

    const handlescroll = (event) => {

      setFade(false);

      setTimeout(() => {


        if (event.deltaY > 0) {
          setindex((prev) => (prev + 1) % images.length);
        }
        else {
          setindex((prev) => (prev - 1 + images.length) % images.length);
        }

        setFade(true)
      }, 100);
    };
    window.addEventListener("wheel", handlescroll);

    let startY = 0;

    const handleTouchsrt = (e) => {
      startY = e.touches[0].clientY;

    };

    const handleTouchend = (e) => {
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) > 30) {
        setFade(false);
        setTimeout(() => {


          if (deltaY > 0) {
            setindex((prev) => (prev + 1) % images.length);

          }
          else {
            setindex((prev) => (prev - 1 + images.length) % images.length)
          }
          setFade(true);
        }, 100);
      }
    };

    window.addEventListener("touchstart", handleTouchsrt);
    window.addEventListener("touchend", handleTouchend);
    return () => {
      window.removeEventListener("wheel", handlescroll);
      window.removeEventListener("touchstart", handleTouchsrt);
      window.removeEventListener("touchend", handleTouchend);
    }
  }, []);

  useEffect(() => {
    const handlescroll = (words) => {
      setFade(false)
      setTimeout(() => {

        if (words.deltaY > 0) {
          setletex((next) => (next + 1) % letter.length);
        }
        else {
          setletex((next) => (next - 1 + letter.length) % letter.length);
        }
        setFade(true);
      }, 100);
    };
    window.addEventListener("wheel", handlescroll);

    let startY = 0;

    const handleTouchsrt = (e) => {
      startY = e.touches[0].clientY;

    };

    const handleTouchend = (e) => {
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) > 30) {
        setFade(false);
        setTimeout(() => {


          if (deltaY > 0) {
            setindex((prev) => (prev + 1) % letter.length);

          }
          else {
            setindex((prev) => (prev - 1 + letter.length) % letter.length)
          }
          setFade(true);
        }, 100);
      }
    };

    window.addEventListener("touchstart", handleTouchsrt);
    window.addEventListener("touchend", handleTouchend);
    return () => {
      window.removeEventListener("wheel", handlescroll);
      window.removeEventListener("touchstart", handleTouchsrt);
      window.removeEventListener("touchend", handleTouchend);
    }
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none -z-10 select-none animate-bgFloatSlow">
        <span className="bg-letter absolute top-[20%] left-[15%] animate-softFloat1">{letter[letex]}</span>
      </div>



      <div className="h-[calc(100vh_*_39)] ">
        <div className="w-[500px] h-[500px] rounded-full overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <img
            src={images[index]}
            alt=""
            className={`w-full h-full object-cover transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>

    </>
  );
};

export default App
