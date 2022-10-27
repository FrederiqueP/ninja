class Scene {

    getConteneur(){
        return this.conteneur;
    }
    setConteneur(conteneur) {
        this.conteneur = conteneur;
        return this;
    }

    getLimits(){
        return this.limits;
    }
    setLimits(limits) {
        this.limits = limits;
        return this;
    }

    getFond(){
        return this.fond;
    }
    setFond(fond) {
        this.fond = fond;
        return this;
    }


    constructor() {
        this.init();
    }

    init () {
        this.setConteneur(this.buildConteneur())
        .setLimits(this.buildLimits()) 
        .setFond(this.buildFond());
    }

    buildConteneur() {
        let conteneur  = document.createElement('div');
        document.body.appendChild(conteneur);
        return conteneur;
    }

    buildLimits() {
        return {
            x : '100%',
            y : '100%'
        }
    }

    buildFond() {
        return 'foret';
    }
}