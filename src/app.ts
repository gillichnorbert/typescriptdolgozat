/*
* File: app.ts
* Author: Gillich Norbert
* Copyright: 2024, Gillich Norbert
* Group: Szoft I-2-N
* Date: 2024-05-30
* Github: https://github.com/gillichnorbert/
* Licenc: GNU GPL
*/
 

class Diagonal {
    aSideInput?: HTMLInputElement | null;
    bSideInput?: HTMLInputElement | null;
    diagonalInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.eventHandle();

    }

    bindHtml() {
        this.aSideInput = document.querySelector('#aSide')
        this.bSideInput = document.querySelector('#bSide')
        this.diagonalInput = document.querySelector('#diagonal')
        this.calcButton = document.querySelector('#calcButton')
    }

    eventHandle() {
        this.calcButton?.addEventListener('click', () =>{
            this.startCalc();
        });
    }

    startCalc() {
        const aSide = Number(this.aSideInput?.value);
        const bSide = Number(this.bSideInput?.value);
        const diagonal = this.calcDiagonal(aSide, bSide);
        this.renderResult(diagonal);
    }

    calcDiagonal(aSide: number, bSide: number):number {
        return Math.sqrt(aSide * aSide + bSide * bSide);
    }

    renderResult(diagonal: number) {
        if (this.diagonalInput) {
            this.diagonalInput.value = String(diagonal); 
        }
    }
}

new Diagonal();