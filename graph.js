class Person {
    constructor(name) {
        this.name = name;
        this.friends = [];
        this.visited = false;
    }

    addFriend(name) {
        this.friends.push(name);
    }

    traverseAllFriends() {
        let resetFriends = [this],
            queue = [this];
            
        this.visited = true;    
        
        while(queue.length) {
            let currentPerson = queue.unshift(),
                { friends } = currentPerson;
            
            console.log(currentPerson.name);           

            for(let i = 0; i < friends.length; i++) {
                let currentFriend = friends[i];

                if(!currentFriend.visited) {
                    queue.push(currentFriend);
                    resetFriends.push(currentFriend);
                    friends.visited = true
                }
            }
        }
        
        resetFriends = resetFriends.map(val => val.visited = false);
    }
}

