import { useRef, useState, useCallback } from 'react';
import VisualPanel, { createHearts } from './VisualPanel';
import MessagePanel from './MessagePanel';
import '../../styles/RoseDay.css';

function RoseDay() {
  const roseRef = useRef(null);
  const [isBlooming, setIsBlooming] = useState(false);
  const [extraRoses, setExtraRoses] = useState([]);

  const bloom = useCallback(() => {
    setIsBlooming(true);
    createHearts(roseRef);

    setTimeout(() => {
      setIsBlooming(false);
    }, 600);
  }, []);

  const addRose = useCallback(() => {
    const newRose = {
      id: Date.now() + Math.random(),
      left: Math.random() * 80,
      top: Math.random() * 70,
      rotation: Math.random() * 360,
      opacity: 0,
    };

    setExtraRoses((prev) => [...prev, newRose]);

    setTimeout(() => {
      setExtraRoses((prev) =>
        prev.map((r) =>
          r.id === newRose.id ? { ...r, opacity: 0.8 } : r
        )
      );
    }, 10);
  }, []);

  return (
    <div className="rose-day">
      <div className="rose-day-body">
        <div className="stage">
          <VisualPanel
            roseRef={roseRef}
            isBlooming={isBlooming}
            extraRoses={extraRoses}
          />
          <MessagePanel onBloom={bloom} onAddRose={addRose} />
        </div>
      </div>
    </div>
  );
}

export default RoseDay;
