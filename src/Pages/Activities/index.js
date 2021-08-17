import { useActivities } from "../../Providers/actives";

const Activities = () => {
  const { showActivities } = useActivities();

  return (
    <>
      <ul>
        {showActivities &&
          showActivities.map((active, index) => (
            <li key={index}>{active.title}</li>
          ))}
      </ul>
    </>
  );
};

export default Activities;
