const dashboard = ({ authenticated }) => {
  authenticated = true;
  if (authenticated) {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  } else return null;
};

export default dashboard;
