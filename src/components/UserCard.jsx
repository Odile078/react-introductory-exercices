function UserCard({ avatar, first_name, last_name, employment, email }) {
  return (
    <div className="card">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={avatar} alt="Avatar" height={300} width={300} />
            <div className="flip-card-details">
              <h1>
                {first_name} {last_name}
              </h1>
              <p>{employment?.title}</p>
            </div>
          </div>
          <div class="flip-card-back">
            <h1>
              {first_name} {last_name}
            </h1>
            <p>{employment?.title}</p>
            <p>{employment?.key_skill}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
