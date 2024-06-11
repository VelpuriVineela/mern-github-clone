export const getUserProfileAndRepos = async (req, res) => {
  const { username } = req.params;

  try {
    // fetch the user Profile
    // fetch the user Profile
    // 60 requests per hour, 5000 requests per hour for authenticated requests
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const userProfile = await userRes.json();

    //fetch the respos of the user
    const repoRes = await fetch(userProfile.repos_url, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const repos = await repoRes.json();

    res.status(200).json({
      userProfile,
      repos,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
