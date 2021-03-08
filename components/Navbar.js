export default function Navbar ({ children }) {
    return (
        <div className="navbar">
          { children }
          <style jsx>{`
            .navbar {
                background-color: #eeeee8;
                padding: 1px 50px;
                display: flex;
                justify-content: space-between;
            }
          `}
          </style>
        </div>
    );
}