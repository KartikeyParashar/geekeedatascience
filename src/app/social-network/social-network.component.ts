import { Component, OnInit } from '@angular/core';
import { SocialNetworkingModel } from '../shared/socialNetworking.model';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent{
  socialNetwork: SocialNetworkingModel[] = [
    new SocialNetworkingModel("../../assets/images/social-networking-images-duplicates/instagram.png", "instagram"),
    new SocialNetworkingModel("../../assets/images/social-networking-images-duplicates/whatsapp.png", "whatsapp"),
    new SocialNetworkingModel("../../assets/images/social-networking-images-duplicates/linkedin.png", "linkedin"),
    new SocialNetworkingModel("../../assets/images/social-networking-images-duplicates/youtube.png", "youtube"),
    new SocialNetworkingModel("../../assets/images/social-networking-images-duplicates/twitter.png", "twitter"),
    new SocialNetworkingModel("../../assets/images/social-networking-images-duplicates/telegram.png", "telegram"),
    new SocialNetworkingModel("../../assets/images/social-networking-images-duplicates/facebook.png", "facebook"),
  ];

}
