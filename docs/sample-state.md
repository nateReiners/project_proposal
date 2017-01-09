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
  albums: {
    1: {
      owner_id: 1,
      photos: [picObj1, picObj2, picObj3]
    },
    2: {
      owner_id: 2,
      photos: [picObj1, picObj2, picObj3]
    }
  }
  }
  photos: {
    1: {
        title: "Beach",
        author_id: 1,
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
      followee_id: 4
    }
  },
}
