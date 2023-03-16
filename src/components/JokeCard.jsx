function JokeCard({ setup, punchline }) {
  console.log(setup, punchline);
  return (
    <div className="card">
      <h5 className="card-setup">{setup}</h5>
      <p className="card-punchline">{punchline}</p>
    </div>
  );
}

export default JokeCard;
