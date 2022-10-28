class Element {

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

    getPosition(){
        return this.position;
    }
    setPosition(position) {
        this.position = position;
        return this;
    }


    getEnfants(){
        return this.enfants;
    }
    setEnfants(enfants) {
        this.enfants = enfants;
        return this;
    }
    addEnfant(enfant) {
        this.getEnfants.push(enfant);
        this.getConteneur().appendChild(enfant.getConteneur());
        return this;
    }


    constructor(limits, fond, position, enfants) {
        this.init(limits, fond, position, enfants);
        this.build();
    }

    init (limits, fond, position) {
        this.setConteneur(this.buildConteneur())
        .setLimits( limits ? limits : this.buildLimits()) 
        .setFond(fond ? fond : this.buildFond())
        .setPosition( position ? position : this.buildPosition())
        .setEnfants([]);
        

    }

    build() {
       this.getConteneur()
        .setAtr('class', this.getFond())
        .setAtr('style', this.buildLimitsCSS() + this.buildPositionCss())
        .parentNode.setAtr('style', 'position:relative');
        
        
    }


    buildConteneur() {
        return document.body.appendChild(document.createElement('div'));
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

    buildLimitsCSS() {
        return 'width:' + this.getLimits().x +'; height:' + this.getLimits().y  + ';';
    }
    
    buildPosition() {
        return {
            x : '0',
            y : '0'
        }
    }

    buildPositionCss() {
        return ' position:absolute; left:' + this.getPosition().x +'; top:' + this.getPosition().y;
    }




}