let chirpService = (() => { 

  //subs is array of subscriptions
  function getAllChirpsFromSubs(subs) {
    const endpoint = `chirps?query={"author":{"$in": ${subs}}}&sort={"_kmd.ect": 1}`;
    return remote.get('appdata', endpoint, 'kinvey');
  }

  //create new chirp into db
  function createChirp(text, author) {
    const endpoint = `chirps`;
    let data = { text, author };
    return remote.post('appdata', endpoint, 'kinvey', data);
  }

  //deletes entry by given id
  function deleteChirp(chirpId) {
    const endpoint = `chirps/${chirpId}`;
    return remote.remove('appdata', endpoint, 'kinvey');
  }

  //User Chirps (View all chirps by user, sorted by post time, descending)
  function getUserChirps(username) {
    const endpoint = `chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`;
    return remote.get('appdata', endpoint, 'kinvey');
  }

  function getChirpsCount(username) {
    const endpoit = `chirps?query={"author":"${username}"}`;
    return remote.get('appdata', endpoit, 'kinvey');
  }

  function getFollowing(username) {
    const endpoint = `chirps?query={"username":"${username}"}`;
    return remote.get('appdata', endpoint, 'kinvey');
  }

  function getFollowers(username) {
    const endpoint = `chirps?query={"subscriptions":"${username}"}`;
    return remote.get('appdata', endpoint, 'kinvey');
  }

  return {
    getAllChirpsFromSubs,
    createChirp,
    deleteChirp,
    getUserChirps,
    getChirpsCount,
    getFollowing,
    getFollowers
  };

})();