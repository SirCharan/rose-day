import NoteCard from './NoteCard';

function MessagePanel({ onBloom, onAddRose }) {
  return (
    <div className="message-panel">
      <NoteCard />
      <button type="button" className="action-btn" onClick={onBloom}>
        Send Love!
      </button>
      <button type="button" className="action-btn" onClick={onAddRose} style={{ marginTop: '1rem' }}>
        More Roses 🌹
        <br />
        <span style={{ fontSize: '1rem', fontFamily: 'var(--f-body)' }}>1 rose = 1 bj</span>
      </button>
    </div>
  );
}

export default MessagePanel;
