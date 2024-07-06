function sortPosts(posts) {
  const postCount = posts.length;

  const sortByDate = () => {
    return posts.sort(
      (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
    );
  };

  const getRelatedPosts = (tags) => {
    if (!Array.isArray(tags)) {
      tags = [tags];
    }

    const allRelatedPosts = [];

    tags.forEach((tag) => {
      const relatedPosts = posts.filter((post) =>
        post.data.tags?.includes(tag)
      );
      allRelatedPosts.push(...relatedPosts);
    });

    return [...new Set(allRelatedPosts)];
  };

  return { sortByDate, postCount, getRelatedPosts };
}

export { sortPosts };
