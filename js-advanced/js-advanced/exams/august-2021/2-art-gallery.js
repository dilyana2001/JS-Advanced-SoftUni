class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (Object.keys(this.possibleArticles).some(x => x == articleModel)) {
            if (!this.listOfArticles.some(x => x.articleName == articleName)) {
                this.listOfArticles.push({ articleModel, articleName, quantity });
            } else {
                let article = this.listOfArticles.find(x => x.articleName == articleName);
                article.quantity = Number(article.quantity) + Number(quantity);
            }
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        } else {
            throw new Error(`This article model is not included in this gallery!`)
        }
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(x => x.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        } else {
            let points = 0;
            if (personality == 'Vip') {
                points = 500;
            } else if (personality == 'Middle') {
                points = 250
            } else if (!personality) {
                points = 50;
            }
            this.guests.push({ guestName, points, purchaseArticle: 0 });
            return `You have successfully invited ${guestName}!`
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();
        let model = Object.keys(this.possibleArticles).find(x => x == articleModel);
        let article = this.listOfArticles.find(x => x.articleName == articleName);
        let guest = this.guests.find(x => x.guestName == guestName);
        let requiredPoints = Number((Object.entries(this.possibleArticles).find(x => x[0] == articleModel))[1]);

        if (article) {
            if (article.quantity == 0) {
                return `The ${articleName} is not available`;
            }
        } else if (!article) {

            throw new Error(`This article is not found.`);
        }
        if (article.articleModel != model) {
            throw new Error(`This article is not found.`);
        }

        if (!guest) {
            return `This guest is not invited.`;
        } else {
            if (guest.points < requiredPoints) {
                return `You need to more points to purchase the article.`;
            } else {
                guest.points -= requiredPoints;
                article.quantity -= 1;
                guest.purchaseArticle += 1;
            }
        }
        return `${guestName} successfully purchased the article worth ${requiredPoints} points.`;
    }
    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push(`Articles information:`);
            for (const x of this.listOfArticles) { result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`) }
        } else if (criteria == 'guest') {
            result.push(`Guests information:`);
            for (const x of this.guests) { result.push(`${x.guestName} - ${x.purchaseArticle}`) }
        }
        return result.join('\n')
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));