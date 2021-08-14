import { HabitsProvider } from "./habits/";
import { GroupsProvider } from "./groups";
import { UserProvider } from "./user";
import { AuthProvider } from "./auth";
import { CommunityProvider } from "./community";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <CommunityProvider>
          <GroupsProvider>
            <UserProvider>{children}</UserProvider>
          </GroupsProvider>
        </CommunityProvider>
      </HabitsProvider>
    </AuthProvider>
  );
};

export default Providers;
