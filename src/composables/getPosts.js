import { ref } from "vue";
import  {db} from "../firebase/config"
let getPosts=()=>{
    let posts=ref([]);
      let error=ref("");
      let load=async()=>{
         try{
            // await new Promise((resolve,reject)=>{
            //    // resolve();
            //    setTimeout(resolve,2000)
            // })
         await db.collection("posts").orderBy("title","asc").onSnapshot((snap) => {
            posts.value = snap.docs.map((doc) => {
               return {id:doc.id,...doc.data()}
           })
         })
         }catch(err){
            // console.log(error.message)
            error.value=err.message;
         }
      }
      return {posts,error,load};
}
export default getPosts;