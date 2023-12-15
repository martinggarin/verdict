class item {
    constructor(id, name, address, image){
        this.id = id;
        this.name = name;
        this.address = address;
        this.image = image;
        this.pics = [];
    }
}
class list {
    constructor(id, name){
        this.id = id; //idk
        this.name = name; //chat name
        this.type = ""; //restaurant, bar, other
        this.participants = []; //[user]
        this.matched = []; //[place]
        this.viewed = {};//{place:likes}
    }
}
class user {
    constructor(email){
        this.email = email;
        this.name = "";
        this.friends = [];
        this.lists = [];
    }
}
export default {item, list, user};