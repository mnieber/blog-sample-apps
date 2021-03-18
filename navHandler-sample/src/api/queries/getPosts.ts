export const getPosts = () => {
  return {
    posts: [
      {
        name: 'My MobX journey',
        body: 'I started out writing React apps using redux...',
        id: '1',
      },
      {
        name: 'Switching to Vite',
        body: 'As the name suggests, Vite is fast...',
        id: '2',
        state: 'not done',
      },
    ],
    archivedPosts: [
      {
        name: 'Using create-react-app',
        body: 'Create-react-app has made it very easy to quickly create a new React application...',
        id: '3',
      },
      {
        name: 'Combining UIkit with TailwindCSS',
        body: 'UIkit is a high quality toolkit that helps you to...',
        id: '4',
      },
    ],
  };
};
