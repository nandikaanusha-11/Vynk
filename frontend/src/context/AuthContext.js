import {useState,createContext} from "react";

export const AuthContext= createContext();
export function AuthProvider({children}){ //the function AuthProvider will provide the details to the other components
   const [user,setUser]=useState(null);
   const logout=()=>{
       
      localStorage.removeItem("token");
      setUser(null);
       
   };
   return( 
     <AuthContext.Provider value={{user,setUser,logout}}>
        {children}
     </AuthContext.Provider>
   );
}

//children-the components to which the information is passed and values ={{user,setUser} are the values passed to the children}