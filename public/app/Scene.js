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
        this.build();
    }

    init () {
        this.setConteneur(this.buildConteneur())
        .setLimits(this.buildLimits()) 
        .setFond(this.buildFond());
    }

    build() {
        let conteneur = this.getConteneur();
        conteneur.setAttribute('class', this.getFond());
        conteneur.setAttribute('style', 'width:' + this.getLimits().x +'; height:' + this.getLimits().y);
    }


    buildConteneur() {
        let conteneur  = document.createElement('div');
        document.body.appendChild(conteneur);
        return conteneur;
    }

    buildLimits() {
        return {
            x : '100vw',
            y : '100vh'
        }
    }

    buildFond() {
        return 'foret';
    }
}