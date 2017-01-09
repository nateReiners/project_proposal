{
  currentUser: {
    id: 1,
    username: "nate-reiners"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    newPhoto: {errors: ["description can't be blank"]},
    editPhoto: {errors: ["description can't be blank"]}
  },

  }
  photos: {
    1: {
        title: "Beach",
        author_id: 1,
        album_id: 2,
        img_url: "images/6",
        views: 33,
        likes: 42,
        category: landscapes,
        date_posted: 12-23-16,
        description: "a great beach"
      },
    }
  },
  taggings: {
    1: {
      tag_id: 4,
      photo_id: 5
    }
  },
  follows: {
    1: {
      follower_id: 1,
      followed_id: 4
    }
  },
}
