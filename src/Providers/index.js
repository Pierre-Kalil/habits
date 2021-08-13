import {HabitsProvider} from "./habits/";
import {GroupsProvider} from "./groups";
import { UserProvider } from "./user";
import { AuthProvider } from "./auth"

const Providers = ({children}) => {
    return(
      <AuthProvider>
      <HabitsProvider>
          <GroupsProvider>
              <UserProvider>
                {children}
              </UserProvider>
          </GroupsProvider>
      </HabitsProvider>
      </AuthProvider>
    )
}

export default Providers;
