import Lanyard from './Lanyard';
import './widget.css';

export default function App() {
  return (
    <main className="lanyard-widget-shell">
      <Lanyard
        position={[0, 0, 20]}
        gravity={[0, -40, 0]}
        frontImage="./profile.jpg"
        imageFit="cover"
        lanyardWidth={1}
      />
    </main>
  );
}
