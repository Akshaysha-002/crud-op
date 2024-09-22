import  express  from "express";
import { CreatUser, GetUser,UpdateUser,DeletUser} from "../controller/userController.js";

const routers = express.Router();


// Route for creating a user
routers.post(`/create`, CreatUser);
// Route for getting users
routers.get(`/get`, GetUser);
// route for upadte users
routers.put(`/update/:id`, UpdateUser);
// route for deletUsers
routers.delete(`/delete/:id`,DeletUser);

// routers.post("/create", create);



export default routers;