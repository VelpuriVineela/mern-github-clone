import User from "../models/user.model.js";

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

export const likeProfile = async (req, res) => {
  try {
    const { username } = req.params;
    //Authenticated user(login user)
    const user = await User.findById(req.user._id.toString());
    console.log(user, "auth user");
    const userToLike = await User.findOne({ username });

    if (!userToLike) {
      return res.status(404).json({ error: "user is not a member" });
    }

    //user is already liked the profile
    if (user.likedProfiles.includes(userToLike.username)) {
      return res.status(400).json({
        error: "User already liked",
      });
    }

    //storaging the liked user details in database
    userToLike.likedBy.push({
      username: user.username,
      avatarUrl: user.avatarUrl,
      likedDate: Date.now(),
    });
    user.likedProfiles.push(userToLike.username);

    // await userToLike.save();
    // await user.save();
    await Promise.all([userToLike.save(), user.save()]);

    res.status(200).json({ message: "user liked" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLikes = async (req, res) => {
  try {
    const user = await User.findById(req.user._id.toString());
    res.status(200).json({ likedBy: user.likedBy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
