<template>

  <div v-if="post" class="post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <button @click="deletePost">Delete</button>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
import {useRoute, useRouter} from "vue-router"
import {db} from "../firebase/config"
export default {
  components: { Spinner },
  props:["id"],//this.$route.parmas.id
  setup(props){
    let route=useRoute();// this.$route
    let router=useRouter();//this.$route.push
    // console.log(route.params.id);
    let {post,error,load}=getPost(route.params.id);//{post,error,load}
    load();
    let deletePost = async()=>{
      let id = props.id;
      await db.collection("posts").doc(id).delete();
      router.push("/");
    }
    return{post,error,deletePost}
  }
}
</script>

<style scoped>
  .post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }
  .post h2 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h2::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #B9E41F;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
  .post p{
    font-size: 18px;
    color: rgb(255, 255, 255);
    padding:20px;
    border-radius:3px;
    background:rgb(197, 123, 70);
    min-width: 400px;
    text-align:center;
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
  button{
    padding:15px;
    background:#B9E41F;
    border:none;
    border-radius: 20px;
    box-shadow: 4px 6px 5px rgb(124, 124, 124);
  }
  button:hover{
    cursor: pointer;
  }
</style>