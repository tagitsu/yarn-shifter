const User = ({ user }) => {

  user = 'Julia'

  if (user) {
    return(
      <div>
        <h2>{user}'s account page</h2>
        <p></p>
      </div>
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