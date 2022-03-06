class TransferReq {
    constructor() {
        this.date = this.makeid(10);
        this.id = Math.floor(Math.random() * 1000) + 1;;
        this.sendSite = 0;
        this.sendStore = 0;
        this.recSite = 0;
        this.recStore = 0;
        this.status = 0;

        this.items = [];
    }

    makeid(length) {
        var result = "";
        var characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }
}

export default TransferReq;
