import ScoreCard from "./components/ScoreCard";
import Commentary from "./components/Commentary";

function App() {
  return (
    <div className="p-6">
      <ScoreCard match={match} />
      <Commentary commentary={match.commentary} />
    </div>
  );
}