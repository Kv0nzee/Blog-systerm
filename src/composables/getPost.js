const { ref } = require("vue");
import  {db} from "../firebase/config"
let getPost=(id)=>{
    let post=ref(null);
    let error=ref("");

    let load=async()=>{
        try{
            // await new Promise((resolve,reject)=>{
            //     // resolve();
            //     setTimeout(resolve,2000)
            // })
            let doc= await db.collection("posts").doc(id).get()
            post.value ={id:doc.id,...doc.data()}
        }catch(err){
            error.value=err.message;
        }
    }
    return {post,error,load};
}

export default getPost;