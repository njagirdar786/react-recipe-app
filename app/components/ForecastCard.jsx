const ForecastCard = ({ day }) => {
  return (
    <div className="stats">
      <div className="stat">
        <div className="card-title">{day.date}</div>
        <div className="stat-value">{day.day.condition.text}</div>
        <div className="kbd bg-gradient-to-br from-blue-500 to-gray-900 mt-2">
          <img
            src={"https:" + day.day.condition.icon}
            alt="icon"
            height="40"
            width="40"
          />
        </div>
        <div className="btn">View more</div>
      </div>
    </div>
  );
};

export default ForecastCard;
