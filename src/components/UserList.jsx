import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux/slices/users";

function UserList() {
  
  const {list} = useSelector(state=>state.users); // accede al store y busca el users

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, []);

  return (
    <div className="container">
        <div className="row">
            {list?.map((user,index) => (
                <div key={index} className="col-sm">
                    <div className="card" style={{width: 200}}>
                        <img src={user.avatar} alt="avatar" />
                        <div className="card-body">
                            <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                            <p className="card-text">{user.email}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UserList;
