class Photo {
    constructor (width=8, height=10) {
        this.width = width;
        this.height = height;
    }

    price() {
        let finalPrice;

        if ((this.width == 8) && (this.height == 10)) return finalPrice = 4;
        else if ((this.wdith == 10) && (this.widht == 12)) return finalPrice = 6;
        else return finalPrice = 10;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} photo and it costs ${this.price()}`;
    }
}



let photo1 = new Photo();
let photo2 = new Photo(20, 30);

console.log(photo1.toString());
console.log(photo2.toString());
