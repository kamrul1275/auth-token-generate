import axios from "axios";

// user information


const state = () => ({

  loginApiStatus: "",



  // user logout start

  logOut:false,

  setLogout(state, payload){
    state.logOut = payload;
   },

   async userLogout({commit}){
    const response = await axios
     .get("http://127.0.0.1:8000/api/logout",{withCredentials: true, credentials: 'include'})
     .catch((err) => {
     console.log(err);
     });
   
     if(response && response.data){
     commit("setLogout", true)
     }
     else{
     commit("setLogout", false)
     }
   },

   getLogout(state)
{
  return state.logOut;
},

 //user logout end




// get data

  async userProfile({commit}){
    const response = await axios
    .get("http://127.0.0.1:8000/api/users",{withCredentials: true, credentials: 'include'})
    .catch((err) => {
    console.log(err);
    });
   
    if(response && response.data){
    commit("setUserProfile", response.data)
    }
  },



setUserProfile(state, data)
{
  const userProfile = {
    id:data.id,
    name: data.name,
    email: data.email,
   
  };
 
  state.userProfile = userProfile
  }




});

// main end








  //login  1st part........
   
  const mutations = {
    setLoginApiStatus(state, data) {
      state.loginApiStatus = data;
    },
  };






  const actions = {
    async loginApi({ commit }, payload) {
      const response = await axios
        .post("http://127.0.0.1:8000/api/login", 
      payload,{withCredentials: true, credentials: 'include'})
        .catch((err) => {
          console.log(err);
        });
   
      if (response && response.data) {
        commit("setLoginApiStatus", "success");
      } else {
        commit("setLoginApiStatus", "failed");
      }
    },
  };






// getter function

 const getters = {
  getLoginApiStatus(state) {
    return state.loginApiStatus;
  },
  getUserProfile(state){
    return state.userProfile;
  }

};















  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };


