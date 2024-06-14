import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import Spinner from "../components/Spinner";
import { useAuthContext } from "../context/AuthContext";

const HomePage = () => {
  const { authUser } = useAuthContext();
  // to fetch data of the userprofile
  const [userProfile, setUserProfile] = useState(null);
  // to fetch the data of repos of that user
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  //for the sorting functionality accroding to most recent , most stars and most forks
  const [sortType, setSortType] = useState("recent");

  // handle the getUserProfileAndRepos function
  // uses the callback function to get not be in of infinite loop
  const getUserProfileAndRepos = useCallback(
    async (username = authUser.username) => {
      setLoading(true);
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const { repos, userProfile } = await res.json();

        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first
        setRepos(repos);
        setUserProfile(userProfile);

        return { userProfile, repos };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // to fetch the data
  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  // handle the searching functionality by the username
  const onSearch = async (e, username) => {
    e.preventDefault();

    // setting to the intial values (empty values)
    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    // get the search usered detailes for the getuserprofileandrepo
    const { userProfile, repos } = await getUserProfileAndRepos(username);

    //updatting the userProfile values and the repos
    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
    setSortType("recent");
  };

  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // descending, recent first
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count); // descending, most stars first
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count); //descending, ,most forks first
    }

    //updating the order of repos(sort)
    setSortType(sortType);
    // updating repos
    setRepos([...repos]);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
