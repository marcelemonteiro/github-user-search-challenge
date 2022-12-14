import locationIcon from "../assets/icon-location.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";
import companyIcon from "../assets/icon-company.svg";
import "./User.css";

function User({ user }) {
  const formatDate = (date) => {
    const dateObject = new Date(date);
    const day = dateObject.getDate();
    const month = dateObject.toLocaleDateString("en-US", {
      month: "short",
    });
    const year = dateObject.getFullYear();
    return `${day} ${month} ${year}`;
  };

  if (!user) {
    return (
      <div className="User full">
        <p>Usuário não encontrado :(</p>
      </div>
    );
  }

  return (
    <div className="User">
      <div className="userAvatar">
        <img src={user.avatar_url} alt="User Avatar" />
      </div>
      <div className="userHeader">
        <div className="userName">
          <h2>{user.name}</h2>
          <span>@{user.login}</span>
        </div>
        <p className="userCreatedDay">Joined {formatDate(user.created_at)}</p>
      </div>
      <p className="userBio">
        {user.bio ? user.bio : "This profile has no bio"}
      </p>
      <div className="userNumbers">
        <div className="userRepos">
          <span>Repos</span>
          <p>{user.public_repos}</p>
        </div>
        <div className="userFollowers">
          <span>Followers</span>
          <p>{user.followers}</p>
        </div>
        <div className="userFollowing">
          <span>Following</span>
          <p>{user.following}</p>
        </div>
      </div>
      <div className="userLinks">
        <div className={`userLocation ${user.location || "not-available"}`}>
          <img src={locationIcon} alt="Location Icon" />
          <span>{user.location || "Not Available"}</span>
        </div>
        <div
          className={`userTwitter ${user.twitter_username || "not-available"}`}
        >
          <img src={twitterIcon} alt="Twitter Icon" />
          <span>{user.twitter_username || "Not Available"}</span>
        </div>
        <div className={`userWebsite ${user.blog || "not-available"}`}>
          <img src={websiteIcon} alt="Website Icon" />
          <span>{user.blog || "Not Available"}</span>
        </div>
        <div className={`userCompany ${user.company || "not-available"}`}>
          <img src={companyIcon} alt="Company Icon" />
          <span>{user.company || "Not Available"}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
