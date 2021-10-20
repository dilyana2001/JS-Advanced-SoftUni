class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;

    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice`);
        }

        if (username == this.creator) {
            throw new Error(`You can't like your own story!`);
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        }
        let index = this._likes.indexOf(username);
        this._likes.splice(index, 1)
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (id == undefined || !this._comments.some(x => x.Id == id)) {
            this._comments.push({
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies: []
            });
            return `${username} commented on ${this.title}`;
        }
        let commentToReplay = this._comments.find(x => x.Id == id);
        commentToReplay.Replies.push({
            Id: `${commentToReplay.Id}.${commentToReplay.Replies.length + 1}`,
            Username: username,
            Content: content
        })
        return `You replied successfully`;
    }

    toString(sortingType) {
        let sortValue = {
            asc: (a, b) => a.Id - b.Id,
            desc: (a, b) => b.Id - a.Id,
            username: (a, b) => a.Username.localeCompare(b.Username),
        }

        let comments = this._comments.sort(sortValue[sortingType]);
        comments.forEach(x => x.Replies.sort(sortValue[sortingType]));

        let result = [`Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`];
        comments.forEach(x => {
            result.push(`-- ${x.Id}. ${x.Username}: ${x.Content}\n`);
            x.Replies.forEach(y => {
                result.push(`--- ${y.Id}. ${y.Username}: ${y.Content}\n`);
            })
        })
        return result.join('');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));