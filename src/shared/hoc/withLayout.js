const withLayout = (Component, Layout) => {

  const LayoutWrapper = (props) => {
    return (
      <Layout>
        <Component />
      </Layout>
    );
  };

  return LayoutWrapper;
};

export default withLayout;
