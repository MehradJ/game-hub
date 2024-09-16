import useGame from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <ul>
      {error && <p>{error}</p>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
