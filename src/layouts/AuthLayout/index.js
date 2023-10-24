const AuthLayout = ({ children }) => {
  return (
    <div>
      <header>Header Auth</header>
      {children}
      <footer>Footer Auth</footer>
    </div>
  );
};

export default AuthLayout;
