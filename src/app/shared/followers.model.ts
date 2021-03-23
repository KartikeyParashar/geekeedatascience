
export class FollowersModel {
    public name: string;
    public status: string;
    public imagePath: string;

    constructor(name: string, status: string, imagePath: string) {
        this.name = name;
        this.status = status;
        this.imagePath = imagePath;
    }

}