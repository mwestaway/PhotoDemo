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

class MattedPhoto extends Photo {
    constructor (width, height, colour) {
        super (width, height);
        this.colour = colour;
    }

    price() {
        let finalPrice;
        let basePrice;
        let addOnPrice = 10;

        if ((this.width == 8) && (this.height == 10)) basePrice = 4;
        else if ((this.width == 10) && (this.height == 12)) basePrice = 6; 
        else basePrice = 10;

        return finalPrice = basePrice + addOnPrice;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} matted ${this.colour} photo and it costs ${this.price()}`;
    }
}

class FramedPhoto extends Photo {
    constructor (width, height, material, style) {
        super(width, height);
        this.material = material;
        this.style = style;
    }

    price() {
        // Better way of extending this function
        const addOnPrice = 25;
        return super.price() + addOnPrice;
        
    }
    toString() {
        return `This is a ${this.width} by ${this.height} ${this.material} photo. The style is ${this.style} and it costs ${this.price()}`;
    }
}


// Base package photos
let photo1 = new Photo();
let photo2 = new Photo(15, 20);

console.log(photo1.toString());
console.log(photo2.toString());

// Matted package photos
let mattedPhoto1 = new MattedPhoto(8, 10, "purple");
let mattedPhoto2 = new MattedPhoto(15, 22, "blue");

console.log(mattedPhoto1.toString());
console.log(mattedPhoto2.toString());

// Frame & Styled package photos
let framedPhoto1 = new FramedPhoto(8, 10, "wooden", "baroque");
let framedPhoto2 = new FramedPhoto(15, 20, "glass", "abstract");

console.log(framedPhoto1.toString());
console.log(framedPhoto2.toString());
