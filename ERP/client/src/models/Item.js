class Item {
    constructor() {
        this.id = "0";
        this.name = "";
        this.spec = "";
        this.unit = 0;
        this.units = [];
        this.qty = 0;
        this.qtyAvailable = 0;
        this.sendQty = 0;
        this.cost = 0;
        this.total = 0;
        this.reqRemark = "";
        this.sendRemark = "";
    }

    load() {
        //set id and use this get units
        this.units = ["Cubic Meter", "Cubic Centimeter"];
        this.qtyAvailable = 10;
    }

    clear() {
        //set id and use this get units
        this.units = [];
        this.qtyAvailable = 0;
    }
}

export default Item;
