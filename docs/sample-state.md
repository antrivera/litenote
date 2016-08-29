```json
{
  currentUser: {
    id: 1,
    username: "guest"
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: ["Invalid username/password"]},
    createNote: {errors: []}
  },
  notes: {
    1: {
      title: "My First Note",
      body: "Taking notes is fun.",
      author_id: 1,
      notebook_id: 1,
      tags: {
        1: {
          id: 1,
          name: "fun"
        },
        2: {
          id: 2,
          name: "full stack"
        }
      }
    }
  },
  notebooks: {
    1: {
      title: "General",
      author_id: 1
    }
  },
  tagFilters: []
}
```
