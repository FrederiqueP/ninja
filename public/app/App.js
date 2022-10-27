

class App {

    getScene(){
        return this.scene;
    }

    setScene(scene) {
        this.scene = scene;
        return this;
    }

    constructor (){
        this.init();
    }

    init() {
        // objet scene avec ()
        this.setScene(new Scene());
    }
    
}