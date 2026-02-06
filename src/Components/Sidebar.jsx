<<<<<<< HEAD
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h4>Search</h4>
      <input type="text" placeholder="Search items" />

      <h4>Sort</h4>
      <select>
        <option>Featured</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>

      <h4>Price</h4>
      <input type="range" min="0" max="1200" />
      <div className="price-range">
        <span>AED 0</span>
        <span>AED 1200</span>
      </div>

      <button className="clear-btn">Reset Filters</button>
    </aside>
  );
};

export default Sidebar;
=======
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h4>Search</h4>
      <input type="text" placeholder="Search items" />

      <h4>Sort</h4>
      <select>
        <option>Featured</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>

      <h4>Price</h4>
      <input type="range" min="0" max="1200" />
      <div className="price-range">
        <span>AED 0</span>
        <span>AED 1200</span>
      </div>

      <button className="clear-btn">Reset Filters</button>
    </aside>
  );
};

export default Sidebar;
>>>>>>> 2591678f67b9df7a12de2aeaef5945965f7b1f81
