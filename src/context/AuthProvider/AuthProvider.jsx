import AuthContext from "../AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
  const user = { name: "Khaled" };

  const authInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
