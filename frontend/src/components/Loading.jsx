import { Spinner } from "@chakra-ui/react";

const Loading = () => {
  const styles = {
    heroSubtitle: {
      fontSize: "1.5rem",
      color: "#666",
      margin: "0 0 2rem 0",
    },
  };

  return (
    <div>
      <h2 style={styles.heroSubtitle}>Loading...</h2>
      <Spinner size="xl" />
    </div>
  );
};

export default Loading;
