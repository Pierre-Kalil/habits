import { HabitsProvider } from "./habits/";
import { GroupsProvider } from "./groups";
import { UserProvider } from "./user";
import { AuthProvider } from "./auth";
import { CommunityProvider } from "./community";
import { ActivitiesProvider } from "./actives";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <CommunityProvider>
          <GroupsProvider>
            <ActivitiesProvider>
              <UserProvider>{children}</UserProvider>
            </ActivitiesProvider>
          </GroupsProvider>
        </CommunityProvider>
      </HabitsProvider>
    </AuthProvider>
  );
};

export default Providers;
