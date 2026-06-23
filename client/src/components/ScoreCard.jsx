function ScoreCard({ match }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold">
        {match.team1} vs {match.team2}
      </h2>

      <h1 className="text-4xl mt-4">
        {match.runs}/{match.wickets}
      </h1>

      <p>Overs: {match.overs}</p>

      <p>Striker: {match.striker}</p>
      <p>Non-Striker: {match.nonStriker}</p>
      <p>Bowler: {match.bowler}</p>
    </div>
  );
}

export default ScoreCard;