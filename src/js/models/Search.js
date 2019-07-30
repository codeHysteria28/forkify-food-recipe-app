import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults(query){
        const key = 'd559714bf483560eea72158b52cd6c84';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        }catch(error) {
            alert(error);
        }
    }
}