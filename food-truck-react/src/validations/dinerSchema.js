import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(5, "username must be at least 5 characters long"),

    password: yup.string()
  .required('No password provided.') 
  .min( 6,'Password needs to be 6 characters minimum'),
    //dropbox under
  trucksOwned: yup
    .string()
    .oneOf(["Taco Truck","Pizza Truck","Mediterran Truck","Other"], "Must Choose One Truck type"),
 
  
  currentLocation : yup
   .string()
   .required("An addresss needs to be added"),
  
  
});
