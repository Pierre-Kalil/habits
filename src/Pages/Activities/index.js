import { useActivities } from "../../Providers/actives";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/auth";

const Activities = () => {
  const { showActivities } = useActivities();

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />
  }
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
