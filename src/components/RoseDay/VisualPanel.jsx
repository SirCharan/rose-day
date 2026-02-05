import Rose from './Rose';
import Bow from './Bow';

function createHearts(roseRef) {
  if (!roseRef?.current) return;

  const rose = roseRef.current;

  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.innerText = '❤';
    heart.style.position = 'fixed';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';

    const roseRect = rose.getBoundingClientRect();
    const roseTipX = roseRect.left + roseRect.width / 2;
    const roseTipY = roseRect.top + 80;

    heart.style.left = roseTipX + 'px';
    heart.style.top = roseTipY + 'px';
    heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
    heart.style.color = Math.random() > 0.5 ? '#D92B4B' : '#FF9EB5';
    heart.style.textShadow = '2px 2px 0px #592828';
    document.body.appendChild(heart);

    const angle = Math.random() * Math.PI * 0.8 - Math.PI * 0.9;
    const distance = Math.random() * 200 + 150;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    const anim = heart.animate(
      [
        { transform: 'translate(0,0) scale(0) rotate(0deg)' },
        {
          transform: `translate(${x}px, ${y}px) scale(1) rotate(${Math.random() * 360}deg)`,
          opacity: 1,
        },
        {
          transform: `translate(${x}px, ${y + 100}px) scale(0) rotate(${Math.random() * 720}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        easing: 'cubic-bezier(0, .9, .57, 1)',
      }
    );

    anim.onfinish = () => heart.remove();
  }
}

function VisualPanel({ roseRef, isBlooming, extraRoses }) {
  return (
    <div className="card visual-panel">
      <Bow />
      <h1>
        Happy
        <br />
        <span>Rose Day</span>
      </h1>
      <Rose
        id="rose"
        ref={roseRef}
        className={isBlooming ? 'rose-blooming' : ''}
        style={
          isBlooming
            ? {
                transform: 'scale(1.4) rotate(10deg)',
              }
            : undefined
        }
      />
      {extraRoses.length > 0 && (
        <div className="extra-roses">
          {extraRoses.map((rose) => (
            <Rose
              key={rose.id}
              isExtra
              style={{
                left: rose.left + '%',
                top: rose.top + '%',
                transform: `rotate(${rose.rotation}deg) scale(0.6)`,
                opacity: rose.opacity,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            />
          ))}
        </div>
      )}
      <div className="deco-heart d1">❤</div>
      <div className="deco-heart d2">❤</div>
    </div>
  );
}

export default VisualPanel;
export { createHearts };
