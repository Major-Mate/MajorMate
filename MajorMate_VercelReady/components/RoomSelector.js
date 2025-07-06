
import { useState } from 'react';

export default function RoomSelector() {
  const [room, setRoom] = useState("nursing-room");

  const handleChange = (e) => {
    setRoom(e.target.value);
  };

  return (
    <div style={{ padding: 20 }}>
      <label htmlFor="room-select">Choose a major: </label>
      <select id="room-select" value={room} onChange={handleChange}>
        <option value="nursing-room">Nursing</option>
        <option value="engineering-room">Engineering</option>
        <option value="computerscience-room">Computer Science</option>
        <option value="biology-room">Biology</option>
        <option value="business-room">Business</option>
        <option value="psychology-room">Psychology</option>
        <option value="education-room">Education</option>
        <option value="law-room">Law</option>
        <option value="math-room">Math</option>
        <option value="premed-room">Pre-Med</option>
      </select>

      <iframe
        allow="camera; microphone; fullscreen; display-capture"
        src={`https://your-subdomain.daily.co/${room}`}
        style={{
          width: "100%",
          height: "600px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          marginTop: "20px"
        }}
        title="Breakout Video Room"
      />
    </div>
  );
}
