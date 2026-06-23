function Commentary({ commentary }) {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="font-bold mb-2">
        Live Commentary
      </h2>

      {commentary.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Commentary;