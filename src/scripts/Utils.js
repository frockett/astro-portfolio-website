

function sortPosts(posts)
{
  const postCount = posts.length;

  const sortByDate = () => {
    return posts.sort(
      (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
    );
  };

  return { sortByDate, postCount };
}

export { sortPosts };
