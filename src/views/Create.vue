<template>
  <section>
            <div class="container">
                <div class="contactinfo">
                    <router-link :to="{name:'Home'}">
                        <span>B</span>
                        <span>L</span>
                        <span>OG</span>
                    </router-link>
                    <div class="midtext">
                        Welcome Page
                    </div>
                    <div class="footer">
                        <router-link :to="{name:'Home'}">All Blogs</router-link>
                    </div>
                </div> 
                <div class="contactform">
                    <h2>Create Blog</h2>
                    <form @submit.prevent="addProject" class="formbox">
                         <div class="inputbox">
                            <input class="errormesg" type="text" required v-model="title">
                            <span>Title</span>
                            <p class="us">Enter Blog Title Name</p>
                        </div>
                        <div class="inputbox">
                            <textarea class="errormesg" type="text" v-model="body" required></textarea>
                            <span>Blog Details</span>
                            <p class="em">Enter Blog Details</p>
                        </div>
                        <div class="inputbox">
                            <input class="errormesg" id="password" type="text"  v-model="tag" @keydown.enter.prevent="enter">
                            <span>Tags</span>
                            <div>
                                 <div class="tags" v-for="tag in tags" :key="tag">{{tag}}</div>
                            </div>
                        </div>
                        <button  class="conbtn" onclick="myFunction()" ><p>Continue</p></button>
                    </form>
                    
                </div>
                
            </div>
    </section>
</template>
<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import {db, timestamp} from "../firebase/config"
export default {
    setup(){
        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([]);
        let router = useRouter([]);
        let enter = () =>{
            if(!tags.value.includes(tag.value) &&  tag.value != ""){
                tags.value.push(tag.value)
            }
            tag.value =""
        }
        let addProject =  async() => {
           let newPost = {
                      title:title.value,
                      body:body.value,
                      tags:tags.value,
                      created_at:timestamp()
                };

           let res = await db.collection("posts").add(newPost);
          router.push("/");
      };
        return {title,body,tag,addProject,tags,enter};
    }
}
</script>

<style scoped>
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  user-select: none;
}
body{
  overflow:hidden;
  display:flex;  
  justify-content: center;
  align-items:center;
  min-height: 100vh;
  background: linear-gradient(90deg,#a81c1c,#1a5e99);
}
section{
  width:1100px;
  height:550px;
  margin: 0 auto;
}
.container{
  position: relative;
  width: 100%; 
  height:100%;
  z-index: 100;
}
.container .contactinfo{
  position:absolute;
  top:10px;
  left:0px;
  width: 45%;
  height:90%;
  top:50px;
  background:linear-gradient(90deg,rgba(66, 66, 66,0.5),rgba(252, 203, 203, 0.5)),url("https://bit.ly/3220SOs") ;
  background-size:cover;
  box-shadow:0 15px 15px rgba(0,0,0,0.5);
}
.container .contactinfo a{
  font-size:2em;
  user-select: none;
  text-decoration:none;
}
.container .contactinfo a span{
  left:10px;
  position:relative;;
  display:inline-flex;
  color: #000000;
}
.container .contactinfo a span:nth-child(odd){
  letter-spacing:-1em;
  color:#f7f7f7;
  overflow:hidden;
  transition:1s ease-in-out;
}
.container .contactinfo a:hover span:nth-child(odd){
  letter-spacing:0;  
}
.container .contactinfo a span:nth-child(2){
  margin-right:10px;
}
.container .contactinfo a span:nth-child(2):before{
content: "R";
position:absolute;
left:20px;
transition:1.5s ease-in-out;
}
.container .contactinfo span:nth-child(2):after{
  width:200px;
  content: "Bloggy VUe";
  position:absolute;
  left:-20px;
  bottom:-10px;
  font-size:0.5em;
  opacity:0;
  visibility: hidden;
  transition:1s ease-in;
  }
.container .contactinfo a:hover span{
  margin:0;
  color:#f7f7f7;transition:1s ;
}
.container .contactinfo a:hover span:nth-child(2):before{  
  opacity:0;
}  
.container .contactinfo a:hover span:nth-child(2):after{
  opacity:1;
  visibility: visible;
  margin:0;
  }
.container .contactinfo .midtext{
  position:absolute;
  font-size:2em;
  color:rgb(255,255,255);
  font-weight:700;
  top:35%;
  left:30%;
  opacity:0.6;
  user-select:none;
}  
.container .contactinfo .midtext:before{
  content: 'Get create some blogs';
  position: absolute;
  font-size: 20px;
  bottom:-70px;
  left:100px;
  width:200px;
}
.container .contactinfo .midtext:hover{
  opacity:0.8;
}
.footer a{
  position: absolute;
  bottom:10px;
  cursor:pointer;
  color:white;
  opacity:0.6;
  user-select:none;
}
.footer:hover a{
  color:rgb(0, 0, 0)
}
.contactform{
  position:absolute;
  top:10px;
  left:45%;
  width: 55%;
  height:90%;
  top:50px;
  background: #ffffff;
  background-size:cover;
  box-shadow:0 15px 15px rgba(0,0,0,0.5);
  border-radius:3px;
}
.contactform h2{
  margin-left:35px;
  margin-top:20px;
  font-size: 2em;
  font-weight: 700;
  font-style: bold;
}
.formbox{
  position: relative;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  flex-wrap:wrap;
  padding-top:15px;
  margin:0 10px;
}
.inputbox{
  margin:20px 20px;
  width:100%;
  position: relative;
}
.inputbox input{
  width:90% !important;
  padding:5px 0;
  font-size:18px;
  border:none;
  border-bottom: 2px solid ;
  border-image: linear-gradient(90deg,#a81c1c,#1a5e99) 90;
  border-radius: 10px;
  outline:none;
  background-color:transparent;
}
.inputbox textarea{
  width:90% !important;
  max-height:120px;
  padding:5px 0;
  font-size:18px;
  border:none;
  border-bottom: 2px solid ;
  border-image: linear-gradient(90deg,#a81c1c,#1a5e99) 90;
  border-radius: 10px;
  outline:none;
  background-color:transparent;
}
.inputbox span{
  position:absolute;
  left:10px;
  padding:4px 0;
  font-style: 18px;
  font-weight: 300;
  color:#1a5e99;
  transition:0.5s;
  pointer-events: none;
  font-size:18px;
}
.inputbox p{
  padding:4px 0;
  font-style: 10px;
  font-weight: 300;
  color:rgb(221, 144, 21);
  transition:0.5s;
  pointer-events: none;
  font-size:10px;
}
.inputbox input:focus ~ span,
.inputbox input:valid ~ span,
.inputbox textarea:focus ~ span,
.inputbox textarea:valid ~ span{
  transform:translateY(-25px);
  font-size:19px;
  font-weight: 400;
  letter-spacing:1px;
  color:#a81c1c;
}
.conbtn{
  width:50%;
  height:45px;
  margin: 20px auto;
  outline:none;
  border:none;
  background:linear-gradient(90deg,#a81c1c,rgb(168, 28, 156),#1a5e99);
  z-index: 1100;
  transition:0.7s;
  border-radius: 10px;
}
.conbtn p{
  color:#fff;
  opacity:0.6;
  transition:0.7s;
}
.conbtn:hover p{
  font-size:20px;
}
.conbtn:hover{
  border:3px solid #fff;
}
.tags{
    display: inline-block;
    margin: 10px 10px 0 0;
    color: rgb(255, 255, 255);
    background:linear-gradient(90deg,#1c7ca8,#1a5e99);
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 14px;
}
/* .flip{
  transition:2s;
  transform:rotateX(360deg);
} */
@media (max-width:767px)
{
  .container .contactinfo{
    display:none;
  }
  .container .contactform{
    width:100%;
    left:0;
  }
}
</style>