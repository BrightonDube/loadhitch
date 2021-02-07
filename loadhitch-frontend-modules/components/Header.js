const Header = () => (
  <div>
    <div className="bg"></div>
    <style jsx>
      {`
        .bg {
          background-image: url(" + ${require("../public/truck.jpg")} + ");

          /* Full height */
          height: 100vh;

          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}
    </style>
  </div>
);
export default Header;
