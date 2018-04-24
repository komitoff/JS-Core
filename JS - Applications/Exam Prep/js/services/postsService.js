let postsService = (() => {
  'use strict';

  //get request
  function getAllPosts() {
    let endPoint = 'posts?query={}&sort={"_kmd.ect": -1}';
    return remote.get('appdata', endPoint, 'kinvey');
  }

  function getMyPosts(username) {
    let endPoint = `/posts?query={"author":"${username}"}&sort={"_kmd.ect": -1}`;

    remote.get('appdata', endPoint, 'kinvey');
  }

  function getPostById(postId) {
    let endPoint = `posts/${postId}`;

    remote.get('appdata', endPoint, 'kinvey');
  }

  //post request
  function createPost(author, title, desc, url, imgUrl) {
    let data = { author, title, desc, url, imgUrl };
    let endPoint = 'posts';
    return remote.post('appdata', endPoint, 'kinvey', data);
  }

  //put request
  function editPost(postId, author, title, desc, url, imgUrl) {
    let data = { author, title, desc, url, imgUrl };
    let endPoint = `posts/${postId}`;
    return remote.update('appdata', endPoint, 'kinvey', data);
  }

  //delete request
  function deletePost(postId) {
    let endPoint = `posts/${postId}`;
    return remote.remove('appdata', endPoint, 'kinvey');
  }

  return {
    getAllPosts,
    getMyPosts,
    getPostById,
    editPost,
    deletePost,
    createPost
  }
})();