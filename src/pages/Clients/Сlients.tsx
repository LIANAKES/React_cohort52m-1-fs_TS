import { Link } from 'react-router-dom';

function Clients() {
  return (
    <div>
      <h1>Clients</h1>
      <ul>
        <li>
          <Link to="/clients/technova">TechNova</Link>
        </li>
        <li>
          <Link to="/clients/ecosolutions">EcoSolutions</Link>
        </li>
        <li>
          <Link to="/clients/foodieshub">FoodiesHub</Link>
        </li>
      </ul>
    </div>
  );
}

export default Clients;