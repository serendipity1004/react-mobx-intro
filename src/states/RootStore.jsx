import {MovieStore} from "./MovieStore";

export class RootStore{
    movieStore;

    constructor() {
        this.movieStore = new MovieStore(this);
    }
}
