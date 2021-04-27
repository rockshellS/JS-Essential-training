class Book {
    constructor(
        name,
        pages,
        color,
        series,
        hardCover,
        putInTrash,
        burn
    ) {
        this.name = name;
        this.pages = pages;
        this.color = color;
        this.series = series;
        this.hardCover = hardCover
        this.putInTrash = putInTrash
        this.burn = burn
    }
    setFire(burnBook){
    this.burn = burnBook
    }
}

export default Book