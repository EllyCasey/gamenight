

export class Gamer{
    
    constructor(gamerName, gamerScore, gamerPicture) {
        this.name = gamerName
        this.score = gamerScore
        this.picture = gamerPicture
    }

    get gamerHTMLFormat() {
        return `      
            <div class="col-8">
                <div>
                    <p class="fs-1">Ricky</p>
                </div>
            </div>
        `
        
    }
}

