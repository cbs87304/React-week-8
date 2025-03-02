import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>首頁</h1>
      <p>歡迎來到我們的購物網站！</p>
      <Link to="/carts">
        <button>前往購物車</button>
      </Link>
    </div>
  );
}

export default HomePage; 
