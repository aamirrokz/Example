    
    
    // postMessage(message) - adds a new message string to the array (DONE)
    // deleteMessage(index) - removes the message corresponding to the index provided
    // addFriend() - increases the friend count by 1
    // removeFriend() - decreases the friend count by 1



var facebookProfile = {
    name: "Aamir",
    friends: 10,
    messages:[],

    postMessage:function(str){
        facebookProfile.messages.push();
    },

    deleteMessage:function(num){
        facebookProfile.messages.splice((num),1);
    },

    addFriend: function(){
        facebookProfile.friends++;
    },
    removeFriend:function(){
        facebookProfile.friends--;
    }
};