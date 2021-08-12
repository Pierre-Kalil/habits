import {HabitsProvider} from "./habits/"
import {GroupsProvider} from "./groups"
import { UserProvider } from "./user"

const Providers = ({children}) => {
    return(
      <HabitsProvider>
          <GroupsProvider>
              <UserProvider>
                {children}
              </UserProvider>
          </GroupsProvider>
      </HabitsProvider>  
    )
}

export default Providers;
