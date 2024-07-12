const User = ({ user }) => {

  if (user) {
    return(
      <div>user account page</div>
      )
} else {
    return(
      <div>
        <div>sign in</div>
        <div>sign up</div>
      </div>
    )
  }
};

export default User;