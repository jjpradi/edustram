import Cookies from "js-cookie"
import {Navigate,Route} from "react-router-dom"



const ProtectedRoute=({children})=>{


const jwt=Cookies.get("jwt_token")
console.log(jwt)

if(jwt===undefined){


return children

}
else{

return children


}




}

export default ProtectedRoute