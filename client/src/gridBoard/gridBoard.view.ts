import {div, turbo, TurboView, img} from "turbodombuilder";
import {GridBoard} from "./gridBoard";
import {makeRequest} from "../makeRequest";
import {success} from "concurrently/dist/src/defaults";
import {page} from "../page/page";
import "./gridBoard.css";


export class GridBoardView extends TurboView<GridBoard> {
    private container: HTMLDivElement;

    private gridItems: Array<HTMLElement> = [];


    protected setupUIElements() {
        super.setupUIElements();

        console.log("Current page: ", window.location.href);

        if(window.location.href.includes("login")) {

            //Big container for the grid
            this.container = div({class:"container", style: "padding-top: 13vh; width: 1400px; margin-left:7%; margin-right: 0; margin-bottom:7%; columns: 3; column-gap: 10px;"});


            // Populate grid with user's images
            console.log("PAGES IN SS :"+sessionStorage.getItem("pages"));
            makeRequest(
                "http://localhost:3000/pages/loadPagesFromPageId",
                "post",
                {"pageIdList":JSON.parse(sessionStorage.getItem("pages"))},
                (responseString)=>{
                    let pageList = JSON.parse(responseString);
                    for (let pageData of pageList) {
                        let box = div({parent:this.container, class: "page-box"});
                        pageData.parent=box;
                        page(pageData);

                    }
                },
                (message)=>{
                    console.log("failure");
                }
            );

        } else { // for now, placeholder images
            
            //Big container for the grid
            this.container = div({class:"container", style: "padding-top: 13vh; width: 1400px; margin-left:7%; margin-right: 0; margin-bottom:7%; columns: 5; column-gap: 20px;"});

            for(let i=1; i<=15; i++){
                let box = div({class: "box", style: "width: 100%; margin-bottom: 10px; break-inside: avoid; border-radius: 15px;"});
                let image = img({src: `https://gallery1.charleskdesigns.com/image/${i.toString().padStart(3, '0')}.jpg`, alt: "image", style: "max-width: 90%; min-width: 90%; border-radius: 10px;"});
                let caption = div({class: "caption", text: "Lorem ipsum ", style: "padding: 10px; text-align: center;"});
                box.append(image, caption);
                this.container.appendChild(box);
            }
        }
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.container]);
    }

}