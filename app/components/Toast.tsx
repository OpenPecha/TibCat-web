import toast from "react-hot-toast";

export default function Toast( message : string) {
 toast.success(message, {
   style: {
     border: "1px solid #D4D4D4",
     padding: "14px",
     fontSize: "14px",
     fontWeight: "500",
   },
 });
}
